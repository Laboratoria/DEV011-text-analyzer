import analyzer from "./analyzer.js";

document.querySelector("textarea").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const contActCaract = analyzer.getCharacterCount(text);
  const contActCaractSinEspNiSignos = analyzer.getCharacterCountExcludingSpaces(text);
  const contActPalabras = analyzer.getWordCount(text);
  const promedioPalabrasAct = analyzer.getAverageWordLength(text);
  const contActNumeros = analyzer.getNumberCount(text);
  const sumaNumerosAct = analyzer.getNumberSum(text);

  document.querySelector("li[data-testid=character-count]").innerHTML = `Caracteres: ${contActCaract}`;
  document.querySelector("li[data-testid=character-no-spaces-count]").innerHTML = `Caracteres sin espacio: ${contActCaractSinEspNiSignos}`;
  document.querySelector("li[data-testid=word-count]").innerHTML = `Palabras: ${contActPalabras}`;
  document.querySelector("li[data-testid=word-length-average]").innerHTML = `Promedio de longitud: ${promedioPalabrasAct}`;
  document.querySelector("li[data-testid=number-count]").innerHTML = `Números: ${contActNumeros}`;
  document.querySelector("li[data-testid=number-sum]").innerHTML = `Suma números: ${sumaNumerosAct}`;
});


const btn = document.getElementById("reset-button");

btn.addEventListener("click", function () {
  (document.querySelector("textarea").value = ""),
  (document.querySelector("li[data-testid=character-count]").innerHTML = "Caracteres: 0"),
  (document.querySelector("li[data-testid=character-no-spaces-count]").innerHTML = "Caracteres sin espacio: 0"),
  (document.querySelector("li[data-testid=word-count]").innerHTML = "Palabras: 0"),
  (document.querySelector("li[data-testid=word-length-average]").innerHTML = "Promedio de longitud: 0"),
  (document.querySelector("li[data-testid=number-count]").innerHTML = "Números: 0"),
  (document.querySelector("li[data-testid=number-sum]").innerHTML = "Suma números: 0");
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
