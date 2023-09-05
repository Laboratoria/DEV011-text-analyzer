const analyzer = {
  getWordCount: (text) => {
    const textoAreaDividido = text.trim().split(" ");
    return textoAreaDividido.length;

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const caracteresSinEspacios = text.trim().replace(/\s+/g, ""); //expresión regular que se utiliza para buscar y reemplazar espacios en blanco en una cadena de texto.//
    return caracteresSinEspacios.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text;
  },
  getNumberCount: (text) => {
    let onlynumbers = text.match(/\d+/g); // secuencias de uno o más dígitos en una cadena de texto//
    if (onlynumbers === null) {
      onlynumbers = "";
    }
    return onlynumbers.length;
    // return NumberCount

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const listaText = text.replace(/\s+/g, ' ').trim().split('');
    let sumNumber = 0;
    for (let i = 0; i < listaText.length; i++){
      if (!isNaN(listaText[i]/1)){
        sumNumber += Number(listaText[i]);
      }
    }
    return sumNumber;
  },
};

export default analyzer;
