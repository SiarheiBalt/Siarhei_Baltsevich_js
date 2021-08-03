var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let state = {
    autors: [null],
    posts: [null],
};
let currentUserIdforShowPosts;
const findTags = (tag) => {
    return document.querySelector(`#${tag}`);
};
const $head = findTags("listOfAutors");
const $autorInfo = findTags("autorInfo");
var AutorsRequest;
(function (AutorsRequest) {
    AutorsRequest["autors"] = "https://jsonplaceholder.typicode.com/users";
    AutorsRequest["posts"] = "https://jsonplaceholder.typicode.com/posts";
})(AutorsRequest || (AutorsRequest = {}));
const loadData = (url) => __awaiter(this, void 0, void 0, function* () {
    try {
        let response = yield fetch(url);
        let data = yield response.json();
        if (url === AutorsRequest.autors)
            state.autors = data;
        if (url === AutorsRequest.posts)
            state.posts = data;
        console.log(state);
    }
    catch (_a) {
        console.log("no data");
    }
});
loadData(AutorsRequest.autors).then(() => renderAutorList(state.autors));
const renderAutorList = (arr) => {
    let htmlDiv;
    arr.forEach((el) => {
        htmlDiv = document.createElement("h3");
        htmlDiv.setAttribute("id", el.id);
        htmlDiv.append(el.name);
        $head.append(htmlDiv);
    });
};
document.body.addEventListener("click", (e) => {
    if (typeof +e.target.id === "number" && +e.target.id > 0) {
        renderAutorInfo(+e.target.id);
        currentUserIdforShowPosts = +e.target.id;
    }
    if (e.target.id === "buttonShowPosts") {
        state.posts[0] !== null
            ? renderPosts()
            : loadData(AutorsRequest.posts).then(() => renderPosts());
        console.log(state);
    }
});
const renderPosts = () => {
    let currentUserPosts = state.posts.reduce((acc, el) => {
        currentUserIdforShowPosts === +el.userId && acc.push(el);
        return acc;
    }, []);
    $autorInfo.innerHTML = "";
    currentUserPosts.forEach((el) => {
        $autorInfo.insertAdjacentHTML("afterbegin", `<div><h4>${el.title}</h4><div>${el.body}</div> </div>`);
    });
};
const renderAutorInfo = (autorId) => {
    const autor = state.autors.reduce((acc, el) => {
        if (autorId === el.id)
            acc = el;
        return acc;
    }, {});
    !$autorInfo.classList.contains("padding") &&
        $autorInfo.classList.add("padding");
    const htmlData = `<h3>Name: ${autor.name}</h3><div>phone: ${autor.phone}</div><div>email: ${autor.email}</div><div>website: ${autor.website}</div><div><button class='button' id="buttonShowPosts">show posts</button></div>`;
    $autorInfo.innerHTML = "";
    $autorInfo.insertAdjacentHTML("afterbegin", htmlData);
};
