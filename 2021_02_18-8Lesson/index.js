let getNum = document.querySelectorAll('.number')
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

for (let i = 0; i< getNum.length; i++) {
  
    getNum[i].addEventListener('click', function () {
        out.value = '';
        if (operation != '/' && operation != '*' && operation != '+'&& operation != '-') {
            outNum1 = outNum1 + getNum[i].innerHTML;
            out.value = +outNum1
        } else {
            outNum2 = outNum2 + getNum[i].innerHTML;
            out.value = '';
            out.value = +outNum2
            
        }
    }); 
}

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