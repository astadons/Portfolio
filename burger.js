// Din eksisterende burger-menu kode
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);

function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

// NYE SCROLL-KODE
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
