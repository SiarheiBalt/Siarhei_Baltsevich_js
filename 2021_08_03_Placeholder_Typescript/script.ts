interface State {
  autors: Array<any>;
  posts: Array<any>;
}

let state: State = {
  autors: [null],
  posts: [null],
};

let currentUserIdforShowPosts: number;

const findTags = (tag: string): HTMLElement => {
  return document.querySelector(`#${tag}`);
};
const $head: HTMLElement = findTags("listOfAutors");
const $autorInfo: HTMLElement = findTags("autorInfo");

enum AutorsRequest {
  autors = "https://jsonplaceholder.typicode.com/users",
  posts = "https://jsonplaceholder.typicode.com/posts",
}

const loadData = async (url: AutorsRequest): Promise<void> => {
  try {
    let response = await fetch(url);
    let data: Array<object> = await response.json();
    if (url === AutorsRequest.autors) state.autors = data;
    if (url === AutorsRequest.posts) state.posts = data;
    console.log(state);
  } catch {
    console.log("no data");
  }
};

loadData(AutorsRequest.autors).then(() => renderAutorList(state.autors));
const renderAutorList = (arr: Array<any>): void => {
  let htmlDiv: HTMLElement;
  arr.forEach((el) => {
    htmlDiv = document.createElement("h3");
    htmlDiv.setAttribute("id", el.id);
    htmlDiv.append(el.name);
    $head.append(htmlDiv);
  });
};
document.body.addEventListener("click", (e: any): void => {
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

const renderPosts = (): void => {
  let currentUserPosts = state.posts.reduce((acc, el) => {
    currentUserIdforShowPosts === +el.userId && acc.push(el);
    return acc;
  }, []);

  $autorInfo.innerHTML = "";
  currentUserPosts.forEach((el) => {
    $autorInfo.insertAdjacentHTML(
      "afterbegin",
      `<div><h4>${el.title}</h4><div>${el.body}</div> </div>`
    );
  });
};

const renderAutorInfo = (autorId: number): void => {
  const autor: any = state.autors.reduce((acc, el) => {
    if (autorId === el.id) acc = el;
    return acc;
  }, {});

  !$autorInfo.classList.contains("padding") &&
    $autorInfo.classList.add("padding");

  const htmlData: string = `<h3>Name: ${autor.name}</h3><div>phone: ${autor.phone}</div><div>email: ${autor.email}</div><div>website: ${autor.website}</div><div><button class='button' id="buttonShowPosts">show posts</button></div>`;
  $autorInfo.innerHTML = "";
  $autorInfo.insertAdjacentHTML("afterbegin", htmlData);
};
