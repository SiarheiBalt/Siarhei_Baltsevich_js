// console.log("1" + 2 + 0)
// -> 120;  наличие 1го строкового значения преобразует последующие числа в строки,
// '1'+'2'+'0' = 120

// console.log("1" - 1 + 2)
// -> 2;  минус преобразует 1е значение в число, 1-1+2

// console.log(true +  false)
// -> 1;   true = 1, false = 0

// console.log(10 / "5")
// -> 2; как и минус делает один из операндов числом.

// console.log("2" * "3")
// -> 6; оператор * преобразует строки в числа.

// console.log(4 + 5 + "px")
// -> 9px;  4+5 сложение чисел, 9+px сложение строк

// console.log("$" + 4 + 5)
// -> $45;  сложение строк

// console.log("42" - 2)
// -> 40; разность чисел, результат число

// console.log("4px" - 2)
// -> NaN; 4px не является числом

// console.log(7 / 0)
// ->Infinity; при делении на 0 всегда бесконечность.

// console.log("-9 \n" + 5)
// -> -9
//    5; \n спецсимвол переноса строки, без \n было б -9 5.

// console.log("-9 \n" - 5)
// -> -14; минус преобразует -9 \n в число не учитывая спецсимвол,
// далее математическая операция чисел.

// console.log(5 && 2)
// -> 2; возвращает последнее правдивое значение.

// console.log(2 && 5)
// -> 2; возвращает последнее правдивое значение.

// console.log(5 || 0) 
// console.log(0 || 5)
// ->5; 5 = true, 0 = false. Логический оператор || выводит true.


// console.log(null + 1)
// -> 1; при сложении null = 0.

// console.log(undefined + 1)
// -> NaN; при приобразовании undefined к числу, undefined = NaN.
// При сложении, вычитании где один из операндов NaN, результат всегда NaN.

// console.log(null == "\n0\n")
// -> false; null равен только самому себе и undefined.

// console.log(+null == +"\n0\n")
// -> true; при приведении Null в число Null = 0, 
// строка '\n0\n' пребразуется в 0(спецсимволы не учитываются).

// 1
// let num = prompt('Введи число.');
// if(num < 0) {
//     console.log('Число отрицательное.');
// } else if(num == 0) {
//     console.log('Ваше число 0!');
// } else if(num > 0) {
//     console.log('Число положительное.');
// } else {
//     console.log('Это не число!');
// }

// 2
// let age = prompt('Ваш возраст?')
// if (age <= 0) {
//     console.log('Враки.');
// } else if( age > 120) {
//     console.log('столько не живут!');
// } else if (age == 1) {
//     console.log('Тебе ' + age + ' год!');
// } else if (age <= 4) {
//     console.log('Тебе ' + age + ' года!');
// } else if (age%10 >= 5) {
//     console.log('Тебе ' + age + ' лет!');
// } else if (age%10 == 0) {
//     console.log('Тебе ' + age + ' лет!');
// } else if (age%10 == 1) {
//     console.log('Тебе ' + age + ' год!');
// } else {
//     console.log('Ваш возраст ' + age + ' года');
// }

// 3
// let num = +prompt('Введи число.')
// let numModule = num;
// if(numModule < 0) {
//      numModule = numModule * -1;
// } else {
//      numModule = numModule + 0;
// }
// console.log('Модуль твоего числа '  + num + ' равен ' + numModule);

// 4
//  hour = prompt('Сколько часов?')
//  min = prompt('Сколько минут?')
//  sec = prompt('А секунд?')
// if ( hour < 0 || hour > 23 ) {
//     console.log('Так не бывает.'); 
// } else if ( min < 0 || min > 60 ) {
//     console.log('Так не бывает.'); 
// } else if ( sec < 0 || sec > 60 ) {
//     console.log('Так не бывает.'); 
// } else { if (hour == 1) {
//         console.log(hour + ' hour ' + min + ' min ' + sec + ' sec ');
//     } else {
//         console.log(hour + ' hours ' + min + ' min ' + sec + ' sec ');
//     }
// }

// 5
// let x = prompt('Координата точки X?')
// let y = prompt('Координата точки Y?')
// if (x > 0 && y > 0) {
//     console.log('Точка находится в 1й четверти.');
// } else if (x > 0 && y < 0) {
//     console.log('Точка находится в 2й четверти.');
// } else if (x < 0 && y < 0) {
//     console.log('Точка находится в 3й четверти.');
// } else if (x < 0 && y > 0) {
//     console.log('Точка находится в 4й четверти.');
// } else if (x == 0 && y == 0) {
//     console.log('Точка находится в начале координат.');
// }  else if (x == 0 && y > 0) {
//     console.log('Точка находится на оси X, между 1й и 4й четвертью.');
// }  else if (x == 0 && y < 0) {
//     console.log('Точка находится на оси X, между 2й и 3й четвертью.');
// }  else if (x > 0 && y == 0) {
//     console.log('Точка находится на оси Y, между 1й и 2й четвертью.');
// }  else if (x < 0 && y == 0) {
//     console.log('Точка находится на оси Y, между 3й и 4й четвертью.');
// } else {
//     console.log(' Не корректный ввод. ');
// }

// 6
let year = +prompt('Введите год.');
year = year - (Math.trunc(year / 12)) * 12;    
 if (year == ' ') {
    console.log('Не корректный ввод.');
} else if (year == 0) {
    console.log('По китайскому календарю это год обезьяны.');
} else if (year == 1) {
    console.log('По китайскому календарю это год петуха.');
} else if (year == 2) {
    console.log('По китайскому календарю это год собаки.');
} else if (year == 3) {
    console.log('По китайскому календарю это год свиньи.');
} else if (year == 4) {
    console.log('По китайскому календарю это год крысы.');
} else if (year == 5) {
    console.log('По китайскому календарю это год быка.');
} else if (year == 6) {
    console.log('По китайскому календарю это год тигра.');
} else if (year == 7) {
    console.log('По китайскому календарю это год кролика.');
} else if (year == 8) {
    console.log('По китайскому календарю это год дракона.');
} else if (year == 9) {
    console.log('По китайскому календарю это год змеи.');
} else if (year == 10) {
    console.log('По китайскому календарю это год лошади.');
} else if (year == 11) {
    console.log('По китайскому календарю это год козы.');
} else {
    console.log('Не корректный ввод.');
}