const analyzer = {  
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/);
    return words.length
  },
  
  getCharacterCount: (text) => {
    return text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace( /[,.\s]/g, '' ).length;
  },
  getAverageWordLength: (text) => {    
    const words = text.split (' ');
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageLength = totalLength / words.length;
    return Number(averageLength.toFixed(2));
    
  
  },
  getNumberCount: (text) => {
    const numberCount = text.match(/\b\d+(\.\d+)?\b/g);
    if (numberCount) {
      return numberCount.length;
    }
    else {
      return 0;
    }
   
    
  },
  getNumberSum: (text) => {
    const numberCount = text.match(/\b\d+(\.\d+)?\b/g);
    if (numberCount){
      let sumaNumber = 0;

      for (let i = 0; i < numberCount.length; i++){
        const numero = parseFloat(numberCount[i]);
        if (!isNaN(numero)){
          sumaNumber += numero;
        }
    
      }
      return  isNaN (sumaNumber) ? 0: sumaNumber;
    } else {
      return 0;
    }
    


  
  },
};

export default analyzer;
