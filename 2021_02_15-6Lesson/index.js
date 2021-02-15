let styles = ['Jazz', 'Blues',];
// Добавить в конец rock&Roll
let addStyles = 'rock&Roll';
// for(let i = 0; i < styles.length; i++) {
//     console.log(i);
//     if(i == (styles.length - 1)) {
//         console.log(i);
//         i++;
//         styles[i] = addStyles;
//     }
// }
// Тоже что и выше но с помощью Reduce
styles.reduce(function(acc, amount, index, array) {
    if (index == (array.length - 1)) {
        index++;
        return array[index] = addStyles;
        
    }
}, 0)
console.log(styles);
// 3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
let changeMidle = 'Classica';
styles.reduce(function (acc, amount, index, array) {
    if (index ==(array.length - 1)) {
        index = Math.ceil(index / 2);
        array[index] = changeMidle;
        return array;
    } 
}, 0)
console.log(styles);
// 4 Удалите первый элемент массива и покажите его.
let dellOnceEl;
styles.reduce(function(acc, amount, index, array) {
    if(index == 0) {
        dellOnceEl = array.splice(index, 1)
    }
    return array, dellOnceEl;
}, 0 )
console.log(styles);
console.log(`удаленный элемент ${dellOnceEl}`);
// 5 Вставьте «Рэп» и «Регги» в начало массива.
styles.splice(0, 0, 'RAP', 'Raggey' )
console.log(styles);
// ######################################################
// Написать функцию которая отсортирует список покупок по:
// 1. По цене
// 2. По названию
const list = [
        {name: 'milk', quantity: 2, availiblity : true, priсу: 1.9,},
        {name: 'bread', quantity: 1, availiblity : false, priсу: 3.7,},
        {name: 'fish', quantity: 3, availiblity : false, priсу: 5.3,},
        {name: 'beer', quantity: 1, availiblity : true, priсу: 4,},
        {name: 'lemon', quantity: 3, availiblity : false, priсу: 2,},
    ]
function filterPrice(a) {
        let b = a.slice();
        b.forEach(element => {
            return element.name;
        });
        let maxEl; 
        console.log('Фильтр от дорогих продуктов:');
        for( let i = 0; b.length != 0; ) {
            maxEl = 0;
            for(let i = 0; i < b.length; i++) {
                if (maxEl < b[i].priсу) {
                    maxEl = b[i].priсу
                }
            }
            for(let i = 0; i < b.length; i++) {
                if(maxEl == b[i].priсу) {
                    console.log(`${b[i].name} - Цена ${b[i].priсу}`);
                    b.splice([i], 1)
                }
            }
        }
}
filterPrice(list)

function filterLetter(a) {
    let b = a.slice();
    let maxEl; 
    console.log('Фильтр по алфавиту:');
    for (let i = 0; b.length != 0; ) {
        maxEl = 'zzz'
        for (let i = 0; i < b.length; i++) {
            let element = b[i];
            if (maxEl[0] > element.name[0]) {
                maxEl = element.name
            }
        }
        for(let i = 0; i < b.length; i++) {
            if (maxEl[0] == b[i].name[0]) {
                console.log(`${b[i].name} - Цена ${b[i].priсу}`);
                b.splice([i],1)
            }
        }
        
    }

}
filterLetter(list);
// ########################################################
// Нудно написать функцию которая преобразуем переменную student в переменную output используя reduce
let student = [   { name: 'Deny', enrollment: 100 },   { name: 'Sergey', enrollment: 50 },   { name: 'Dimon', enrollment: 50 } ];  

// let output= {   '50': [     { name: 'BBB', enrollment: 50 },     { name: 'CCC', enrollment: 50 }   ],   '100': [ { name: 'AAA', enrollment: 100 } ] }