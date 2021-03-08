let ul = document.getElementById('ul');
let inputDo = document.getElementById('input')

function addLi() {
    if (inputDo.value != '') {
        let divLi = document.createElement('div');
        let li = document.createElement('li');
        li.innerHTML = inputDo.value;
        divLi.append(li);
        ul.append(divLi);
        addButtonDellDo(divLi);
        addButtonUpDo(divLi);
        addButtonDown(divLi);
        addDellclassHide();
        addButtonEdit(divLi);
        cleanInput();
    }
}

function addButtonDellDo(div) {
    let button = document.createElement('button');
    button.innerHTML = 'Dell';
    button.onclick = removeLiDo;
    div.append(button);
}
function removeLiDo(event) {
    event.path[1].remove();
    if(ul.childNodes.length > 1) addDellclassHide();
}
function cleanInput() {
    inputDo.value = '';
}
function addButtonUpDo(div) {
    let button = document.createElement('button');
    button.innerHTML = 'Up';
    button.onclick = upLi;
    div.append(button);
}

function addButtonDown(div) {
    let button = document.createElement('button');
    button.innerHTML = 'Down';
    button.onclick = downLi;
    div.append(button);
}
function addButtonEdit(div) {
    let button = document.createElement('button');
    button.innerHTML = 'Edit';
    button.onclick = changeText;
    div.append(button);
}
function changeText() {
    let textArea = document.createElement('textarea');
    textArea.value = arguments[0].path[1].childNodes[0].innerHTML;
    arguments[0].path[1].append(textArea);
    addButtonChangeTextArea(arguments);
}
function addButtonChangeTextArea(arguments) {
    let button = document.createElement('button');
    button.innerHTML = 'Apply';
    button.onclick = applyChangeTextArea;
    arguments[0].path[1].append(button)
}
function applyChangeTextArea(arguments) {
    let area = document.querySelector('textarea');
    arguments.path[1].childNodes[0].innerHTML = area.value;
    removeTexrAreaAmdButton(arguments);
}
function removeTexrAreaAmdButton(arguments) {
    arguments.path[1].children[5].remove();
    arguments.path[1].children[5].remove();
}
function downLi(e) {
    let index = findIndexClickLi(e);
    let indexChange = index + 1;
    ul.insertBefore(e.path[2].children[indexChange], e.path[2].children[index]);
    addDellclassHide();
}
function addDellclassHide() {
    if (ul.childNodes.length < 3) {
        ul.childNodes[1].childNodes[2].classList.add('hide');
        ul.childNodes[1].childNodes[3].classList.add('hide');
    } else {
        let lengthUl = ul.childNodes.length - 1;
        ul.childNodes[lengthUl].childNodes[3].classList.add('hide');
        ul.childNodes[lengthUl - 1].childNodes[3].classList.remove('hide');
        ul.childNodes[2].childNodes[2].classList.remove('hide')
        ul.childNodes[1].childNodes[2].classList.add('hide');
    }
}
function upLi(e) {
    let index = findIndexClickLi(e);
    let indexChange = index - 1;
    ul.insertBefore(e.path[2].children[index], e.path[2].children[indexChange]);
    addDellclassHide();
}
function findIndexClickLi(e) {
    let arr = Array.from(e.path[2].children);
    let indexFindEl;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].innerHTML === arguments[0].path[1].innerHTML) {
            indexFindEl = i;
            break;
            // Why break did't work
        };
    }
    return indexFindEl;
}