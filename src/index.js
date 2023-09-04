import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


// Campo de entrada de texto 
//En esta constante llamada inputTexto; se le aplica el método querySelector; que recupera el elemento de DOM del textarea
//Luego, se le garega el evento Keyup, lo que significa que al momento de que se presione alguna tecla, va a ocurrir la funcion de contadorpalabaras
const inputTexto = document.querySelector('[name="user-input"]');
inputTexto.addEventListener("keyup", contadorPalabras);

//CONTADOR DE PALABRAS
//Esta funcion llamada contadorPalabras contiene una constante llamada wordcount, en esta constatnte, se le aplica el metodo queryselector, que recupera/selecciona el atributo datatestid,wordcount
//Luego a la constante wordcount, se le agrega la propiedad textconten, que significa que en en donde se ha recuperado el atributo, se debe imprimir el contenido especificado
function contadorPalabras() {
  const wordcount = document.querySelector('[data-testid="word-count"]');
  wordcount.textContent="Palabras: " + analyzer.getWordCount(inputTexto.value)
  contadorCaracterEsp()
}

//CONTADOR DE CARACTERES INCLUYENDO ESPACIOS
function contadorCaracterEsp() {
  const Carcount = document.querySelector('[data-testid="character-count"]');
  Carcount.textContent="Caracteres: " + analyzer.getCharacterCount(inputTexto.value)
  contadorCaractersinespacio()
}

//CONTADOR DE CARACTERES SIN ESPACIOS NI SIGNOS DE PUNTUACION
function contadorCaractersinespacio() {
  const wordcountsig = document.querySelector('[data-testid="character-no-spaces-count"]');
  wordcountsig.textContent="Caracteres sin espacio: "+ analyzer.getCharacterCountExcludingSpaces(inputTexto.value)
  contadorNum()
}

//CONTADOR DE NUMEROS
function contadorNum() {
  const numcount = document.querySelector('[data-testid="number-count"]');
  numcount.textContent="Números: " + analyzer.getNumberCount(inputTexto.value)
  sumaNum()
}
    
//SUMA DE NUMEROS  
function sumaNum() {
  const numsum = document.querySelector('[data-testid="number-sum"]');
  numsum.textContent="Suma de números: "+ analyzer.getNumberSum(inputTexto.value)
  promedio()
}   

//PROMEDIO
function promedio() {
  const promedio = document.querySelector('[data-testid="word-length-average"]');
  promedio.textContent="Promedio longitud de palabras: " + analyzer.getAverageWordLength(inputTexto.value)
}

//Boton  limpiar metricas
/*
Este código asigna un evento de clic al botón con el id "reset-button". 
Cuando se hace clic en el botón, la función limpiar se ejecuta. 
La función limpiar establece el valor del elemento inputTexto en una cadena vacía y actualiza los valores de varios elementos del DOM con los valores correspondientes a cero. 
Estos elementos son seleccionados utilizando selectores de atributos y sus valores se actualizan utilizando la propiedad textContent.
*/
const boton=document.getElementById("reset-button");
boton.addEventListener("click", limpiar)

function limpiar(){
  inputTexto.value="";
  const wordcount = document.querySelector('[data-testid="word-count"]');
  const Carcount = document.querySelector('[data-testid="character-count"]');
  const wordcountsig = document.querySelector('[data-testid="character-no-spaces-count"]');
  const numcount = document.querySelector('[data-testid="number-count"]');
  const numsum = document.querySelector('[data-testid="number-sum"]');
  const promedio = document.querySelector('[data-testid="word-length-average"]');

  wordcount.textContent="Palabras: " + 0;
  Carcount.textContent="Caracteres: " + 0;
  wordcountsig.textContent="Caracteres sin espacios: "+ 0;
  numcount.textContent="Números: " + 0;
  numsum.textContent="Suma de números: " + 0;
  promedio.textContent="Promedio longitud de palabras: " + 0;

}