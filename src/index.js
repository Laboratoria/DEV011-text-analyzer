import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


// Campo de entrada de texto
const inputTexto = document.querySelector('[name="user-input"]');
inputTexto.addEventListener("input", contadorPalabras);

//CONTADOR DE PALABRAS
function contadorPalabras() {
  const wordcount = document.querySelector('[data-testid="word-count"]');
  wordcount.textContent=analyzer.getWordCount(inputTexto.value)
  contadorCaracterEsp()
}

//CONTADOR DE CARACTERES INCLUYENDO ESPACIOS
function contadorCaracterEsp() {
  const Carcount = document.querySelector('[data-testid="character-count"]');
  Carcount.textContent=analyzer.getCharacterCount(inputTexto.value)
  contadorCaractersinespacio()
}

//CONTADOR DE CARACTERES SIN ESPACIOS NI SIGNOS DE PUNTUACION
function contadorCaractersinespacio() {
  const wordcountsig = document.querySelector('[data-testid="character-no-spaces-count"]');
  wordcountsig.textContent=analyzer.getCharacterCountExcludingSpaces(inputTexto.value)
  contadorNum()
}

//CONTADOR DE NUMEROS
function contadorNum() {
  const numcount = document.querySelector('[data-testid="number-count"]');
  numcount.textContent=analyzer.getNumberCount(inputTexto.value)
  sumaNum()
}
    
//SUMA DE NUMEROS  
function sumaNum() {
  const numsum = document.querySelector('[data-testid="number-sum"]');
  numsum.textContent=analyzer.getNumberSum(inputTexto.value)
  promedio()
}   

//PROMEDIO
function promedio() {
  const promedio = document.querySelector('[data-testid="word-length-average"]');
  promedio.textContent=analyzer.getAverageWordLength(inputTexto.value)
}

//Boton  limpiar metricas

const boton=document.querySelector("#reset-button");
boton.addEventListener("click", limpiar)

function limpiar(){
  inputTexto.value="";
  const wordcount = document.querySelector('[data-testid="word-count"]');
  const Carcount = document.querySelector('[data-testid="character-count"]');
  const wordcountsig = document.querySelector('[data-testid="character-no-spaces-count"]');
  const numcount = document.querySelector('[data-testid="number-count"]');
  const numsum = document.querySelector('[data-testid="number-sum"]');
  const promedio = document.querySelector('[data-testid="word-length-average"]');

  wordcount.textContent=0;
  Carcount.textContent=0;
  wordcountsig.textContent=0;
  numcount.textContent=0;
  numsum.textContent=0;
  promedio.textContent=0;

}