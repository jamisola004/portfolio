// =========================
// 🌙 DARK MODE TOGGLE
// =========================
const toggleBtn = document.getElementById("dark-toggle");
const html = document.documentElement;

// Dark mode button click
toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  // Save preference sa localStorage
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

// =========================
// 📱 MOBILE MENU TOGGLE
// =========================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// =========================
// 🔽 SMOOTH SCROLL (optional)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach(bar => {
    const percentage = parseInt(bar.getAttribute("data-percentage"));
    bar.style.width = percentage + "%";

    // Set color based on percentage
    if (percentage <= 40) {
      bar.style.backgroundColor = "#ef4444"; // Red
    } else if (percentage <= 70) {
      bar.style.backgroundColor = "#facc15"; // Yellow
    } else {
      bar.style.backgroundColor = "#22c55e"; // Green
    }

    // Animate percentage number
    const percentageSpan = bar.parentElement.previousElementSibling.querySelector(".skill-percentage");
    let current = 0;
    const stepTime = 15;
    const timer = setInterval(() => {
      if (current >= percentage) {
        clearInterval(timer);
        percentageSpan.textContent = percentage + "%";
      } else {
        current++;
        percentageSpan.textContent = current + "%";
      }
    }, stepTime);
  });
});