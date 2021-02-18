// 1. Счетчик - сделать кнопку которая будет увеличивать значение счетчика на +1
// 1.1 Счетчик - сделать две кнопки которые будут увеличивть и уменьшать счетчик на +1 и -1
let clicks = 0; 
function clickMePlues() {
    clicks += 1;
    document.getElementById('rect').innerHTML = clicks
    
}
function clickMeMinus() {
    clicks -= 1;
    document.getElementById('rect').innerHTML = clicks
    
}

// 2. todo list - написать туду лист состоящий из инпута(куда пользователь будет вводить свой туду) и кнопки(по нажатию на которую туду будет добавляться в список с остальными туду); список туду сделать используя ul и li


let inp = document.querySelector('input');
submit.onclick = function() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = inp.value;
    ul.appendChild(li);
    document.getElementById('outToDo').appendChild(ul);
}
console.log(inp.value); 

// 3. написать приложение сумматор - состоящий из 2ух инпутов куда пользователь будет вводить слагаемые и кнопку "посчитать" по нажатию на которую пользователю в диве ниже будет выведен результат вычисления


function sum() {
    let red = document.querySelector('#outSum');
    red.setAttribute('class', 'outputSum');
    let oneNum = document.getElementById('oneNum').value;
    let twoNum = document.getElementById('twoNum').value;
    let sum = +oneNum + +twoNum;
    if (isNaN(sum)) {
        sum = 'Не корректно введены числа!';
        red.setAttribute('class', 'red outputSum');
    } 
    document.querySelector('.outputSum').innerHTML = sum;
}