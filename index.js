"use strict";
let barsIcon = document.querySelector(".barsIcon");
let dark = document.querySelector(".dark");
let menuClose = document.querySelector(".menuClose");

function toggleMenu() {
  dark.classList.toggle("hidden");
}

barsIcon.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
