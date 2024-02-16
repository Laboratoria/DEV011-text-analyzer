import analyzer from "./analyzer.js";

const inputText = document.querySelector('[name="user-input"]');
inputText.addEventListener("keyup", () => calculateMetrics(inputText.value));

const metrics = [
  "Words",
  "Characters",
  "Characters without space",
  "Numbers",
  "Sum of numbers",
  "Average word length",
];
const metricsContainer = document.querySelector(".metricsContainerPrincipal");
for (const metric of metrics) {
  const container = document.createElement("div");
  const subTitle = document.createElement("h1");
  container.classList.add("metric-container");
  container.id = metric;
  subTitle.textContent = metric + ": " + 0;
  container.append(subTitle);
  metricsContainer.appendChild(container);
}

function calculateMetrics(text) {
  const metricContainers = document.querySelectorAll(".metric-container");
  metricContainers.forEach((container) => {
    const metricId = container.id;
    switch (metricId) {
    case "Words":
      container.querySelector("h1").textContent =
          "Words: " + analyzer.getWordCount(text);
      break;
    case "Characters":
      container.querySelector("h1").textContent =
          "Characters: " + analyzer.getCharacterCount(text);
      break;
    case "Characters without space":
      container.querySelector("h1").textContent =
          "Characters without space: " +
          analyzer.getCharacterCountExcludingSpaces(text);
      break;
    case "Numbers":
      container.querySelector("h1").textContent =
          "Numbers: " + analyzer.getNumberCount(text);
      break;
    case "Sum of numbers":
      container.querySelector("h1").textContent =
          "Sum of numbers: " + analyzer.getNumberSum(text);
      break;
    case "Average word length":
      container.querySelector("h1").textContent =
          "Average word length: " + analyzer.getAverageWordLength(text);
      break;
    default:     
      break;
    }
  });
}
const buttonReset = document.getElementById("reset-button");
buttonReset.addEventListener("click", ()=> {
  inputText.value = '';
  calculateMetrics(inputText.value)
});