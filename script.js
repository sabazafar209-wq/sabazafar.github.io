// Dark mode toggle, remembered between visits when the browser allows it.
(function () {
  try {
    if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark-mode");
  } catch (e) {}
})();
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  try {
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  } catch (e) {}
}
