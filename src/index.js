import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let textArea = document.getElementsByName("user-input")[0];
const limpiarBoton = document.getElementById("reset-button");
limpiarBoton.addEventListener("click", function () {
    textArea.value = ""; // Establecer el valor del textarea como cadena vacía
});

textArea.addEventListener("keyup", function() {
    const resultado =  analyzer.getWordCount (textArea.value) 
    console.log (resultado)  
})

let wordCounter = document.getElementsByClassName("word-counter")[0];
textArea.addEventListener("keyup", function() {
    const resultado =  analyzer.getWordCount(textArea.value) 
    wordCounter.textContent = resultado
    return wordCounter

})
