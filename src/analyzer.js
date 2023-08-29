const analyzer = {
  getWordCount: (text) => {
    const words = text.split(" ");
    const wordsNotNumbers = words.filter(element => isNaN(element));
    return wordsNotNumbers.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const signosPunt = /[.,/#!$%^&*;:{}=\-_`~()""'...¿?¡!+]/g;
    const textoSinEspacio = text.replace(signosPunt, "").replace(/\s/g, "");
  
    return textoSinEspacio.length;
    
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const number = text.match(/\d/g);
    return number.length;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    let numeros = 0;
    for (let indice = 0; indice < text.length; indice++) {
      if (!isNaN(Number(text[indice]))) {
        numeros += Number(text[indice]);
      }
    }
    return numeros;
  },
}
export default analyzer;
