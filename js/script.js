// Toggle
const navbarNav = document.querySelector(".navbar-nav");
// menu
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebsar untuk menghilangkan active
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//theme toggle
var theme = localStorage.getItem("theme");
if (!theme) {
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  theme = prefersDark ? "dark" : "light";
}
setTheme(theme);

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  var darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function (_) {
      var currentTheme = localStorage.getItem("theme");
      setTheme(currentTheme == "dark" ? "light" : "dark");
    });
  }
}
