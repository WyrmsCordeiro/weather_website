function climaTexto(code, vento) {
  if (code === 0) return "Ensolarado";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "Chuvoso";
  if (code >= 71 && code <= 77) return "Nevando";
  if (code >= 1 && code <= 3) return "Nublado";
  return "Tempo instável";
}

function climaFundo(tipo) {
  if (tipo === "Ensolarado") return "assets/images/sol.gif";
  if (tipo === "Chuvoso") return "assets/images/chuva-kyogre.gif";
  if (tipo === "Nevando") return "assets/images/neve.gif";
  return "assets/images/nublado.gif";
}

function mostrarTemperatura(cidade, temperatura, code) {
  const resultado = document.getElementById("resultado");

  const tipo = climaTexto(code);
  resultado.textContent =
  `Temperatura atual em ${cidade}: ${temperatura}°C — ${tipo}`;


  document.body.style.backgroundImage = `url("${climaFundo(tipo)}")`;
}
