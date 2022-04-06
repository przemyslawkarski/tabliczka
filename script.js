const generate = document.querySelector('.generate');
const firstNumber = document.querySelector('.first-number');
const secondNumber = document.querySelector('.second-number');
const userResult = document.querySelector('#user-result');
const checkResult = document.querySelector('.check-result');
const result = document.querySelector('.result');
let num1
let num2
let multiplying

const generateNumbers = ()=>{
  num1 = Math.floor(Math.random()*10+1)
  num2 = Math.floor(Math.random()*10+1)
  firstNumber.textContent = num1
  secondNumber.textContent = num2
  result.textContent = ""
  userResult.value = ""
}

const check = ()=>{
  multiplying = num1 * num2
  if(userResult.value == multiplying){
    result.textContent = 'Prawidłowy wynik!'
  }else{
    result.textContent = `Prawidłowy wynik to ${multiplying}`
  }
}

generate.addEventListener('click', generateNumbers)
checkResult.addEventListener('click', check)