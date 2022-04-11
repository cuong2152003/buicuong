const search = document.querySelector(".header__nav-link-search");
const box = document.querySelector(".header__form");
const main = document.querySelector(".main");
const closeBox = document.querySelector(".close-box");
search.addEventListener("click", function () {
  box.classList.add("open-form");
  main.classList.add("opa");
});

closeBox.addEventListener("click", function () {
  box.classList.remove("open-form");
  main.classList.remove("opa");
});

const btnQuestion = document.querySelectorAll(".btn-ques");
const reply = document.querySelectorAll(".reply");
for (let i = 0; i < 6; i++) {
  btnQuestion[i].addEventListener("click", function () {
    reply[i].classList.toggle("reply-open");
    btnQuestion[i].classList.toggle("boder-no-darius");
  });
}

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".header__nav");
menu.addEventListener("click", function () {
  nav.classList.toggle("open-nav");
});

close.addEventListener("click", function () {
  nav.classList.toggle("open-nav");
});
