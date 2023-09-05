import analyzer from './analyzer.js';

const input = document.querySelector('[name="user-input"]');
const wordCountList = document.querySelector('[data-testid="word-count"]');
const resetButton = document.getElementById ('reset-button');
const characterCountList = document.querySelector('[data-testid="character-count"]')
const characterWithoutSpaceList = document.querySelector('[data-testid="character-no-spaces-count"]')
const wordlengthaverageList = document.querySelector('[data-testid="word-length-average"]')
const numberCountList = document.querySelector('[data-testid="number-count"]')
const sumNumberList = document.querySelector('[data-testid="number-sum"]')



input.addEventListener('keyup', () => {
  const userInput = input.value;
  if(userInput === ''){
    wordCountList.textContent = 'Conteo de Palabras: 0';
    characterCountList.textContent = 'Caracteres: 0';
    characterWithoutSpaceList.textContent = 'Caracteres sin Espacios: 0';
    wordlengthaverageList.textContent = 'Longitud media de las Palabras: 0';
    numberCountList.textContent = 'Números: 0';
    sumNumberList.textContent = 'Suma de Números: 0';

  } else {
    const wordCount = analyzer.getWordCount(userInput);
    wordCountList.textContent = `Conteo de Palabras: ${wordCount}`;
    const characterCount = analyzer.getCharacterCount(userInput);
    characterCountList.textContent = `Caracteres: ${characterCount}`;
    const characterWithoutSpaceCount = analyzer.getCharacterCountExcludingSpaces(userInput);
    characterWithoutSpaceList.textContent = `Caracteres sin Espacios: ${characterWithoutSpaceCount}`;
    const averageLength = analyzer.getAverageWordLength (userInput);
    wordlengthaverageList.textContent = `Longitud media de las Palabras: ${averageLength}`;
    const numberCount = analyzer.getNumberCount(userInput);
    numberCountList.textContent = `Números: ${numberCount}`;
    const sumaNumber = analyzer.getNumberSum(userInput);
    sumNumberList.textContent = `Suma de Números: ${sumaNumber}`;


  }
  
});

resetButton.addEventListener ('click', () => {
  input.value = '';
  wordCountList.textContent = 'Conteo de Palabras: 0';
  characterCountList.textContent = 'Caracteres: 0';
  characterWithoutSpaceList.textContent = 'Caracteres sin Espacios: 0';
  wordlengthaverageList.textContent = 'Longitud media de las Palabras: 0';
  numberCountList.textContent = 'Números: 0';
  sumNumberList.textContent = 'Suma de Números: 0';

});
