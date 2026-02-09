const botao = document.getElementById("btnBuscar");
const inputCidade = document.getElementById("cidade");

botao.addEventListener("click", () => {
  const cidade = inputCidade.value.trim();

  if (cidade === "") {
    alert("Digite uma cidade");
    return;
  }

  buscarTemperatura(cidade);
});
