const analyzer = {
  getWordCount: (text) => {
    const words = text.split(/\s+/);
    const wordCount = words.length;
    return wordCount;
  },

  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const textWithoutSpaces = text.replace(/\s/g, "");
    const characterCount = textWithoutSpaces.length;
    return characterCount;
  },
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const number = text.match(/-?\d+(\. d+ )?/g);
    const constnumbers = number ? number.length : 0;
    return constnumbers;
  },

  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const numeros = /-?\d+(\. d+ )?/g;
    const sumanumeros = text.match(numeros);
    if (sumanumeros) {
      let suma = 0;
      for(let i=0; i<sumanumeros.length; i++) {
        suma += parseFloat(sumanumeros[i])
      }
      // for (const numero of sumanumeros) {
      //   suma += parseFloat(numero);
      // }
      return suma;
    } else {
      return 0;
    }
  },

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {
    const words = text.split(" ");
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageLength = words.length > 0 ? totalLength / words.length : 0;

    return averageLength;
  },
};

export default analyzer;
