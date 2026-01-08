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
/* ===== BUTTON INTERACTIONS ===== */
document.querySelectorAll("button").forEach((btn) => {
  // Mouse position for glow
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
    btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });

  // Click actions
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    switch (action) {
      case "scroll-about":
        document
          .querySelector("#about")
          ?.scrollIntoView({ behavior: "smooth" });
        break;

      case "scroll-projects":
        document
          .querySelector("#projects")
          ?.scrollIntoView({ behavior: "smooth" });
        break;

      case "contact":
        document
          .querySelector("#support")
          ?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  });
});
// Staggered container reveals (e.g., skill grids, project cards)
document.querySelectorAll("[data-reveal-stagger]").forEach((el) => {
  staggerObserver.observe(el);
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
});
// =========================
// TOGGLE DARK MODE
// =========================
consttoggle = document.getElementById("theme-toggle");

// Cargar tema guardado en localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

// Cambiar tema al hacer click
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
