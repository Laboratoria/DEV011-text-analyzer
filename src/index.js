import analyzer from './analyzer.js';

//Obtenemos el contenido que sea ingresado al textarea
const textbox = document.querySelector('[name="user-input"]');
//Obtenemos los elementos <li> y su valor
const contadoresMetrica = document.getElementsByClassName("metrica");
const botonReset = document.getElementById("reset-button");

//Empezamos a monitorear eventos en el DOM
//Monitoreamos el ingreso de characteres en tiempo real del textarea.
textbox.addEventListener("keyup",actualizarMetricas);
botonReset.addEventListener("click", limpiarTexto)

//Funcion que actualiza las metricas tras la deteccion de un evento en tiempo real.
function actualizarMetricas(){
  //obtenemos la metrica de palabras con uso del objeto analyzer
  const WordCount = analyzer.getWordCount(textbox.value);
  contadoresMetrica[0].textContent = "Palabras: " + WordCount;
  
  //cuenta de characteres
  //obtenemos la metrica de caracteres con uso del objeto analyzer
  const CharCount = analyzer.getCharacterCount(textbox.value);
  contadoresMetrica[1].textContent = "Caracteres: " + CharCount;
  
  //obtenemos la metrica de caracteres con uso del objeto analyzer
  const CharCountExSpace = analyzer.getCharacterCountExcludingSpaces(textbox.value);
  contadoresMetrica[2].textContent = "Caracteres Sin Espacios: " + CharCountExSpace;
  
  
}

function limpiarTexto(){
  textbox.value = "";
  actualizarMetricas();
}

