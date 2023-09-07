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
    const textWithoutSpaces = text.replace(/\W/g, "");
    const characterCount = textWithoutSpaces.length;
    console.log ("esto es un commit")
    return characterCount;
  },
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const numbers = text.trim().split(" ");
    let numberCount = 0;

    for (const number of numbers) {
      if (number.match(/^[0-9]+(\.[0-9]+)?$/) !== null) {
        numberCount++;
      }
    }

    return numberCount;
  },
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const numbers = text.trim().split(" ");
    const numbersArray = numbers.filter((number) => {
      return number.match(/^[0-9]+(\.[0-9]+)?$/) !== null;
    });

    let total = 0;

    for (const number of numbersArray) {
      total += parseFloat(number);
    }

    return total;
  },

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {
    const words = text.split(" ");
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageLength = words.length > 0 ? totalLength / words.length : 0;

    return parseFloat(averageLength.toFixed(2));
  },
};

export default analyzer;
