// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let a = +prompt('Число?');
// let b = +prompt('Еще число?');
// let c = 0
// while (a <= b) {
//     c = c + a;
//     a++;
// }
// console.log(c);
// 2. Запросить 2 числа и найти только наибольший общий делитель.
// let a = +prompt('Число?');
// let b = +prompt('Еще число?');
// let c;
// if (a > b) {
//     c = a;
// } else {
//     c = b;
// }
// for(; c != 1; c--) {
//     if (a % c == 0 && b % c == 0) {
//         console.log(c);
//         break;
//     } 
// }
// 3. Запросить у пользователя число и вывести все делители этого числа.
// let a = +prompt('Число?');
// for(let c = 1; c <= a; c++) {
//     if (a % c ==0) {
//         console.log(c);
//     }
// }
// 4. Определить количество цифр в введенном числе.
// let a = +prompt('Введи положительное число?');
// let b = 0;
// while(a > 0) {
//     b++;
//     a = Math.trunc(a / 10);
// }
// console.log(b); 
// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// let count = 10;
// let plus = 0;
// let minus = 0;
// let nul = 0;
// let even = 0;
// let notEven = 0;
// for(; count > 0; count--) {
//     let a =+prompt('Введи 10 чисел');
//     console.log(a);
//     if (a > 0) {
//         plus++;
//     } else if (a == 0) {
//         nul++;
//     } else {
//         minus++;
//     };
//     if (a%2 == 0 && a !=0) {
//         even++;
//     } 
//     else if( a%2 != 0) {
//         notEven++;
//     }
// }
// console.log(plus + ' -положительных чисел; ' + minus + ' -отрицательных; ' + nul + ' -нулей; ' + even + ' -четных; ' +notEven + ' -нечетных.');
// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
// let answer;
// do {
//     let a = +prompt('Число?');
//     let b = +prompt('Еще число?');
//     let c = prompt('*/-+?')
//     if (c == '*') {
//         c = a * b;
//     } else if (c == '/') {
//         c = a / b;
//     } else if (c == '-') {
//         c = a - b;
//     } else if (c == '+') {
//         c = a + b;
//     }
//     console.log(c);
//     answer = confirm('Еще пример?')
// } while (answer == true);
// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// let a = +prompt('Введи положительное число?');
// let faze =10 ** +prompt('На сколько сдвинуть?');
// let b = 0;
// for(let aCopy = a; aCopy > 0; b++) {
//     aCopy = Math.trunc(aCopy / 10);
// }
// let fazeB = 10 ** b;
// let fazeAStart = Math.trunc(faze*(a / fazeB));
// let fazeAEnd = a - (fazeB / faze) * Math.trunc(faze*(a / fazeB));
// console.log(' ' + fazeAEnd + fazeAStart);
// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
// let day = true;
//  for(count = 1; day == true; count++) {
//     if (count == 1) {
//         day = confirm('Понедельник.  Хотите увидеть следующий день?')
//     } else if(count == 2) {
//         day = confirm('Вторник. Хотите увидеть следующий день?')
//     } else if(count == 3) {
//          day = confirm('Среда. Хотите увидеть следующий день?')
//     } else if(count == 4) {
//          day = confirm('Четверг. Хотите увидеть следующий день?')
//     } else if(count == 5) {
//          day = confirm('Пятница. Хотите увидеть следующий день?')
//     } else if(count == 6) {
//          day = confirm('Суббота. Хотите увидеть следующий день?')
//     } else if(count == 7) {
//          day = confirm('Воскресенье. Хотите увидеть следующий день?')
//     } else if(count == 7) {
//          day = confirm('Воскресенье. Хотите увидеть следующий день?')
//     } else {
//          count -=8;
//     }
//  }
// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// for(let a = 2; a <=9; a++ ) {
//         for ( let count = 1; count <= 10; count++) {
//         console.log( a + ' * ' + count + ' = ' + + a * count);
//     };
// }
// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
// confirm('Загадай число от 0 до 100?');
// let a = 2, b, c = 50;
// while(b != '=') {
//     b = prompt('Твое число < > или = ' + c +'?')
//     if (b == '>') {
//         c = Math.trunc(c + c / a);
//     } else if (b == '<') {
//         c = Math.trunc(c - c / a);
//     } else if (b == '=') {
//         alert('GAME OVER.');
//     }
//     a+=2;
//     console.log(a);
// }
// console.log(c);
// 11. Посчитать факториал введенного пользователем числа.
// let a = +prompt('Введи число.');
// let b = 1;
// let c = 1
// while( a!= c && c < a ) {
//     b++;
//     c = c * b;  
// }
// console.log('Факториал числа ' + a + ' равен ' + b + '.');