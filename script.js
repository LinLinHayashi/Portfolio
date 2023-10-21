function toggleMenu() {

  // The variable "menu" now is an HTML element whose class is "menu-links".
  const menu = document.querySelector(".menu-links")

  const icon = document.querySelector(".hamburger-icon")

  // If the "open" class is not present in the "menu" element's class list, add the "open" class to the element; if the "open" class is already present, remove it from the "menu" element's class list.
  menu.classList.toggle("open")

  icon.classList.toggle("open")
}