// 1____2____3

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.send()


// let user;
// xhr.onload = () => {
//     xhr.status == '200' ? 
//     user = copyArray(JSON.parse(xhr.response)) :
//     console.log('Error');
//     console.log(user);
// }

// function copyArray(object) {
//     return object.concat([object]);
// }

// ###########___4___################
xhr.onload = () => {
    xhr.status == '200' ?
        createElement(JSON.parse(xhr.response)) :
        console.log('Error');
}
function createElement(object) {
    let buttonAdd;
    let main = document.querySelector('main')
    object.forEach(element => {
        buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('id', element.id)
        buttonAdd.textContent = element.name;
        main.append(buttonAdd);
    });
    document.body.append(main);

    let eventButton = addEventButton();
    // Why??????????????????????????????
}


function addEventButton() {
    let but = document.querySelectorAll('button');
    let idUser;
    let titleInfo = document.createElement('h3');
    for (let i = 0; i < but.length; i++) {
        but[i].addEventListener('click', function () {
            console.log(titleInfo);
            titleInfo.innerHTML = 'Users info:';
            titleInfo.classList.add('titleInfoUser');
            document.querySelector('main').append(titleInfo);
            footer.innerHTML = '';
            idUser = but[i].getAttribute('id');
            createElementInfo(JSON.parse(xhr.response), idUser)
            console.log(titleInfo.innerHTML);
        })
    }
}
function createElementInfo(object, id) {
    id -= 1;
    let name, userName, addres, email, phone, website;
    let nameValue, userNameValue, addresValue, emailValue, phoneValue, websiteValue;

    let buttonShowPosts;

    let aside = document.querySelector('aside');
    if (aside.innerHTML != '') {
        aside.innerHTML = '';
    }
    name = document.createElement('div');
    nameValue = document.createElement('div');
    name.textContent = 'Name:';
    nameValue.innerHTML = object[id].name;
    aside.append(name, nameValue);

    userName = document.createElement('div');
    userNameValue = document.createElement('div');
    userName.textContent = 'Username:';
    userNameValue.innerHTML = object[id].username;
    aside.append(userName, userNameValue);

    addres = document.createElement('div');
    addresValue = document.createElement('div');
    addres.textContent = 'Addres:';
    addresValue.innerHTML = `${object[id].address.city}, ${object[id].address.street} `
    aside.append(addres, addresValue);

    email = document.createElement('div');
    emailValue = document.createElement('div');
    email.textContent = 'Email:';
    emailValue.innerHTML = object[id].email;
    aside.append(email, emailValue);

    phone = document.createElement('div');
    phoneValue = document.createElement('div');
    phone.textContent = 'Phone:';
    phoneValue.innerHTML = object[id].phone;
    aside.append(phone, phoneValue);

    website = document.createElement('div');
    websiteValue = document.createElement('div');
    website.textContent = 'Website:';
    websiteValue.innerHTML = object[id].website;
    aside.append(website, websiteValue);

    buttonShowPosts = document.createElement('button')
    buttonShowPosts.innerHTML = 'Show posts';
    buttonShowPosts.classList.add('buttonShow')
    aside.append(buttonShowPosts)
    
    document.body.append(aside);

    buttonShowPosts.addEventListener('click', function () {
        var xhrPosts = new XMLHttpRequest();
         let url = 'https://jsonplaceholder.typicode.com/posts/'

        xhrPosts.open('GET', url);

        xhrPosts.send()

        xhrPosts.onload = () => {
            xhr.status == '200' ?
            createElementShow(JSON.parse(xhrPosts.response), object[id].id):
            console.log('Error');
        }
    })
}

let footer = document.querySelector('footer');
let titleShowPost = document.createElement('h3');

function createElementShow(object, idUser) { 
    // let body = document.querySelector('body');
    if(footer.innerHTML != '') {
        footer.innerHTML = '';
    }
    
    titleShowPost.innerHTML = 'Users posts:';
    titleShowPost.classList.add('titleShow');
    document.querySelector('footer').append(titleShowPost);

    object.forEach((element) => {
        if (idUser == element.userId) {


            let div = document.createElement('div');
            div.classList.add('show')
            let titlePost = document.createElement('h3');
            let post = document.createElement('span');
            post.textContent = element.body;
            titlePost.textContent = element.title
            div.append(titlePost, post)
            
            
            footer.append(div)
        }
        document.body.append(footer);
    })
}