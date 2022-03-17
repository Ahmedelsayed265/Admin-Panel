let links = document.querySelectorAll(".navigation li");
// mark active link function
function activeLink() {
  links.forEach((link) => {
    link.classList.remove("hovered");
  });
  this.classList.add("hovered");
}
//add event on links "mouseover" & call fuction activeLink
links.forEach((link) => {
  link.addEventListener("mouseover", activeLink);
});
//toggle nav
let toggle = document.getElementById("tog");
toggle.addEventListener("click", () => {
  if (toggle.classList.contains("fa-bars")) {
    toggle.classList.remove("fa-bars");
    toggle.classList.add("fa-bars-staggered");
    document.querySelector(".navigation").classList.add("hide");
    document.querySelector(".main").classList.add("active");
  } else {
    toggle.classList.remove("fa-bars-staggered");
    toggle.classList.add("fa-bars");
    document.querySelector(".navigation").classList.remove("hide");
    document.querySelector(".main").classList.remove("active");
  }
});
let app = document.getElementById("app");
let icon = document.getElementById("icon");

icon.addEventListener("click", () => {
  app.classList.toggle("darkTheme");
  if (app.classList.contains("darkTheme")) {
    document.getElementById("ivon").innerHTML = "Dark theme";
    document.getElementById("ivona").classList.remove("fa-sun");
    document.getElementById("ivona").classList.add("fa-moon");
  } else {
    document.getElementById("ivon").innerHTML = "Light theme";
    document.getElementById("ivona").classList.remove("fa-moon");
    document.getElementById("ivona").classList.add("fa-sun");
  }
});
