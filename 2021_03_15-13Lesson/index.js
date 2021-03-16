const bordKeys = [
    'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','caps lock',
];
const main = document.querySelector('main');
const textArea = document.querySelector('#textArea');

let caps = false;

bordKeys.forEach((el) => {
    let button = document.createElement('button');
    button.innerHTML = el;
    button.onclick = handler;
    main.append(button);
    
})
function handler(event) {
    if(event.target.innerHTML === 'caps lock') {
        caps = ! caps;
        event.target.innerHTML += '';
        console.log(caps);
        return caps;
    }
    caps ===true ? textArea.innerHTML += event.target.innerHTML.toUpperCase() : textArea.innerHTML += event.target.innerHTML.toLowerCase();
}