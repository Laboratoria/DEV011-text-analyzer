import analyzer from './analyzer.js';

const mensaje = document.querySelector("textarea");
const contadorCaract = document.getElementById("caract");
const contadorPalabras = document.getElementById("palabras");

mensaje.addEventListener("keyup", function(e) {
    const text = e.target.value;
    const contActCaract = analyzer.getCharacterCount(text);
    contadorCaract.innerHTML = `Caracteres: ${contActCaract}`;
});

mensaje.addEventListener("keyup", function(e) {
    const text = e.target.value;
    const contActPalabras = analyzer.getWordCount(text);
    contadorPalabras.innerHTML = `Palabras: ${contActPalabras}`;
});
//mensaje.addEventListener("focus", function(e) {
//e.target.style.background = "#FF9966";
//});

const btn = document.getElementById("resetButton");

btn.addEventListener("click", function() { mensaje.value = " " });







//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`