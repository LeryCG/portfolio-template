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
