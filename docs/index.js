import analyzer from "./analyzer.js";

document.querySelector("textarea").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActCaract = analyzer.getCharacterCount(text);
  document.querySelector(".caractCuenta").innerHTML = `Caracteres: ${contActCaract}`;
});

document.querySelector("textarea").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActCaractSinEspNiSignos = analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector(".caractSinEsp").innerHTML = `Caracteres sin espacio: ${contActCaractSinEspNiSignos}`;
});

document.querySelector("textarea").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActPalabras = analyzer.getWordCount(text);
  document.querySelector(".palabrasCuenta").innerHTML = `Palabras: ${contActPalabras}`;
});

document.querySelector("textarea").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const promedioPalabrasAct = analyzer.getAverageWordLength(text);
  document.querySelector(".extPalabrasProm").innerHTML = `Promedio de longitud: ${promedioPalabrasAct}`;
});

document.querySelector("textarea").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActNumeros = analyzer.getNumberCount(text);
  document.querySelector(".numCuenta").innerHTML = `Números: ${contActNumeros}`;
});

document.querySelector("textarea").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const sumaNumerosAct = analyzer.getNumberSum(text);
  document.querySelector(".sumNum").innerHTML = `Suma números: ${sumaNumerosAct}`;
});

const btn = document.getElementById("reset-button");

btn.addEventListener("click", function () {
  (document.querySelector("textarea").value = ""), (document.querySelector(".caractCuenta").innerHTML = "Caracteres: 0"), (document.querySelector(".caractSinEsp").innerHTML = "Caracteres sin espacio: 0"), (document.querySelector(".palabrasCuenta").innerHTML = "Palabras: 0"), (document.querySelector(".extPalabrasProm").innerHTML = "Promedio de longitud: 0"), (document.querySelector(".numCuenta").innerHTML = "Números: 0"), ( document.querySelector(".sumNum").innerHTML = "Suma números: 0");
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
