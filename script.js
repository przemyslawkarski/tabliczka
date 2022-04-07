const generate = document.querySelector(".generate");

const userResult = document.querySelector("#user-result");
const checkResult = document.querySelector(".check-result");
const result = document.querySelector(".result");
const lang = document.querySelector("#lang");
const h1 = document.querySelector("h1");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const wrapper = document.querySelector(".wrapper");

let num1;
let num2;
let multiplying;

const generateNumbers = () => {
  const firstNumber = document.querySelector(".first-number");
  const secondNumber = document.querySelector(".second-number");
  num1 = Math.floor(Math.random() * 10 + 1);
  num2 = Math.floor(Math.random() * 10 + 1);
  firstNumber.textContent = num1;
  secondNumber.textContent = num2;
  result.textContent = "";
  userResult.value = "";
};

const changeLang = () => {
  userResult.value = "";
  result.textContent = "";
  if (wrapper.classList.contains("lang-pl")) {
    wrapper.classList.remove("lang-pl");
    lang.textContent = "PL";
    h1.textContent = "Проверь свои знания";
    generate.textContent = "Генерация чисел";
    p1.innerHTML = `Число a: <span class="first-number"></span>`;
    p2.innerHTML = `Число b: <span class="second-number"></span>`;
    checkResult.textContent = "Проверь результат";
  } else {
    wrapper.classList.add("lang-pl");
    lang.textContent = "RU";
    h1.textContent = "Sprawdź swoją wiedzę";
    generate.textContent = "Wygeneruj liczby";
    p1.innerHTML = `Liczba a: <span class="first-number"></span>`;
    p2.innerHTML = `Liczba b: <span class="second-number"></span>`;
    checkResult.textContent = "Sprawdź wynik";
  }
};

const check = () => {
  multiplying = num1 * num2;
  if (wrapper.classList.contains("lang-pl")) {
    if (userResult.value == multiplying) {
      result.textContent = "Prawidłowy wynik!";
    } else {
      result.textContent = `Prawidłowy wynik to ${multiplying}`;
    }
  }else{
    if (userResult.value == multiplying) {
        result.textContent = "правильный ответ!";
      } else {
        result.textContent = `правильный результат это ${multiplying}`;
      }
  }
};

generate.addEventListener("click", generateNumbers);
checkResult.addEventListener("click", check);
lang.addEventListener("click", changeLang);
