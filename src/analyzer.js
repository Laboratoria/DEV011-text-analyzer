const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`
    const vari = /[\s\r\n]+/g
    const palabras = text.replace(/[.,;?¿!¡{}:'"/-1234567890]/gi,"").trim().split(vari);
    if (palabras[0]==="") {
      
      return 0
    }
    else { 
      return palabras.length
    }
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracter = text.split("");
    if (caracter[0]==="") {
      return 0
    }
    else { 
      return caracter.length
    }  
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caraSig = text.replace(/[.,; ?¿!¡{}:'"-]/gi,"").split("");
  
    if (caraSig[0]==="") {
      return 0
    }
    else { 
      return caraSig.length
    }
   
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const espacios = /[\s]+/
    let sum = 0
    const arrPalabras = text.trim().split(espacios)
    
    for(let i=0; i<arrPalabras.length ; i++) {
      sum = sum + arrPalabras[i].length
      
    }
    const prom = sum/arrPalabras.length
    //return prom
    return parseFloat(prom.toFixed(2))
 
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //const signos = /[.,;?¿!¡{} :'"]/
    const num = text.replace(/[^0-9]+/g,"").split("")
    if(num.length >0) {
      return num.length
    }
    else {
      return 0
    }
  },
  
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let suma = 0
    const Number = text.replace(/[^0-9]+/g,"").split("")
   
    for(let i=0; i<Number.length; i++) {
      suma = suma + parseFloat(Number[i])
    }
    return suma
  },

};
export default analyzer;