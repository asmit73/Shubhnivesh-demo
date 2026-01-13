/* HAMBURGER MENU */
function toggleMenu(){
  const menu = document.getElementById("menu");
  const burger = document.querySelector(".hamburger");

  if(menu.style.display === "flex"){
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }

  burger.classList.toggle("active");
}

/* HERO SLIDER */
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);
