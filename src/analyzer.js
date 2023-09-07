const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const numPalabras = text.trim().split(" ").length;
    if(text === ""){
      return numPalabras - 1;
    }
    else return numPalabras;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //removiendo los espacios y signos
    const textoSinEspaciosYSignos = text.replace(/[^\w\s]|_/g,'').replace(/\s+/g,'');
    //contabilizando los caracterest restantes
    const numCaracteres = textoSinEspaciosYSignos.length;
    return numCaracteres;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //matching los numeros en u array
    const Numeros = text.match(/\d+(\.\d+)?/g);

    if (Numeros){
      return Numeros.length
    }
    else return 0;
    
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
