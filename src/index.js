/*import analyzer from './analyzer.js';*/

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//localStorage["texto"] = document.querySelector('[name="user-input"]').value;  
  

// Campo de entrada de texto
const inputTexto = document.querySelector('[name="user-input"]');
inputTexto.addEventListener("input", contadorPalabras);



function getName(name) {
    return document.getElementsByTagName(name).value;
}

function innerHTML(data, result){
   return document.querySelector(data),innerHTML = result;
}

function contadorPalabras() {

 setInterval(function(){
    let p = getName("textarea");
    //let pEsp = p.split(" ");
    if (p > 0) {
        innerHTML('[data-testid="word-count"], p.length');
    }
 }
 , 0);
}

/*
let textonuevo = getElementsByTagName(textarea).innerHTML;

let contPala = textonuevo.split(" ");

let NumPala = document.querySelector('[data-testid="word-count"]');
NumPala.textContent = contPala.length;
*/

//Boton limpiar metricas

const boton=document.querySelector("#reset-button");
boton.addEventListener("click", limpiar)

function limpiar() {
    document.querySelector('[name="user-input"]').value="";
}