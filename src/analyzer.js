const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const n = text.trim().split(' ').length;
    return n;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`
    const n = text.length;
    return n;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const n = text.trim().split(/(?:[.:,;¿?¡!'"&\s\n\t\\\r\b\f\v]+)/).join('').length;
    return n;
  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let listaText = text.replace(/\s+/g, ' ').trim();
    listaText = listaText.split(' ');
    let sumLengthText = 0;
    for (let i = 0; i < listaText.length; i++){
      sumLengthText += listaText[i].length}
    const n = sumLengthText/listaText.length; 
    return Math.round(n*100)/100;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let listaText = text.replace(/\s+/g, ' ').trim();
    listaText = listaText.split(' ');
    let countNumber = 0;
    for (let i = 0; i < listaText.length; i++){
      if (!isNaN(listaText[i]/1)){
        countNumber += 1;
      }
    }
    return countNumber;  
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const listaText = text.split(' ');
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
