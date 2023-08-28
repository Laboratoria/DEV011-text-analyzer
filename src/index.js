import analyzer from './analyzer.js';

//Obtenemos el contenido que sea ingresado al textarea
const textbox = document.querySelector('[name="user-input"]');
//Obtenemos los elementos <li> y su valor
const contadorMetrica = document.getElementsByClassName("metrica");

//Empezamos a monitorear eventos en el DOM
//Monitoreamos el ingreso de characteres en tiempo real del textarea.
textbox.addEventListener("keyup",actualizarMetricas);

//Funcion que actualiza las metricas tras un evento en tiempo real.
function actualizarMetricas(){
  //cuenta de characteres
  //obtenemos la metrica de
  const CharCount = analyzer.getCharacterCount(textbox.value);
  contadorMetrica[0].textContent = "Caracteres " + CharCount;
}

