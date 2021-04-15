
const [input, selector, button, main, footer] = createDiv('input', 'sel', 'button', '#main', 'footer');
function createDiv(...div) {
   return div.reduce((acc, el) => [...acc, document.querySelector(el)], [])
}
document.addEventListener('click', event => {
    let urlInfo = `http://www.omdbapi.com/?apikey=14ec9722&i=${event.target.id}`;
    let urlMovie = `http://www.omdbapi.com/?apikey=14ec9722&s=${input.value}&type=${sel.value}&4`;
    if(event.target.id === 'btn') loadData(urlMovie)
    if(event.target.classList.contains('btnInfo')) loadData(urlInfo);
})
async function loadData(url) {
    try {
    let response = await fetch(url)
    let data = await response.json()
    data.Response === "True" ? Array.isArray(data.Search) ? createObj(data.Search) : createObjInfo(data) : notFound();
    } catch {
        main.insertAdjacentHTML('afterbegin',`<h1 style="grid-column-start: 2;"> No connection, try later.....</h1>`)
    }
}
function createObj(arr) {
    main.innerHTML = '';
    arr.map((el, i) => window['form' + (i + 1)] = new Movie(arr[i]), 0)
}
function createObjInfo(data) {
    footer.innerHTML = '';
    window['info'] = new Info(data)
}
function notFound() {
    main.innerHTML = '';
    main.insertAdjacentHTML('afterbegin',`<h1 style="grid-column-start: 2;"> Movies not found:( Try again!</h1>`)
}
 
class Movie {
    constructor(options) {
        this.$formDiv = document.createElement('div');
        this.title = options.Title;
        this.type = options.Type;
        this.year = options.Year;
        this.poster = options.Poster;
        this.id = options.imdbID
    
        this.addHtml()
    }
    addHtml() {
        const htmlForm = `<img src=${this.poster}><h4>${this.title}</h4>
        <h5>${this.year}</h5><button id=${this.id} class="btnInfo">Info</button>
        <h5>${this.type}</h5>`
        this.$formDiv.classList.add('formDiv')
        this.$formDiv.innerHTML = htmlForm;
        main.append(this.$formDiv)
    }
}
class Info extends Movie {
    constructor(options) {
        super(options)
        this.actors = options.Actors;
        this.plot = options.Plot;
        this.awards = options.Awards;
        
        this.addHtml()
    }
    addHtml() {
        const htmlForm = `<img src=${this.poster}><h5>${this.title}</h5>
        <div>${this.year}<br>${this.awards}<div><h5>${this.actors}</h5><div>${this.plot}</div>`
        this.$formDiv.classList.add('info')
        this.$formDiv.innerHTML = htmlForm;
        footer.append(this.$formDiv)
        
    }
}