import analyzer from './analyzer.js';

const mensaje = document.querySelector("textarea");
const contador = document.getElementById("contador");

mensaje.addEventListener("keyup", function(e) {
    const text = e.target.value;
    const contCarAct = analyzer.getCharacterCount(text);
    //const resultado= target.value.contCarAct;

    contador.innerHTML = `Caracteres: ${contCarAct}`;
});




//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`