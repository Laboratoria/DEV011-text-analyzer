import analyzer from "./analyzer.js";

const mensaje = document.querySelector("textarea");
const contadorCaract = document.querySelector(".caractCuenta");
const contadorCaractSinEsp = document.querySelector(".caractSinEsp");
const contadorPalabras = document.querySelector(".palabrasCuenta");
const contadorNumeros = document.querySelector(".numCuenta");
const sumaNumeros = document.querySelector(".sumNum");

mensaje.addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActCaract = analyzer.getCharacterCount(text);
  contadorCaract.innerHTML = `Caracteres: ${contActCaract}`;
});

mensaje.addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActCaractSinEspNiSignos = analyzer.getCharacterCountExcludingSpaces(text);
  contadorCaractSinEsp.innerHTML = `Caracteres sin espacio: ${contActCaractSinEspNiSignos}`;
});

mensaje.addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActPalabras = analyzer.getWordCount(text);
  contadorPalabras.innerHTML = `Palabras: ${contActPalabras}`;
});

mensaje.addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActNumeros = analyzer.getNumberCount(text);
  contadorNumeros.innerHTML = `Números: ${contActNumeros}`;
});
//mensaje.addEventListener("focus", function(e) {
//e.target.style.background = "#FF9966";
//});
mensaje.addEventListener("keyup", function (e) {
  const text = e.target.value;
  const sumaNumerosAct = analyzer.getNumberSum(text);
  sumaNumeros.innerHTML = `Suma números: ${sumaNumerosAct}`;
});

const btn = document.getElementById("resetButton");

btn.addEventListener("click", function () {
  (mensaje.value = " "), (contadorCaract.innerHTML = "Caracteres: 0"),  (contadorPalabras.innerHTML = "Palabras: 0"), (contadorNumeros.innerHTML = "Números: ");
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
