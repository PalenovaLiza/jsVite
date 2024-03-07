import './style.scss'

//console.log('121')
//console.log('1233')

//console.log(typeof 12)
//console.log(typeof '12')
//console.log(typeof true)
//console.log(typeof false)
//console.log(typeof [])
//console.log(1>2)
//console.log(1<2)

//let year = 2015
//if (year==2015){
// console.log('yes') 
//} else{
// console.log('no')
//}

//let value = prompt('Введите число', 0);

//if (value > 0) {
//alert( 1 );
//} else if (value < 0) {
// alert( -1 );
//} else {
// alert( 0 );
//}

//result = (a + b < 4) ? 'Мало' : 'Много';


//let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
//(login == '') ? 'Нет логина' :
//'';

let a
console.log(a)
a = 34 * 212 * 122 * 13
console.log(a)
// let b=+(prompt('Введите число','0') as string)
// console.log(b)

console.log(parseInt('12.5dfgdf12'))
console.log(parseFloat('12.5dfgdf'))
console.log(+'12.5dfgdf')
console.log(+'12.5')

// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
let n1 = 5
let n2 = 10
console.log((n1 + n2) / 2)

// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
let n = 5
console.log(n * 2)
// Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
let km = 30
const KM_IN_MILE = 0.621371
console.log(km * KM_IN_MILE)

// Реализуйте калькулятор. Пользователь вводит два числа,а программа выводит результаты действий + - * / междуэтими числами.
let d = 5
let f = 20
console.log(d + f)
console.log(d - f)
console.log(d * f)

// Пользователь вводит значения a и b для формулы a * x + b = 0,а программа считает и выводит значение x.
d = 456
f = 34567
console.log(-f / d)

// Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня
let hour = 2
let minuts = 37
console.log((24 - hour), (60 - minuts))
console.log((24 - hour), (60 - minuts))

// Зарплата работника составляет $250 + 10% от продаж.Запросите общую сумму продаж за месяц и посчитайте зарплату.
let prodal = 600
console.log(250 + (prodal * 10 / 100))


// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let user
user = 'Семён';
console.log('Привет,', user, '!')
// Запросите у пользователя год его рождения, посчитайте,сколько ему лет и выведите результат. Текущий год укажитев коде как константу.
let yy = 1996
const toDay = 2024
console.log(toDay - yy)

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let storona = 35
console.log(storona * 4)
// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
let radius = 6
const pi = 3.14
console.log(radius * radius * pi)
// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
km = 856
hour = 12
console.log(km / hour)
// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const euro = 0.923773
let dollar = 48
console.log(dollar * euro)
// Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
let gb = 34
const MB_IN_GB = 1024
console.log(gb * MB_IN_GB / 820)
// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
let summa = 555
let shoko = 7
let res = summa / shoko
let res_1 = Math.floor(res)
console.log("Вы можете купить", res_1)
console.log("Ваша здача составит", summa - shoko * res_1)
//  так можно  посчитать сдачу??????

// IF and ELSE 

// Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
let n7 = 6
if (n7 == 0) {
  console.log('Ваше число ноль')
} else if (n7 < 0) {
  console.log('Ваше число отрицательное')
} else if (n7 > 0) {
  console.log('Ваше число положительное')
} else {
  console.log('Ваше число какое-то странное')
}

// Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
let n9 = 1
if (n9 >= 0 && n9 <= 120) {
  console.log('Вы нам подходите')
} else {
  console.log('Ваш возраст очень странный')
}

// Запросить у пользователя число и вывести его модуль(|7| = 7, |-7| = 7).
n9 = -3
if (n9 > 0) {
  console.log('Модуль числа', n9)
} else if (n9 < 0) {
  console.log('Модуль числа', -n9)
} else {
  console.log('Чувак,это не число')
}

// Запросить у пользователя время (часы, минуты, секунды)и проверить корректность введенных данных.
let h = 22
let m = 34
let s = 67
if (h >= 0 && h <= 23) {
  console.log('Верно')
} if (m >= 0 && m <= 60) {
  console.log('Верно')
} if (s >= 0 && s <= 60) {
  console.log('Верно')
} else {
  console.log('Посмотрите внимательнее')
}

// Запросить у пользователя номер месяца и вывести на экран его название.
m = 1
switch (m) {
  case 1:
    console.log('Январь');
    break;
  case 2:
    console.log('Февраль');
    break;
  case 3:
    console.log('Март');
    break;
  case 4:
    console.log('Апрель');
    break;
  case 5:
    console.log('Май');
    break;
  case 6:
    console.log('Июнь');
    break;
  case 7:
    console.log('Июль');
    break;
  case 8:
    console.log('Август');
    break;
  case 9:
    console.log('Сентябрь');
    break;
  case 10:
    console.log('Октябрь');
    break;
  case 11:
    console.log('Ноябрь');
    break;
  case 12:
    console.log('Декабрь');
    break;
  default:
    console.log('Вы впорядке?')
}

// Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.
let f1 = 5
let f2 = 1
let operator = '*'
switch (operator) {
  case '+':
    console.log('Сумма', f1 + f2);
    break;
  case '-':
    console.log('Разность', f1 - f2);
    break;
  case '*':
    console.log('Произведение', f1 * f2);
    break;
  case '/':
    console.log('Частное', f1 / f2);
    break;
  default:
    console.log('Повторите попытку!')
}

// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым(18_60) или пенсионером (60– ...).
let voz = 5
if (voz >= 0 && voz <= 2) {
  console.log('Вы - ребенок')
} else if (voz >= 12 && voz <= 18) {
  console.log('Вы - подросток')
} else if (voz >= 18 && voz <= 60) {
  console.log('Вы - взрослый')
} else if (voz >= 61) {
  console.log('Вы - пенсионер')
} else {
  console.log('Кто Вы?')
}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!,2–@, 3–# и т. д).

let g = 6
switch (g) {
  case 1:
    console.log('!');
    break;
  case 2:
    console.log('@');
    break;
  case 3:
    console.log('#');
    break;
  case 4:
    console.log('$');
    break;
  case 5:
    console.log('%');
    break;
  case 6:
    console.log('^');
    break;
  case 7:
    console.log('&');
    break;
  case 8:
    console.log('*');
    break;
  case 9:
    console.log('(');
    break;

  default:
    console.log('Все нормально?')
}

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let year = 2023
if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
  console.log('Високосный')

} else {
  console.log('Невисокосный')
}

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,UAN или AZN, и получает в ответ соответствующую сумму.
let USD = 78
let valute = 'EUR'
const EUR = 0.921838
const UAN = 7.23
const AZN = 1.7

switch (valute) {
  case 'EUR':
    console.log(USD * EUR);
    break;
  case 'UAN':
    console.log(USD * UAN);
    break;
  case 'AZN':
    console.log(USD * AZN);
    break;
  default:
    console.log('Все нормально?')

}

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let pokupka = 345
if (pokupka >= 200 && pokupka <= 300) {
  console.log('Ваша сумма  со скидкой:', pokupka - (pokupka * 3 / 100))
} else if (pokupka >= 300 && pokupka <= 500) {
  console.log('Ваша сумма  со скидкой:', pokupka - (pokupka * 5 / 100))
} else if (pokupka >= 700) {
  console.log('Ваша сумма  со скидкой:', pokupka - (pokupka * 7 / 100))
} else {
  console.log('Извини,брат,для тебя нет скидки')
}

// Вычислите значения выражения '2+2'
let text = 9
if (text == 4) {
  console.log('Правильно!',)
} else {
  console.log('Подумай ещё!')
}


// Вывести # столько раз, сколько указал пользователь.
let start = 0
let userInput = 10
let tex = ''
while (start < userInput) {
  tex = tex + '#'
  start++
}
console.log(tex)

// Запросить число и степень. Возвести число в указанную степень и вывести результат.
let num = 19
let count = 3
let result = 1
while (count) {
  result *= num
  count--
}
console.log(result)

// Запросите 2 числа и найти все общие делители.
{
  let num1 = 75
  let num2 = 15
  tex = ''
  let min = num1 < num2 ? num1 : num2
  while (min) {
    if (num1 % min == 0 && num2 % min == 0) {
      tex += min + '_'
    }
    min--
  }
  console.log(tex)
}

// Посчитать факториал введенного пользователем числа.
let nn = 5
result = 1
while (nn) {
  if (nn > 0) {
    result *= nn
  }
  nn--
}
console.log(result)

// Делить число 1000 на 2 до тех пор, пока не получится число меньше 50.Вывести это число и сколько делений произвели.
let resu = 1000
let i = 0
while (true) {
  resu /= 2
  i++
  if (resu < 50) break
}
console.log(resu, `за ${i} итераций`)

//Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.

let number = 9
for (i = 1; i <= 100; i++) {
  if (i % number == 0)
    console.log(i)
}

// Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
let minimal = 6
let maximum = 25
let k = minimal
for (minimal; minimal <= maximum; minimal += 4) {
  if (minimal <= k) continue;
  console.log(minimal - 1)
}
// Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.
let num3 = 7
for (let g = num3; g <= num3; g++) {
  if (num3 % 2 == 0 && num3 != 2) {
    console.log('Составное число')
  } else if (num3 <= 1) {
    console.log('Вообще не туда')
  } else {
    console.log('Простое число')
  }
}
// НЕ РЕШЕНО

// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let a1 = 2
let a2 = 5
let summ = 0
while (a1 <= a2) {
  summ = a1 + summ
  a1++
}
console.log(summ)
// Запросить 2 числа и найти только наибольший общий делитель.
a1 = 6
let b1 = 7
while (a1 != 0 && b1 != 0) {
  if (a1 > b1) {
    a1 = a1 % b1;

  } else (a1 < b1); {
    b1 = b1 % a1;
  }
}
console.log(a1 + b1)
//  НЕ РЕШЕНО

// Написать функцию, которая принимает 2 числа и возвращает меньшее из них
function min(a = 9, b = 7) {
  return a < b ? a : b;
}
console.log(min())

// Написать функцию, которая возводит переданное число в указанную степень.
function pow(x = 7, n = 5) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow())
// Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
function getMath(f1: number, f2: number, operator: string) {
  switch (operator) {
    case '+':
      return f1 + f2;
      break;
    case '-':
      return f1 - f2;
      break;
    case '*':
      return f1 * f2;
      break;
    case '/':
      return f1 / f2;
      break;
    default:
      console.log('Повторите попытку!')
  }
}
console.log(getMath(1, 4, '/'))

// Написать функцию, которая проверяет, является ли переданное ей число простым.
function PetPrime(num3: number, g: number) {
  for (let g = num3; g <= num3; g++) {
    if (num3 % 2 == 0 && num3 != 2) {
      return ('Составное число')
    } else if (num3 <= 1) {
      return ('Вообще не туда')
    } else {
      return ('Простое число')
    }
  }
}

console.log(PetPrime(8, 8))


// for (let i = 1; i <= 9;  i += 1) {
//   for (let j = 1; j <= 9; j += 1) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }}

// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9
function ShowCalculator(i: number) {
  return (`
  ${i}*1=${i}*1
  ${i}*2=${i}*2
  ${i}*3=${i}*3
  ${i}*4=${i}*4
  ${i}*5=${i}*5
  ${i}*6=${i}*6
  ${i}*7=${i}*7
  ${i}*8=${i}*8
  ${i}*9=${i}*9
  `)
}
console.log(ShowCalculator(2))
console.log(ShowCalculator(3))
console.log(ShowCalculator(4))
console.log(ShowCalculator(5))
console.log(ShowCalculator(6))
console.log(ShowCalculator(7))
console.log(ShowCalculator(8))
console.log(ShowCalculator(9))


// Написать функцию, которая реализует работу оператора %.Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать.
function RemainderDivision(a: number, b: number) {

  return (Math.trunc(a / b))

}
console.log(RemainderDivision(9, 2))

// Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.
function NumSumm(a = 0, a1 = 0, a2 = 0, a3 = 0, a4 = 0) {
  return a + a1 + a2 + a3 + a4
}
console.log(NumSumm(9, 2, 35, 56, 8))

// 

