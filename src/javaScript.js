const menuBtn = document.getElementById("menu-btn");
const menuBar = document.getElementById("menu-bar");
const closeBtn = document.getElementById("close-btn");
const bodyDiv = document.getElementById("body")


menuBtn.addEventListener("click", function () {
  menuBar.classList.remove("hidden");
});


closeBtn.addEventListener("click", function () {
  menuBar.classList.add("hidden");
});

window.addEventListener("click", function(event) {
    if (event.target === bodyDiv) {
      menuBar.classList.add("hidden");
    }
  });