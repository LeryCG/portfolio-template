// Interacción de ejemplo
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Acción de ejemplo 🚜");
  });
});
console.log("Glassmorphism + Parallax activo ✨");
// Feedback táctil extra al click
document.querySelectorAll(".interactive, button").forEach((el) => {
  el.addEventListener("mousedown", () => {
    el.style.transform += " scale(0.97)";
  });

  el.addEventListener("mouseup", () => {
    el.style.transform = "";
  });
});
