// 1
let userNumber = +prompt('Введите число!');
userNumber = userNumber ** 2;
alert(userNumber);

// 2
var userNumber1 = +prompt('Введите число');
var userNumber2 = +prompt('Введите еще одно число');
alert('Среднее арифмитическое этих чисел равняется ' + ((userNumber1 + userNumber2)/2));

// 3
var sideQuadrate = prompt('Введите длину стороны квадрата');
alert('Площадь квадрата равняется ' + sideQuadrate**2);

// 4
const mile = 0.621371;
var kilometer = +prompt('Введитете расстояние в километрах');
var wayMiles = kilometer * mile;
alert('Ваше расстояние в милях равняется '+ wayMiles);
 
// 5
var number1 = +prompt('введите число');
var number2 = +prompt('введите еще одно число');
alert((number1 +' + ' + number2 + ' = ' +(number1+number2)) + ' ; ' +(number1 +' - ' + number2 + ' = ' +(number1-number2)) + ' ; '+ (number1 +' * ' + number2 + ' = ' +(number1*number2)) + ' ; ' + (number1 +' / ' + number2 + ' = ' +(number1/number2)));
 
// 6
var a = +prompt('Введи значение а, для выражения a * x + b = 0');
var b = +prompt('и значение b, для выражения a * x + b = 0');
var x = - (b / a)
alert('x = ' + x);
 
// 7
var currentlyTimeHours = +prompt('сколько сейчас часов');
var currentlyTimeMin = +prompt('а минут');
const itemsHoursDay = 23;
const itemsMinHours = 60;
var timeForNextDayHours = itemsHoursDay - currentlyTimeHours;
var timeForNextDayMin = itemsMinHours - currentlyTimeMin;
alert('До следующего дня осталось '+ timeForNextDayHours + ' часов ' + timeForNextDayMin + ' минут');

// 8
var number3items = +prompt('Введите 3х значное число');
var items2number = Math.trunc((number3items %100) / 10);
alert('вторая цифра вашего числа '+ items2number);

// 9
var number5items = prompt('Введи 5значное число')
var numRemainder = number5items % 10;
number5items = Math.trunc(number5items / 10)
alert('Вот такое число пучилось: ' + ' ' + numRemainder + number5items);

// 10
let summSels = prompt('Сумма продаж за месяц $');
const ernedSeller = 250;
prizeSeller = summSels / 100 * 10;
let currentlyErnedSeller = ernedSeller + prizeSeller;
alert('Зарплата продавца' + currentlyErnedSeller + '$')

// part2
// 1
let nameUser = prompt('What is your nama?')
alert('hi, ' + nameUser + '!')
// 2
let userYearsBorn = prompt('Твой год рождения?')
const currentYear = 2021;
let userAge = currentYear - userYearsBorn;
alert('Тебе ' + userAge + 'лет!')
// 3
let longSideKwadrate = prompt('Введи длину стороны квадрата.')
alert('периметр квадрата равен ' + longSideKwadrate * 4);
// 4
let radiusRounde = +prompt('Введи радиус окружности.')
alert('площадь окружности равна ' + Math.pow(radiusRounde, 2) * 3.14);
// 5
let distanceBetween = +prompt('Расстояние между городами?');
let yourTime = +prompt('Время?');
alert(distanceBetween / yourTime + 'км\ч - средняя скорость.')
// 6
const curentsivDollarEuro = 1.3;
let dollarsItem = +prompt('Hoy much baks you have?');
alert((curentsivDollarEuro * dollarsItem) + ' euro');
// 7
var sizeFile = 820;
var sizeFlash = +prompt('Объем флешки в Гигабайтах?');
alert(Math.floor(sizeFlash * 1000/ sizeFile) +' фалов размером 820 мегабайт залезет в эту флеху. ');
// 8
let maney = +prompt('Сколько есть денег?');
let costChoco = +prompt('Цена шоколадки?');
let numberChoco = Math.floor(maney / costChoco)
alert('Ты можешь купить ' + numberChoco +' шоколадки'+' и у тебя останется ' + maney%costChoco + ' рубля.')
// 9
let number3item = prompt('Введи 3х значное число.');
let num1 = number3item % 10;
let num2 = Math.trunc((number3item % 100) / 10);
let num3 = Math.trunc(number3item / 100);
alert(' ' +num1 + num2 + num3);
