const analyzer = {  
  getWordCount: (text) => {
    if (text==="") {
      return 0
    } 
    const regexWord = /[\s\n]+/g
    const words = text.replace(/[.,;?¿!¡{}:'"/-1234567890]/gi,"").trim().split(regexWord);
    return words.length
  },
  getCharacterCount: (text) => {
    if (text==="") {
      return 0
    }  
    const character = text.split("");
    return character.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (text==="") {
      return 0
    }  
    const caraSig = text.replace(/[.,; ?¿!¡{}:'"-]/gi,"").split("");
    return caraSig.length
  },
  getAverageWordLength: (text) => {    
    const espacios = /[\s]+/
    let sum = 0
    const arrPalabras = text.trim().split(espacios)
    
    for(let i=0; i<arrPalabras.length ; i++) {
      sum = sum + arrPalabras[i].length
      
    }
    const prom = sum/arrPalabras.length
  
    return parseFloat(prom.toFixed(2))
 
  },
  getNumberCount: (text) => {
    const num = text.match(/\b\d+(\.\d+)\b|\b\d+\b/g);
    if(num===null) {
      return 0
    }
    else {
      return num.length
    } 
  },
  
  getNumberSum: (text) => {
    let suma = 0
    const numberArray = text.match(/\b\d+(\.\d+)\b|\b\d+\b/g)
    if (numberArray===null){
      return 0 
    }
    for(let i=0; i<numberArray.length; i++) {
      suma = suma + parseFloat(numberArray[i])
    }
    return suma

  },
};
export default analyzer;