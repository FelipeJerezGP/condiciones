//PRIMERA PARTE DEL DESAFIO
const imgElemento = document.getElementById("img");

function toggleBorder() {
  if (imgElemento.style.border) {
    imgElemento.style.border = "";
  } else {
    imgElemento.style.border = "2px solid red";
  }
}

imgElemento.addEventListener("click", toggleBorder);

//SEGUNDA PARTE DEL DESAFIO
const inputs = document.querySelectorAll(".sticker-input");
const output = document.getElementById("sticker-count");
const button = document.getElementById("check-stickers");

function calculateStickers() {
  let total = 0;

  inputs.forEach((input) => {
    total += parseInt(input.value) || 0;
  });

  if (total <= 10) {
    output.textContent = `Llevas ${total} stickers`;
  } else {
    output.textContent = "Llevas demasiados stickers";
  }
}

button.addEventListener("click", calculateStickers);

//TERCERA PARTE DEL DESAFIO
const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");
const checkButton = document.getElementById("check-password");
const resultParagraph = document.getElementById("password-result");

function checkPassword() {
  const password = digit1.value + digit2.value + digit3.value;

  if (password === "911") {
    resultParagraph.textContent = "password 1 correcto";
  } else if (password === "714") {
    resultParagraph.textContent = "password 2 es correcto";
  } else {
    resultParagraph.textContent = "password incorrecto";
  }
}

checkButton.addEventListener("click", checkPassword);
