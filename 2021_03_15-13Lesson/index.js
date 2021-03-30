const bordKeys = {
    ru: 'йцукенгшщзхъфывапролджэячсмитьбю↵',
    eng: `qwertyuiop[]asdfghjkl;'zxcvbnm,./↵`,
    numbers: '1234567890-=⟵',
    shiftNumbers: '?!@#$%^*()_+⟵',
    caps: 'caps lock',
    shift: 'shift',
    alt: 'alt',
    spaceAndArrows: ' ᐸᐱᐯᐳ'
}
stateSomeKeys = {
    'caps lock': false,
    shift: false,
    alt: false,
}
const main = document.querySelector('main');
const aside = document.querySelector('aside');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const textArea = document.querySelector('#textArea');
textArea.focus()

createElAddEvent(bordKeys.ru.split(''), main);
createElAddEvent(bordKeys.numbers.split(''), header);
createElAddEvent([bordKeys.caps, bordKeys.shift, bordKeys.alt], aside);
createElAddEvent(bordKeys.spaceAndArrows.split(''), footer)
function createElAddEvent(arr, place) {
    arr.forEach((el) => {
        let button = document.createElement('button');
        button.innerHTML = el;
        changeStyleButton(button);
        button.onclick = handler;
        place.append(button);
    })
}
function changeStyleButton(button) {
    if (button.innerHTML === ' ') button.classList.add('back_space');
    if (button.innerHTML === 'ᐱ') button.classList.add('upArrow');
    if (button.innerHTML === '⟵') button.style.width = '40px';
    if (button.innerHTML === '↵') button.classList.add('enter');
}

function handler(event) {
    let key = event.target.innerHTML;
    if (key === '↵') return enterEvent()
    if (key === '⟵') return backSpaceEvent()
    if (key.split('').length > 1) return keyDownUp(event);
    if (key === 'ᐸ' || key ==='ᐱ' || key ==='ᐯ' || key ==='ᐳ') return arrowsEvent(key)
    stateSomeKeys['caps lock'] === true || stateSomeKeys.shift === true ?
        textArea.innerHTML += event.target.innerHTML.toUpperCase() :
        textArea.innerHTML += event.target.innerHTML.toLowerCase();
        return focusCount = 0;
}
function arrowsEvent(key) {
    if(key === 'ᐸ') {
        focusCount++;
        moveFocus(focusCount);
        return focusCount;
    }
    if(key === 'ᐳ') {
        focusCount--;
        moveFocus(focusCount);
        return focusCount;
    }
    if(key === 'ᐱ') {
        focusCount = textArea.innerHTML.length;
        moveFocus(focusCount);
    }
    if(key === 'ᐯ') {
        focusCount = 0;
        moveFocus(focusCount);
    }
    
}
let focusCount = 0;

function enterEvent() {
    textArea.innerHTML = textArea.innerHTML + '\n';
}
function moveFocus(c) {
    textArea.focus();
    textArea.setSelectionRange(textArea.innerHTML.length, textArea.innerHTML.length - c);
   
}
function backSpaceEvent() {
    let text = textArea.innerHTML.split('');
    text.splice(text.length - 1, 1);
    textArea.innerHTML = textArea.innerHTML.split().pop()
    textArea.innerHTML = text.join('');
}
function keyDownUp(event) {
    stateSomeKeys[event.target.innerHTML] = !stateSomeKeys[event.target.innerHTML];
    addDellBacklightSomeKeys(event);
    event.target.innerHTML += '';
    changeKeysNumber()
    if (stateSomeKeys.shift == true && stateSomeKeys.alt == true && event.target.innerHTML != 'caps lock') changeKeysLetters(event);
    return stateSomeKeys[event.target.innerHTML];
}
function addDellBacklightSomeKeys(event) {
    !event.path[0].classList.contains('backLight') ?
        event.path[0].classList.add('backLight') :
        event.path[0].classList.remove('backLight')
}
function changeKeysLetters(event) {
    let keys;
    main.childNodes[0].innerHTML === 'й' ? keys = 'eng' : keys = 'ru';
    for (let i = 0; i < main.childNodes.length; i++) {
        main.childNodes[i].innerHTML = bordKeys[keys].split('')[i];
    }
}
function changeKeysNumber(event) {
    let keys;
    stateSomeKeys.shift == true ? keys = 'shiftNumbers' : keys = 'numbers';
    for (let i = 0; i < header.childNodes.length; i++) {
        header.childNodes[i].innerHTML = bordKeys[keys].split('')[i];
    }
}