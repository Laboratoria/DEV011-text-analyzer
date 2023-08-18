import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
localStorage["text"] = document.querySelector('[name="user-input"]').value;  
  

const boton=document.querySelector("#reset-button");
boton.addEventListener("click", limpiar)

function limpiar() {
    document.querySelector('[name="user-input"]').value="";
}

