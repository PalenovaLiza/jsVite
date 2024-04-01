// let num = 42
// let firstName = 'Elizaveta'
// // num = 10
// const isProgrmmer = true 
// // isProgrmmer = false // ошибка

/*Мы можем :
// let $ = 56
// let _ = 56
// let oneSize = 'Melkiy'
 let num42 = 10
*/
/* Мы не можем:
//  let 42num = 76
//  let  my-num = 87
//  let false = 76 
*/

/* */

// alert (firstName) вывод в браузере
// console.log ('Тест;', num)
// console.log ( num/1)
// console.log ( num/10)

// let num2 = num+10 
// console.log ( num, num2)

// num = num2 - num 
// num2 = num2+4
// console.log (num, num2 )
// console.log (num, num2 )

// let num3 = num + (10*2) / (5 - 1)
// console.log (num3 )

// const fullName = firstName + ' Palenova' // конкатенация - объедиенеие строк
// console.log (fullName) 


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plustBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')
let action = '+'

// console.log (resultElement.textContent)
// resultElement.textContent = 42

// const sum = Number(input1.value) +  Number(input2.value)
// resultElement.textContent = sum
// console.log(typeof sum)


plustBtn.onclick = function () {
action = '+'
 }

minusBtn.onclick = function () {
 action = '-'
 }

 multiplyBtn.onclick = function () {
  action = '*'
  }
  divisionBtn.onclick = function () {
    action = '/'
    }


function ptintResult (result){
  if (result <0 ){
    resultElement.style.color = 'red'
}else if (result > 0){
    resultElement.style.color = 'green'

  }
  resultElement.textContent = result
}

function computeNumbersWithActions(inp1, inp2, actionSymbol){
  const num1 = Number (inp1.value)
  const num2 = Number (inp2.value)
   if (actionSymbol == '+'){
    return num1+num2
  }else if (actionSymbol == '-'){
     return num1-num2
  } else if (actionSymbol == '*') {
    return num1*num2
}else if (actionSymbol == '/') {
  return num1/num2
  // return actionSymbol == '+' ? num1+num2 : num1-num2
 }
}

submitBtn.onclick = function () {
  const  result = computeNumbersWithActions(input1, input2, action)
  ptintResult(result)


//   if (action == '+') {
//     const sum = Number(input1.value) + Number(input2.value)
//   ptintResult(sum)
// } else if (action == '-') {
//   const sum = Number(input1.value) - Number(input2.value)
//   ptintResult(sum)
// }


/* Более развернутый вариант 'калькулятора'

 submitBtn.onclick = function () {
   if (action == '+') {
     const sum = Number(input1.value) + Number(input2.value)
     if (sum <0 ){
      resultElement.style.color = 'red'
  }else {
       resultElement.style.color = 'green'
}
resultElement.textContent = sum
  } else if (action == '-') {
    const sum = Number(input1.value) - Number(input2.value)
    if (sum <0 ){
      resultElement.style.color = 'red'
  
     }else {
       resultElement.style.color = 'green'

     }
  resultElement.textContent = sum
  }
}
*/ }
