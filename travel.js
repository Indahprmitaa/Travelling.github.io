let lastImage = document.getElementsByClassName("last-img")[0];
let midImage = document.getElementsByClassName("mis-img")[0];
let focusImage = document.getElementsByClassName("focus-img")[0];
let birdImage = document.getElementsByClassName("bird-img")[0];
let Travelling = document.querySelector("#landing h1");
let Button = document.querySelector(".btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  birdImage.style.left = value * 0.9 + "px";
  birdImage.style.top = value * 0.7 + "px";
  lastImage.style.top = value * 0.3 + "px";
  midImage.style.top = value * 0.3 + "px";

  focusImage.style.top = value * 0.8 + "px";
  Travelling.style.top = value * 0.2 + "px";
});
