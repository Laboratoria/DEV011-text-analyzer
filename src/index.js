import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let textArea = document.getElementsByName("user-input")[0]; /*manipulamos el DoM a través de document.*/
let wordCounter = document.getElementsByClassName("word-counter")[0];
let characterCount = document.getElementsByClassName ("character-count")[0];
const limpiarBoton = document.getElementById("reset-button");
limpiarBoton.addEventListener("click", function () {
    textArea.value = ""; // Establecer el valor del textarea como cadena vacía
});

textArea.addEventListener("keyup", function() {
    let textValue = textArea.value
    wordCounter.textContent = analyzer.getWordCount(textValue)                               
    characterCount.textContent = analyzer.getCharacterCount(textValue)
    CharacterCountExcludingSpaces.textContent = analyzer.getCharacterCountExcludingSpaces(textValue)
})


let CharacterCountExcludingSpaces = document.getElementsByClassName ("character-no-spaces-count1")[0];
textArea.addEventListener("keyup", function(){
    const total2 = analyzer.getCharacterCountExcludingSpaces (textArea.value)
    // console.log (total2)
    return CharacterCountExcludingSpaces
})

textArea.addEventListener ("keyup", function() {    /*keyup es la acción de addEventListener escucha, en este caso, el texto que se ingresa en el textarea*/
    const total3 = analyzer.getNumberCount (textArea.value)
    console.log (total3)
})

let NumberCount = document.getNumberCount ("number-count")
textArea.addEventListener ("keyup", function(){ 
    const total3 = analyzer.getNumberCount (textArea.value)
    NumberCount.textContent = total3
    return NumberCount
})