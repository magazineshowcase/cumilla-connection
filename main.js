// main.js

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});

// Example: show an alert when clicking featured article
document.querySelector(".featured-card").addEventListener("click", () => {
  console.log("Featured article clicked!");
});

// Example: dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".site-footer p");
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} Cumilla Community Magazine`;
});
