import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//document.getElementById("reset-button").onclick = function () {
//  location.href = "index.html";
// };


const botonCleaner = document.getElementById("reset-button")
botonCleaner.addEventListener('click', function (){
  const userInputNodeClean = document.getElementsByName("user-input")[0];
  userInputNodeClean.value = "";
})

document.getElementsByName("user-input")[0].addEventListener('keyup',function (){

  const userInput = document.getElementsByName("user-input")[0];
  userInput.textContent=document.getElementsByName("user-input")[0].value;

  const wordCount = document.querySelector("[data-testid='word-count']");
  wordCount.textContent = "Recuento de palabras: " + analyzer.getWordCount(userInput.textContent);

  const characterCount = document.querySelector("li[data-testid='character-count']");
  characterCount.textContent ="Recuento de caracteres: " + analyzer.getCharacterCount(userInput.textContent);

  const characterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']");
  characterNoSpacesCount.textContent ="Recuento de caracteres excluyendo espacios y signos de puntuación: " + analyzer.getCharacterCountExcludingSpaces(userInput.textContent);

  const numberCount = document.querySelector("li[data-testid='number-count']");
  numberCount.textContent ="Recuento de números: " + analyzer.getNumberCount(userInput.textContent);

  const numberSum = document.querySelector("li[data-testid='number-sum']");
  numberSum.textContent ="Suma total de números: " + analyzer.getNumberSum(userInput.textContent);

  const wordLengthAverage = document.querySelector("li[data-testid='word-length-average']");
  wordLengthAverage.textContent ="Longitud media de palabras: " + analyzer.getAverageWordLength(userInput.textContent);
  //console.log (userInput.textContent, userInput.value,"texto");
})