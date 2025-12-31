// 1. VARIABLER (Her finder vi de elementer i HTML, vi vil styre)
const knap = document.querySelector("#mode-btn");
const krop = document.querySelector("body");

// 2. PROCES (En funktion der indeholder logikken)
function skiftTema() {
  // BETINGELSER (Tjekker om vi er i dark mode)
  if (krop.classList.contains("dark-mode")) {
    krop.classList.remove("dark-mode");
    knap.textContent = "Skift til Dark Mode";
  } else {
    krop.classList.add("dark-mode");
    knap.textContent = "Skift til Light Mode";
  }
}
