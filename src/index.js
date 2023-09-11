import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea =
  document.getElementsByName(
    "user-input"
  )[0]; /*manipulamos el DoM a través de document.*/
const wordCounter = document.getElementsByClassName("word-counter")[0];
const characterCount = document.getElementsByClassName("character-count")[0];
const limpiarBoton = document.getElementById("reset-button");
limpiarBoton.addEventListener("click", function () {
  textArea.value = ""; // Establecer el valor del textarea como cadena vacía
});

textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  wordCounter.textContent = analyzer.getWordCount(textValue);
  characterCount.textContent = analyzer.getCharacterCount(textValue);
});

const CharacterCountExcludingSpaces = document.querySelector(
  "li[data-testid='character-no-spaces-count']"
);
textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  CharacterCountExcludingSpaces.innerHTML =
    'Recuento de caracteres excluyendo espacios y signos de puntuación  <p class="character-no-spaces-count">' +
    analyzer.getCharacterCountExcludingSpaces(textValue) +
    "</p>";
});

const NumberCount = document.getElementsByClassName("number-count")[0];
textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  NumberCount.textContent = analyzer.getNumberCount(textValue);
});

const NumberSum = document.getElementsByClassName("number-sum")[0];
textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  NumberSum.textContent = analyzer.getNumberSum(textValue);
});

const AverageWordLenght = document.getElementsByClassName(
  "word-length-average"
)[0];
textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  AverageWordLenght.textContent = analyzer.getAverageWordLength(textValue);
});
