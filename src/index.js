import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//boton para limpiar la metrica
const button = document.getElementById("reset");
const userinput = document.querySelector('textarea[name="user-input"]');

//constantes conectadas con HTML (cajitas)
const númerodepalabras = document.querySelector(
  '[data-testid="número de palabras"]'
);
const Caracteres = document.querySelector(
  '[data-testid="recuento de caracteres"]'
);
const Caracteressinespacios = document.querySelector(
  '[data-testid="recuento de caracteres sin espacios"]'
);
const Números = document.querySelector('[data-testid="recuento de nùmeros"]');
const Sumanúmeros = document.querySelector(
  '[data-testid="suma total de números"]'
);
const Promediolongitud = document.querySelector(
  '[data-testid="longitud media de palabras"]'
);


//boton para limpiar la metrica
button.addEventListener("click", function () {
  userinput.value = "";
  númerodepalabras.textContent = "Número de palabras: ";
  Caracteres.textContent = "Caracteres: ";
  Caracteressinespacios.textContent = "Caracteres sin espacios: ";
  Números.textContent = "Números: ";
  Sumanúmeros.textContent = "Suma Números: ";
  Promediolongitud.textContent = "Promedio Longitud : ";
});

//número de Palabras// función con HTML

userinput.addEventListener("input", () => {
  const text = userinput.value;
  const iCountC = analyzer.getWordCount(text);
  númerodepalabras.textContent = "Número de palabras: " + iCountC;
});
//recuento de caracteres// funciones
userinput.addEventListener("keyup", () => {
  const text = userinput.value;
  const iCountC = analyzer.getCharacterCount(text);
  Caracteres.textContent = "Caracteres: " + iCountC;
});
// characteres sin espacios
userinput.addEventListener("keyup", () => {
  const text = userinput.value;
  const iCountC = analyzer.getCharacterCountExcludingSpaces(text);
  Caracteressinespacios.textContent =
    "Caracteres sin espacios: " + iCountC;
});
// Promedio Longitud de apalbras
userinput.addEventListener("keyup", () => {
  const text = userinput.value;
  const iCountC = analyzer.getAverageWordLength(text);
  Promediolongitud.textContent = "Promedio Longitud : " + iCountC;
});
//números
userinput.addEventListener("keyup", () => {
  const text = userinput.value;
  const iCountC = analyzer.getNumberCount(text);
  Números.textContent = "Números: " + iCountC;
});
//Suma de números
userinput.addEventListener("keyup", () => {
  const text = userinput.value;
  const iCountC = analyzer.getNumberSum(text);
  Sumanúmeros.textContent = "Suma Números: " + iCountC;
});

// elementos
//funciones
//eventos
