import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea =
  document.getElementsByName(
    "user-input"
  )[0]; /*manipulamos el DoM a través de document.*/
const wordCounter = document.querySelector(
  /*querySelector es un método que retorna el primer elemento dentro del documento que sea compatible con el selector */
  "li[data-testid='word-count']"
);
const characterCount = document.querySelector(
  "li[data-testid='character-count']"
);
const limpiarBoton = document.getElementById("reset-button");
limpiarBoton.addEventListener("click", function () {
  textArea.value = ""; // Establecer el valor del textarea como cadena vacía
});

textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  wordCounter.innerHTML =
    "Recuento de Palabras <br><br>" + analyzer.getWordCount(textValue);
  characterCount.innerHTML =
    "Recuento de caracteres <br><br>" + analyzer.getCharacterCount(textValue);
});

const CharacterCountExcludingSpaces = document.querySelector(
  "li[data-testid='character-no-spaces-count']"
);
textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  CharacterCountExcludingSpaces.innerHTML =
    "Recuento de caracteres excluyendo espacios y signos de puntuación <br><br>" +
    analyzer.getCharacterCountExcludingSpaces(textValue);
});

const NumberCount = document.querySelector("li[data-testid='number-count']");
textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  NumberCount.innerHTML =
    "Recuento de números <br><br>" + analyzer.getNumberCount(textValue);
});

const NumberSum = document.querySelector("li[data-testid='number-sum']");
textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  NumberSum.innerHTML =
    "Suma de números <br><br>" + analyzer.getNumberSum(textValue);
});

const AverageWordLenght = document.querySelector(
  "li[data-testid='word-length-average']"
);
textArea.addEventListener("keyup", function () {
  const textValue = textArea.value;
  AverageWordLenght.innerHTML =
    "Longitud media de palabras <br><br>" +
    analyzer.getAverageWordLength(textValue);
});
