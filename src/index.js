import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Función para mandar llamar el contenido del DOM 
document.addEventListener("DOMContentLoaded", function () {

  // Funcionalidad del boton que limpia el cuadro de texto
  const botonCleaner = document.getElementById("reset-button");
  botonCleaner.addEventListener('click', function (){
    const userInputNodeClean = document.getElementsByName("user-input")[0];
    userInputNodeClean.value = "";
    defaultValue();
  })

  //Función que manda llamar addEventListener del botón, para actualizar las métricas
  function defaultValue(){
    const wordCount = document.querySelector("[data-testid='word-count']");
    wordCount.textContent = "Recuento de palabras: 0";

    const characterCount = document.querySelector("li[data-testid='character-count']");
    characterCount.textContent ="Recuento de caracteres: 0";

    const characterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']");
    characterNoSpacesCount.textContent ="Recuento de caracteres excluyendo espacios y signos de puntuación: 0";

    const numberCount = document.querySelector("li[data-testid='number-count']");
    numberCount.textContent ="Recuento de números: 0";

    const numberSum = document.querySelector("li[data-testid='number-sum']");
    numberSum.textContent ="Suma total de números: 0";

    const wordLengthAverage = document.querySelector("li[data-testid='word-length-average']");
    wordLengthAverage.textContent ="Longitud media de palabras: 0";
  }

  // Actualización de las métricas
  document.getElementsByName("user-input")[0].addEventListener('keyup',function (){

    const userInput = document.getElementsByName("user-input")[0];
    userInput.textContent=document.getElementsByName("user-input")[0].value;

    const wordCount = document.querySelector("[data-testid='word-count']");
    wordCount.innerHTML = "Recuento de palabras: <strong>" + analyzer.getWordCount(userInput.textContent) + "</strong>";

    const characterCount = document.querySelector("li[data-testid='character-count']");
    characterCount.innerHTML ="Recuento de caracteres: <strong>" + analyzer.getCharacterCount(userInput.textContent) + "</strong>";

    const characterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']");
    characterNoSpacesCount.innerHTML ="Recuento de caracteres excluyendo espacios y signos de puntuación: <strong>" + analyzer.getCharacterCountExcludingSpaces(userInput.textContent) + "</strong>";

    const numberCount = document.querySelector("li[data-testid='number-count']");
    numberCount.innerHTML ="Recuento de números: <strong>" + analyzer.getNumberCount(userInput.textContent) + "</strong>";

    const numberSum = document.querySelector("li[data-testid='number-sum']");
    numberSum.innerHTML ="Suma total de números: <strong>" + analyzer.getNumberSum(userInput.textContent) + "</strong>";

    const wordLengthAverage = document.querySelector("li[data-testid='word-length-average']");
    wordLengthAverage.innerHTML ="Longitud media de palabras: <strong>" + analyzer.getAverageWordLength(userInput.textContent) + "</strong>";
    //console.log (userInput.textContent, userInput.value,"texto");
  })
  //console.log("Prueba")
})
