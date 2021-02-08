///////////////////////////////////////////////////////////##############
let rectangle = {
    leftHeight: {
        x : 3,
        y : 2,
    },
    rightBotton: {
        x : 7,
        y : -1,
    }
}
// 1. Функция принимает объект-прямоугольник и выводит информацию о нем где какая точка расположена.
function rectangleFind ( a ) {
    let leftBottonX = rectangle.leftHeight.x;
    let leftBottonY = rectangle.rightBotton.y;
    let rightHeightX = rectangle.rightBotton.x;
    let rightHeightY = rectangle.leftHeight.y;
    console.log( `    Точка A по X = ${rectangle.leftHeight.x}, по Y = ${ rectangle.leftHeight.y};
    Точка B по X = ${rightHeightX}, по Y = ${rightHeightY};
    Точка C по X = ${rectangle.rightBotton.x}, по Y = ${ rectangle.rightBotton.y};
    Точка D по X = ${leftBottonX}, по Y = ${ leftBottonY};
    ` );
}
rectangleFind(rectangle);
// 2. Функция принимает объект-прямоугольник и возвращает
// его ширину.
function getWeight(a) {
    
    let lenghtAB = Math.abs(rectangle.rightBotton.x - rectangle.leftHeight.x);
    let lenghtBC = Math.abs(rectangle.leftHeight.y - rectangle.rightBotton.y);
    
    if ( lenghtAB < lenghtBC ) {
        return(lenghtAB)
    } else if ( lenghtAB > lenghtBC ) {
        return(lenghtBC)
    } else {
        return('Это квадрат!')
    };
    
}
getWeight(rectangle);
let getWeightRect = getWeight(rectangle);
console.log(`Ширина прямоугольника = ${getWeightRect}`);
// 3. Функция принимает объект-прямоугольник и возвращает
// его высоту.
function getHeight( b ) {
    
    let lenghtAB = Math.abs(rectangle.rightBotton.x - rectangle.leftHeight.x);
    let lenghtBC = Math.abs(rectangle.leftHeight.y - rectangle.rightBotton.y);   
   
    if ( lenghtAB > lenghtBC ) {
        return( lenghtAB )
    } else if ( lenghtAB < lenghtBC ) {
        return( lenghtBC )
    } else {
        return('Это квадрат!')
    };
}
getHeight(rectangle);
let getHeightRect = getHeight( rectangle );
console.log(`Высота прямоугольника = ${getHeightRect}`);
// 4. Функция принимает объект-прямоугольник и возвращает
// его площадь.
function getAreaRect(a) {
    let areaRectangle = getWeightRect * getHeightRect;
    return(areaRectangle);
}
getAreaRect(rectangle);
let areaRectangle = getAreaRect(rectangle);
console.log(`Площадь прямоугольника = ${areaRectangle}` );
// 5. Функция принимает объект-прямоугольник и возвращает
// его периметр.
function getPerimetrRect(a) {
    let perimetrRectangle = getWeightRect * 2 + getHeightRect * 2;
    return(perimetrRectangle);
}
getPerimetrRect(rectangle);
let perimetrRectangle = getPerimetrRect(rectangle);
console.log(`Периметр прямоугольника = ${perimetrRectangle}`);
// 6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// ширину.
// function changeWeightRect(a, b) {
//     let  changeWeightRectangle = getWeightRect + getWeightRectItem;
//     return(changeWeightRectangle);
// }
// let getWeightRectItem = 3;
// changeWeightRect(rectangle, getWeightRectItem)
// let changeWeightRectangle = changeWeightRect(rectangle, getWeightRectItem)
// console.log(`Ширина увеличена на ${getWeightRectItem} и = ${changeWeightRectangle}`);
// 7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту
// function changeHeightRect(a, b) {
//     let  changeHeightRectangle = getHeightRect + getHeightRectItem;
//     return(changeHeightRectangle);
// }
// let getHeightRectItem = 5;
// changeHeightRect(rectangle, getHeightRectItem)
// let changeHeightRectangle = changeHeightRect(rectangle, getHeightRectItem)
// console.log(`Высота увеличена на ${getHeightRectItem} и = ${changeHeightRectangle}`);
// 8. Функция изменения ширины и высоты прямоугольника.
function changeWHR(a, b) {
let  changeWeightRectangle = getWeightRect + chHW.w;
let  changeHeightRectangle = getHeightRect + chHW.h;
return [changeWeightRectangle, changeHeightRectangle];
};
let chHW = {
    h: 4, 
    w: 2,
}
let changeWeightRectangle = changeWHR(rectangle , chHW)[0];
let changeHeightRectangle = changeWHR(rectangle , chHW)[1];
console.log(`Ширина увеличена на ${chHW.w} и = ${changeWeightRectangle}
Высота увеличена на ${chHW.h} и = ${changeHeightRectangle}`);
// 9. Функция смещения прямоугольника по X, Y.
function fazeRect(a, b) {
    rectangle.leftHeight.x += fazedot.x;
    rectangle.rightBotton.x += fazedot.x;
    rectangle.leftHeight.y += fazedot.y;
    rectangle.rightBotton.y += fazedot.y;
}
let fazedot = {
    x: -1,
    y: 3,
}
fazeRect(rectangle, fazedot )
rectangleFind(rectangle);
// 10. Функция для проверки, находится ли точка внутри прямоуг..
let coordIt = {
    x: 5,
    y: 3,
}
function checkIt(a, b) {
    let areaYeas;
    if ((coordIt.x > rectangle.leftHeight.x && coordIt.x < rectangle.rightBotton.x) && (coordIt.y > rectangle.rightBotton.y && coordIt.y < rectangle.leftHeight.y)) {
        areaYeas = 'Точка находится внутри прямоугольника!';
    } else {
        areaYeas = 'Точка вне зоны прямоугольника!';
    }
    return (areaYeas);
}
let checkItem = checkIt(rectangle, coordIt);
console.log(checkItem); 
// ################################################################
// Создать объект, описывающий автомобиль (производитель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.
let car = {
    manufacture: 'Audi',
    model: 'A3',
    yearBorn: 2,
    midleSpeed: 100,
}
// 1. Функция вывода информации об авто на экран.
function showInfoCar(a) {
    console.log(`Марка - ${car.manufacture}
Модель - ${car.model}
Год выпуска - ${2000}
Крейсерская скорость - ${car.midleSpeed} км/ч`);
};
showInfoCar (car);
// 2. Функция подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1час.
function calcTimeWalk(a) {
    let timeWalk = distanceWay / car.midleSpeed + ((distanceWay / car.midleSpeed) / 4);
    let timeWalkMin = Math.trunc(((timeWalk - Math.trunc(timeWalk)) / 100 * 60) * 100)
    console.log(`Необходимое время для преодоления ${distanceWay} км. = 
    ${Math.trunc(timeWalk)} часов ${Math.trunc(timeWalkMin)} минуты.`);
}
let distanceWay = 1230;
calcTimeWalk(car)
// ##########################################################
// 3. Создать обьект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
let num = {
    numerator: 9,
    denominator: 39,
};
// 1 Сложение дробей.
function summ(a) {
    let summ = num.numerator + num.denominator;
    console.log(`Сумма 2х дробей = ${summ}`);
};
summ( num );
// 2 Вычитание
function subtraction(a) {
    let subt =  num.numerator - num.denominator;
    console.log(`Вычитание дробей и = ${subt}`);
}
subtraction(num);
// 3 Умножения
function multiplic(a) {
    let m = num.numerator * num.denominator;
    console.log(`Умножение = ${m}`);
}
multiplic(num);
// Деление
function div(a) {
    let d = num.numerator / num.denominator;
    console.log(`Деление = ${d}`);
}
div(num);
// Сокращение
console.log(`До сокращения - ${num.numerator} / ${num.denominator}`);
function reduct(a) {
    for(let i = 2; i <= num.numerator; i++) {
        while (num.numerator % i == 0 && num.denominator % i == 0) {
            num.numerator = num.numerator / i;
            num.denominator = num.denominator / i;  
        }
    }
};
reduct(num); 
console.log(`После сокращения - ${num.numerator} / ${num.denominator}`);
// ###########################################################
// Создать объект, описывающий время (часы, минуты, секунды).
let time = {
    hour : 12,
    min : 34,
    sec : 40,
}
// 1 Вывод времени на экран
function getTime (a) {
    console.log(`Время - ${time.hour} - часов, ${time.min} - минут, ${time.sec} - секунд;`);
}
getTime(time);
// 2 Изменение время на секунды
function changeSec(a, b) {
    if (fixSec + time.sec > 60) {
        time.min++;
        time.sec = (fixSec + time.sec) - 60;
    } else {
        time.sec = fixSec + time.sec;
    }
    console.log(`Время изменилось на ${fixSec} - секунд.`);
};
let fixSec = 25;
changeSec(time, fixSec);
getTime(time);
// 3 Изменения на минуты
function changeMin(a, b) {
    if (fixMin + time.min > 60) {
        time.hour++;
        time.min = (fixMin + time.min) - 60;
    } else {
        time.min = fixMin + time.min;
    }
    console.log(`Время изменилось на ${fixMin} - минут.`);
};
let fixMin = 34;
changeMin(time, fixMin);
getTime(time);
// 4 Изменения на часы
function changeHour(a, b) {
    if (time.hour + fixHour > 23) {
        time.hour = (time.hour + fixHour) - 24;
    } else {
        time.hour += fixHour;
    }
    console.log(`Время изменилось на ${fixHour} - часов.`);
}
let fixHour = 10;
changeHour(time, fixHour);
getTime(time);