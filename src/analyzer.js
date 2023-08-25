const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text = text.replace(/,|;|:|"|«|»|¡|¿|!|&+/g,' ');
    text = text.replace(/\u0027|\u002D|\0022|\.|\{|\}|\(|\)|\[|\]|\?|\s|\n|\t|\\|\r|\b|\f|\v+/g, ' ').replace(/\s+/g, ' ').trim();
    let n = 0;
    if (text==='' || text===" "){
      //pass n = 0;
    }else{
      n = text.split(' ').length;
    } 
    return n;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`
    const n = text.length;
    return n;
  },
  
  //Esta función es la opcional que manda 0 para una entrada de texto con solo espacios vacios o caracteres de puntuación
  /*
    getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`
    let text2 = text.replace(/,|;|:|"|«|»|¡|¿|!|&+/g,' ');
    text2 = text2.replace(/\u0027|\u002D|\0022|\.|\{|\}|\(|\)|\[|\]|\?|\s|\n|\t|\\|\r|\b|\f|\v+/g, ' ').replace(/\s+/g, ' ').trim();
    let n = 0;
    if (text2===''|| text2===" "){
      //pass n = 0
    } else {
      n = text.length;
    }
    return n;
  },
  */

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    text = text.replace(/,|;|:|"|«|»|¡|¿|!|&+/g,' ');
    text = text.replace(/\u0027|\u002D|\0022|\.|\{|\}|\(|\)|\[|\]|\?|\s|\n|\t|\\|\r|\b|\f|\v+/g, ' ').replace(/\s+/g, ' ').trim();
    let n = 0;
    if (text==='' || text===" "){
      //pass n = 0;
    }else{
      n = text.split(' ').join('').length;
    }
    return n;
  },

  // Esta función manda el conteo de caracteres sin importar que sean sólo signos de puntuación
  /*getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const n = text.trim().split(/\s+/g).join('').length;
    return n;
  },*/

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let text2 = text.replace(/,|;|:|"|«|»|¡|¿|!|&+/g," ");
    text2 = text2.replace(/\u0027|\u002D|\0022|\.|\{|\}|\(|\)|\[|\]|\?|\s|\n|\t|\\|\r|\b|\f|\v+/g, " ");
    text2 = text2.replace(/\s+/g, " ").trim();
    let n = 0;
    if (text==='' || text2==='' || text2===" "){
      //pass n = 0;
    }else{
      text = text.replace(/\s+/g, ' ').trim();
      const listaText = text.split(' ');
      let sumLengthText = 0;
      for (let i = 0; i < listaText.length; i++){
        sumLengthText += listaText[i].length;
      }
      n = sumLengthText/listaText.length; 
    }
    return Math.round(n*100)/100;
  },
  
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    text = text.replace(/,|;|:|«|»|¡|¿|!|&|\{|\}|\(|\)|\[|\]+/g,' ');
    let text2 = text.replace(/\u0027|\u002D|\0022|\.|\{|\}|\(|\)|\[|\]|\?|\s|\n|\t|\\|\r|\b|\f|\v+/g, ' ');
    text2 = text2.replace(/\s+/g, " ").trim();
    let countNumber = 0;
    if (text2==='' || text2===" "){
      //pass countNumber = 0;
    }else{
      const listaText = text.replace(/\s+/g, ' ').trim().split(' ');
      //console.log(text,text2)
      for (let i = 0; i < listaText.length; i++){
        if (!isNaN(listaText[i]/1)){
          countNumber += 1;
        }
      }
    }
    return countNumber;  
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    text = text.replace(/,|;|:|«|»|¡|¿|!|&|\{|\}|\(|\)|\[|\]+/g,' ');
    //text = text.replace(/\u0027|\u002D|\0022|\.|\{|\}|\(|\)|\[|\]|\?+/g, ' ').replace(/\s+/g, ' ').trim();
    const listaText = text.replace(/\s+/g, ' ').trim().split(' ');
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
