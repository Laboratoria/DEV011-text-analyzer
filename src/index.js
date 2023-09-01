import analyzer from './analyzer.js';

const input = document.querySelector('[name="user-input"]');
const wordCountList = document.querySelector('[data-testid="word-count"]');
const resetButton = document.getElementById ('reset-button');
const characterCountList = document.querySelector('[data-testid="character-count"]')
const characterWithoutSpaceList = document.querySelector('[data-testid="character-no-spaces-count"]')
const wordlengthaverageList = document.querySelector('[data-testid="word-length-average"]')

input.addEventListener('keyup', () => {
  const userInput = input.value;
  if(userInput === ''){
    wordCountList.textContent = 'Conteo de Palabras: 0';
    characterCountList.textContent = 'Caracteres: 0';
    characterWithoutSpaceList.textContent = 'Caracteres sin Espacios: 0';
    wordlengthaverageList.textContent = 'Longitud media de las Palabras: 0';

  } else {
    const wordCount = analyzer.getWordCount(userInput);
    wordCountList.textContent = `Conteo de Palabras: ${wordCount}`;
    const characterCount = analyzer.getCharacterCount(userInput);
    characterCountList.textContent = `Caracteres: ${characterCount}`;
    const characterWithoutSpaceCount = analyzer.getCharacterCountExcludingSpaces(userInput);
    characterWithoutSpaceList.textContent = `Caracteres sin Espacios: ${characterWithoutSpaceCount}`;
    const getAverageWordLength = analyzer.getAverageWordLength (userInput);
    wordlengthaverageList.textContent = `Longitud media de las Palabras: ${getAverageWordLength}`;
  }
  
});

resetButton.addEventListener ('click', () => {
  input.value = '';
  wordCountList.textContent = 'Conteo de Palabras: 0';
  characterCountList.textContent = 'Caracteres: 0';
  characterWithoutSpaceList.textContent = 'Caracteres sin Espacios: 0';
  wordlengthaverageList.textContent = 'Longitud media de las Palabras: 0';

});
