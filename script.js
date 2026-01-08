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
const toggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

// Toggle theme
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  // Save preference
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
