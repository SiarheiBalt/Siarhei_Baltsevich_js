let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let negative = document.getElementById('negative');

let split = document.getElementById('split');
let multi = document.getElementById('multi');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus')

let clean = document.getElementById('clean');

let outNum1 = 0;
let operator = document.getElementById('operator');
let outNum2 = 0;
let out = document.getElementById('out');

let equals = document.getElementById('equals');

let operation, result;

one.addEventListener('click', addOne)
function addOne() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '1';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '1';
        out.value = '';
        out.value = +outNum2
        
    }
};
two.addEventListener('click', addTwo);
function addTwo() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '2';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '2';
        out.value = '';
        out.value = +outNum2
        
    }
};
three.addEventListener('click', addThree);
function addThree() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '3';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '3';
        out.value = '';
        out.value = +outNum2
        
    }
}
four.addEventListener('click', addFour);
function addFour() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '4';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '4';
        out.value = '';
        out.value = +outNum2
        
    }
};
five.addEventListener('click', addFive);
function addFive() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '5';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '5';
        out.value = '';
        out.value = +outNum2
        
    }
};
six.addEventListener('click', addSix);
function addSix() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '6';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '6';
        out.value = '';
        out.value = +outNum2
        
    }
};
seven.addEventListener('click', addSeven);
function addSeven() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '7';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '7';
        out.value = '';
        out.value = +outNum2
        
    }  
};
eight.addEventListener('click', addEight);
function addEight() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '8';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '8';
        out.value = '';
        out.value = +outNum2
        
    }
};
nine.addEventListener('click', addNine);
function addNine() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '9';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '9';
        out.value = '';
        out.value = +outNum2
        
    }
};
zero.addEventListener('click', addZero);
function addZero() {
    out.value = '';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = outNum1 + '0';
        out.value = +outNum1
    } else {
        outNum2 = outNum2 + '0';
        out.value = '';
        out.value = +outNum2
        
    }
};
negative.addEventListener('click', addNeg);
function addNeg() {
    out.value = '-';
    if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
        outNum1 = '-' + outNum1;
    } else {
        outNum2 = '-' + outNum2;
    }
};


split.addEventListener('click', spliter);
function spliter() {
    operation = '/';
    out.value = '/';

}
multi.addEventListener('click', multiNum);
function multiNum() {
    operation = '*';
    out.value = '*';

}
minus.addEventListener('click', minusNum);
function minusNum() {
    operation = '-';
    out.value = '-';

}
plus.addEventListener('click', plusNum);
function plusNum() {
    operation = '+';
    out.value = '+';

}

clean.addEventListener('click', cleaner)
function cleaner() {
    operation = undefined;
    result = undefined;
    out.value = '0';
    outNum1 = 0;
    outNum2 = 0;
}

equals.addEventListener('click', eqully)
function eqully() {
    
    if (operation == '/') {
        result = +outNum1 / +outNum2;
        out.value = result;
        outNum1 = 0;
        outNum2 = 0;
        operation = undefined;
        result = undefined;
       
    } else if (operation == '*') {
        result = +outNum1 * +outNum2;
        out.value = result;
        outNum1 = 0;
        outNum2 = 0;
        operation = undefined;
        result = undefined;
    } else if (operation == '-') {
        result = +outNum1 - +outNum2;
        out.value = result;
        outNum1 = 0;
        outNum2 = 0;
        operation = undefined;
        result = undefined;
    } else if (operation == '+') {
        result = +outNum1 + +outNum2;
        out.value = result;
        outNum1 = 0;
        outNum2 = 0;
        operation = undefined;
        result = undefined;
    }
}