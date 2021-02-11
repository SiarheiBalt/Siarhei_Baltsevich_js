const list = [
    {name: 'milk', quantity: 2, availiblity : true},
    {name: 'bread', quantity: 1, availiblity : false},
    {name: 'fish', quantity: 3, availiblity : false},
    {name: 'beer', quantity: 1, availiblity : true},
    {name: 'lemon', quantity: 3, availiblity : false},
]
//1 Вывод списка на экран, сначала не купленные.
function isAvail( a ) {
   let is = a.filter(product => product.availiblity === true)
   let isNot = a.filter(product => product.availiblity === false)
//    let is = []; 
//    for(let i = 0; i < a.length; i++ ) 
//    if (a[i].availiblity == true) {
//        is.push(list[i])
//    }
   is.forEach( product => console.log(`${product.name} - не куплен.`))
   isNot.forEach( product => console.log(`${product.name} - куплен.`))
//Вывожу по очереди каждое значение
//    for(let i = 0; i < is.length; i++) {
//        console.log(is[i].name);
//    }
}
isAvail(list)
// list.forEach(product => console.log(product));
console.log(list);
// 2 Добавлени покупки в список
function addBuy(a, b) {
let findProduct = a.find(product => product.name == b.name);
if ( findProduct == undefined ) {
    list.push(b);
} else {
    for(let i = 0; i < a.length; i++) {
        if (list[i].name == b.name ) {
            list[i].quantity += 1;
            return;
         }
        }
    }
}
let addProduct = {name: 'cheps', quantity: 1, availiblity : false,}
addBuy(list, addProduct )
console.log(list);
// 3 Покупка. Принимает название отмечает как купленный
function bought(a, b ) {
    // Нахожу в массиве такое же имя которое нужно добавить в купленные, 
    let add = list.filter(product => product.name == addBought);
    for(let i = 0; i < list.length; i ++) {
        if (list[i].name == add[0].name) {
            list[i].availiblity = true;
            return;
        }
    }
}
let addBought = 'lemon';
let findP = list.find(product => product.name === addBought)
if ( findP == undefined ) {
    console.log('Нет такого продукта.');
} else {
    bought(list, addBought);
};

// let w =[ {a: 1}, {b: 2}, {c: 3},] для объектов
// for(let key in w) {
//     console.log(w[key]);
// }
// for(let key of w) {               для массивов
//     console.log(key);
// }
// #####################################################################
// 1 Создать массив из 10 случайных чисел:
let arr = [1, 14, 151, 8, 3, 74, 3, 9, 23, 85 ]
// 2. Программа выводит только четные элементы. 
function evenNum(a) {
    // console.log(`Вывожу четные:`);
    // for(let i = 0; i < a.length; i++) {
    //     if (a[i] % 2 == 0) {
    //         console.log(a[i]);
    //     }
    // }
    let evenN = a.filter(even => even%2 ==0)
    console.log(`Вывожу четные:`);
    evenN.forEach(even => console.log(even))
}
evenNum(arr)
// 33. Программа возвращает сумму всех элементов массива. 
function summNumber(a) {
    // let sum = 0;
    // for(let i = 0; i < a.length; i++) {
    //     sum += a[i];
    // }
    // console.log(sum);
    let sumN = a.reduce((total, a)  => total + a, 0)
    console.log(`Сумма равна  ${sumN}`);
}
summNumber(arr)
// 4. Программа возвращает его максимальный элемент. 
function maxEl(a) {
    let x = 0;
    for(let i = 0; i < a.length; i++) {
        if (x < a[i]) {
            x = a[i]
        }
    }
    console.log(`Максимальный елемент = ${x}`);
}
maxEl(arr)
// 5. Программа добавляет новый элемент в массив по указанному индексу. 
function addIndex(a, index, element) {
    a.splice(index, 0, element)
    console.log(a);
}
let indArrAdd = -2;
let elementArrAdd = 'a';
addIndex(arr, indArrAdd, elementArrAdd)
// 6. Программа удаляет элемент из массива по указанному индексу.
function dellIndex(a, del) {
    a.splice(del, 1);
    console.log(a);
}
let indArrDel = 2;
// let elementArrDel = 'a';
dellIndex(arr, indArrDel);
// ######################################################
// 1 В массиве, состоящем из n элементов, вычислить:
// – номер минимального элемента массива;
// – сумму модулей элементов массива, расположенных после первого
// отрицательного элемента.
let arr1 = [1, 14, 151, -2, 3, 74, -3, 9, 23, 85 ]
console.log(arr1);
let minArr1 = arr1[1]; 
for(let i = 0; i < arr1.length; i++) {
    if (minArr1 > arr1[i]) {
        minArr1 = arr1[i]
    }
}
let minAr1 = arr1.findIndex(min => min == minArr1 )
console.log(`число = ${minArr1}, его модуль = [${minAr1}]`);
// Нахожу первое отрицательное число
let minusAr1;
for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
        minusAr1 = arr1[i];
        break;
    }
}
// Нахожу индекс этого числа
// let minusAr1Modul = arr1.findIndex(a => a == minusAr1 )
let minusAr1Modul = arr1.indexOf(minusAr1);
// слаживаю от найденного модуля
let arr1SumCopy = arr1.slice(minusAr1Modul, arr1.length);
// Вставляю в ранее написанную функцию чтоб вывести сумму
summNumber(arr1SumCopy);
// #################################################
// 2 В массиве, состоящем из n элементов,
// вычислить:
// – номер максимального элемента массива;
// – сумму элементов массива, расположенных после первого положительного элемента.
let maxArr1 = arr1[1]; 
for(let i = 0; i < arr1.length; i++) {
    if (maxArr1 < arr1[i]) {
        maxArr1 = arr1[i]
    }
}
// Нахожу индекс 
let maxAr1 = arr1.findIndex(max => max == maxArr1 )
console.log(`число = ${maxArr1}, его модуль = [${maxAr1}]`);
// слаживаю от найденного модуля
let arr1SumCopyMax = arr1.slice(maxAr1, arr1.length);
summNumber(arr1SumCopyMax);
// #########################################################
// 3 В массиве, состоящем из n элементов, вычислить:
// – количество элементов массива, лежащих в диапазоне от А до В; 
// – сумму элементов массива, расположенных после максимального
// элемента.
let arr3 = [1, 14, 151, -2, 3, 74, -3, 9, 23, 85 ]
let a3 = 2;
let b3 =4;
let arr3AB = arr3.slice(a3, (b3 + 1));
console.log(`Количество елементов =  ${arr3AB.length};`);
// Нахожу макс. елемент массива
let maxElArr3 = maxElArray(arr3);
console.log(maxElArr3);
// Нахожу его index
let indexMaxElArr3 = arr3.findIndex(a => a == maxElArr3);
console.log(indexMaxElArr3);
//Нахожу сумму элементов массива, расположенных после максимального
// элемента.
sumArr3 = 0;
for(let i = indexMaxElArr3; i < arr3.length; i++) {
    sumArr3 += arr3[i];
}
console.log('Сумма равна ' + sumArr3 + ';');
// 4 В массиве, состоящем из n элементов,
// вычислить:
// – количество элементов массива, равных 0;
// – сумму элементов массива, расположенных после минимального
// элемента.
let arr4 = [1, 0, 151, -2, 3, 74, 0, 9, 23, 85 ]
function eaqlsNull(a) {
    nullCount = 0;
    for(let i = 0; i < arr4.a; i++) {
        if (a[i] == 0) {
            nullCount++;
        }
    }
    console.log(`Количество нулей равно ${nullCount};`);
}
eaqlsNull(arr4);
function minElementArray(a) {
    minEl = 0;
    for(i = 0; i < a.length; i++) {
        if (a[i] < minEl) {
            minEl = a[i];
        }
    }
    return minEl;
}
let minElArr4 = minElementArray(arr4);
// Нахожу индекс
let indexMinElArr4 = arr4.findIndex(a => a == minElArr4);
// сумма
function summAfterEl(array, IndexElementa) {
    let summ = 0;
    for(i = IndexElementa; i < array.length; i++) {
        summ += array[i];
    }
    console.log(`Сумма равна ${summ};`);
}
summAfterEl(arr4, indexMinElArr4);
// 5 В массиве, состоящем из n элементов, вычислить:
// – количество элементов массива, больших С;
// – произведение элементов массива, расположенных после максимального по модулю элемента.
let arr5 = [1, 0, 151, -2, 3, 74, 0, 165, 23, 5 ];
let c5 = 15;
let countLotEl = 0;
for(let i = 0; i < arr5.length; i++) {
    if (arr5[i] > c5) {
        countLotEl++;
    }
}
console.log( `${countLotEl} елементов в массиве больше ${c5} `);
// Нахожу макс. елемент массива
function maxElArray(a) {
    let max = 0;
    for(let i = 0; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i];
        }
    }
    return max;
}
// применяю ранее созданную функцию, нахожу мах елемент
let maxElArr5 = maxElArray(arr5);
console.log(maxElArr5);
// Нахожу индекс
let indexMaxElArr5 = arr5.findIndex(a => a == maxElArr5);
console.log('его индекс ' + indexMaxElArr5);

function multiAfterEl(array, indexElementa) {
    let multi = 1;
    for(let i = indexElementa; i < array.length; i++) {
        multi *= array[i];
        console.log(multi);
       
    }
    console.log(`Произведение равно ${multi};`);
}
multiAfterEl(arr5, indexMaxElArr5);
// 6 В массиве, состоящем из n элементов,
// вычислить:
// –кол-во  отрицательных элементов массива;
// – сумму модулей элементов массива, расположенных после минимального по модулю элемента.
let arr6 = [1, 0, 151, -2, 3, -74, 0, 165, -23, 5 ];
// Функция находит кол-во отрицательных елементов
function itemMinusElArr(a) {
    countMinus = 0;
    for(let i =0; i < a.length; i++) {
        if (a[i] < 0) {
            countMinus++;
        }
    }
    console.log('Кол-во отрицательных чисел ' + countMinus);
}
itemMinusElArr(arr6);
// Нахожу минимальный элемент
let minElArr6 = minElementArray(arr6);
console.log(minElArr6);
// Нахожу индекс
let indexMinElArr6 = arr6.findIndex(a => a == minElArr6)
// Нахожу сумму после элемента
summAfterEl(arr6, indexMinElArr6 );
// 7 В массиве, состоящем из n элементов, вычислить:
// – количество положительных элементов массива;
// – сумму элементов массива, расположенных после последнего элемента, равного нулю.
let arr7 = [1, 0, 151, -2, 3, -74, 0, 165, -23, 5 ];
function itemPluesElArr(a) {
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            count++;
        }
    }
    console.log(`Количество положительных елементов массива ${count}`);
}
itemPluesElArr(arr7)
// Нахожу последний ноль
let isNullArr7 = [];
for(let i = arr7.length; i > 0; i--) {
    if (arr7[i] == 0) {
         isNullArr7.push(i);
        // console.log(arr7[i]);
    } 
}
isNullArr7 = isNullArr7[0];
console.log(isNullArr7);
// Нахожу сумму после елемента
summAfterEl(arr7, isNullArr7);
// 8 В массиве, состоящем из n элементов,
// вычислить:
// – количество элементов массива, меньших С;
// – сумму целых частей элементов массива, расположенных после последнего отрицательного элемента.