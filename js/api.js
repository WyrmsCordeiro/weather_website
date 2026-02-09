async function buscarTemperatura(cidade) {
  // 1) Cidade -> latitude/longitude (geocoding)
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    cidade
  )}&count=1&language=pt`;

  const geoResponse = await fetch(geoUrl);
  const geoData = await geoResponse.json();

  if (!geoData.results || geoData.results.length === 0) {
    alert("Cidade não encontrada");
    return;
  }

  const { latitude, longitude, name } = geoData.results[0];

  // 2) Clima atual
  const climaUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  const climaResponse = await fetch(climaUrl);
  const climaData = await climaResponse.json();

  const temperatura = climaData.current_weather.temperature;
  const code = climaData.current_weather.weathercode;
  const vento = climaData.current_weather.windspeed;

  // Mostra no UI (essa função está no ui.js)
  mostrarTemperatura(name, temperatura, code, vento);
}
