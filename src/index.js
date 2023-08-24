import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.getElementById("textArea");
const limpiarBoton = document.getElementById("reset-button");
limpiarBoton.addEventListener("click", function() {
    return textarea.value = ""; // Establecer el valor del textarea como cadena vacía
});