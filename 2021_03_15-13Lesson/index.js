const bordKeys = {
    ru: 'йцукенгшщзхъфывапролджэячсмитьбю↵',
    eng: 'qwertyuiop[]asdfghjkl;zxcvbnm,./↵',
    numbers: 'ё1234567890-=⟵',
    shiftNumbers: '`?!@#$%^*()_+⟵',
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
function findDiv(...a) {
   return a.reduce((acc, el) => [...acc, document.querySelector(el)], [])
}
let [main, aside, footer, header, textArea] = findDiv('main', 'aside', 'footer', 'header', '#textArea')
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
    let arrText = textArea.innerHTML.split('');
    stateSomeKeys['caps lock'] || stateSomeKeys.shift ?
    arrText.splice(textArea.innerHTML.length - focusCount, 0, event.target.innerHTML.toUpperCase()):
    arrText.splice(textArea.innerHTML.length - focusCount, 0, event.target.innerHTML.toLowerCase());      
    textArea.innerHTML = arrText.join('');
    moveFocus(focusCount);
}
function arrowsEvent(key) {
    if(key === 'ᐸ') {
        focusCount++;
        moveFocus(focusCount);
    }
    if(key === 'ᐳ') {
        focusCount--;
        moveFocus(focusCount);
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
    let text = textArea.innerHTML.split('');
    text.splice((textArea.innerHTML.length ) - focusCount, 0, '\n');
    textArea.innerHTML = text.join('');
    moveFocus(focusCount);
}
function moveFocus(count) {
    textArea.focus();
    textArea.setSelectionRange(textArea.innerHTML.length, textArea.innerHTML.length - count);
}
function backSpaceEvent() {
    let text = textArea.innerHTML.split('');
    text.splice((text.length - 1) - focusCount, 1);
    textArea.innerHTML = textArea.innerHTML.split().pop()
    textArea.innerHTML = text.join('');    
    moveFocus(focusCount);
}
function keyDownUp(event) {
    stateSomeKeys[event.target.innerHTML] = !stateSomeKeys[event.target.innerHTML];
    addDellBacklightSomeKeys(event);
    event.target.innerHTML += '';
    changeKeysNumber()
    if (stateSomeKeys.shift && stateSomeKeys.alt && event.target.innerHTML != 'caps lock') changeKeysLetters(event);
    return stateSomeKeys[event.target.innerHTML];
}
function addDellBacklightSomeKeys(event) {
    !event.path[0].classList.contains('backLight') ?
        event.path[0].classList.add('backLight') :
        event.path[0].classList.remove('backLight')
}
function changeKeysLetters() {
    let keys = main.childNodes[0].innerHTML === 'й' ? 'eng' : 'ru';
    for (let i = 0; i < main.childNodes.length; i++) {
        main.childNodes[i].innerHTML = bordKeys[keys].split('')[i];
    }
}
function changeKeysNumber() {
    let keys = stateSomeKeys.shift ? 'shiftNumbers' : 'numbers';
    for (let i = 0; i < header.childNodes.length; i++) {
        header.childNodes[i].innerHTML = bordKeys[keys].split('')[i];
    }
}