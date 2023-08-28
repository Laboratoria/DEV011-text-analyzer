import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let textArea = document.getElementsByName("user-input")[0];
const limpiarBoton = document.getElementById("reset-button");
limpiarBoton.addEventListener("click", function (
    
) {
    return textArea.value = ""; // Establecer el valor del textarea como cadena vacía
});



