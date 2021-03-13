let select = document.querySelector('#sel');
let inputAdd = document.querySelector('#addT');
let buttonSelect = document.querySelector('#butSel');
let selectTypeVideo;
buttonSelect.addEventListener('click', function () {
    if (select.options.selectedIndex == 0) {
        selectTypeVideo = 'movie';
    } else if (select.options.selectedIndex == 1) {
        selectTypeVideo = 'series';
    } else if (select.options.selectedIndex == 2) {
        selectTypeVideo = 'episod';
    };
    let mainRemove = document.querySelector('main');
    mainRemove.innerHTML = '';

    // 'http://www.omdbapi.com/?apikey=14ec9722&s=war&t=movie&4'
    // Чтоб выводил 10 результатов -'s' вместо 't'

    let url = `http://www.omdbapi.com/?apikey=14ec9722&s=${inputAdd.value}&type=${selectTypeVideo}&4`;
    let data = fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.Search) {
                data['Search'].forEach(el => {

                    let divV = document.createElement('div');
                    divV.classList.add('grid');
                    let imgV = document.createElement('img');
                    imgV.src = el.Poster;
                    imgV.classList.add('gridItem')
                    let typeV = document.createElement('h5');
                    typeV.textContent = el.Type

                    let titleV = document.createElement('h4');
                    titleV.textContent = el.Title;

                    let yearV = document.createElement('h5');
                    yearV.textContent = el.Year
                    let buttonV = document.createElement('button');
                    buttonV.textContent = 'Details';
                    // buttonV.setAttribute('id', el.imdbID)
                    divV.append(imgV, typeV, titleV, yearV, buttonV)
                    let main = document.querySelector('main').append(divV);

                    buttonV.addEventListener('click', function () {
                        let footerRemove = document.querySelector('footer');

                        footerRemove.innerHTML = '';
                        creatEllInfo(el.imdbID)
                    })
                });
            } else {
                let divNotFound = document.createElement('h2');
                divNotFound.textContent = 'Sorry, video not found :( ';
                document.querySelector('main').append(divNotFound);
            }
        })
        .catch(err => {
            let errMessage = document.createElement('h1');
            errMessage.textContent = 'Error: server not found! '
            let main = document.querySelector('main');
            main.append(errMessage);

        })
        .finally(() => {
            console.log('finally');
        })
});

function creatEllInfo(items) {

    let url = `http://www.omdbapi.com/?apikey=14ec9722&i=${items}`;
    let data = fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            {
                if (data) {
                    let footer = document.querySelector('footer');
                    let imgDetails = document.createElement('img');
                    imgDetails.src = data.Poster;
                    let divDetails = document.createElement('div');
                    let titleDetails = document.createElement('h3');
                    titleDetails.textContent = data.Title;

                    let relised = document.createElement('h4');
                    relised.textContent = data.Released;

                    let genre = document.createElement('h4');
                    genre.textContent = data.Genre;

                    let country = document.createElement('h4');
                    country.textContent = data.Country;

                    let director = document.createElement('h4');
                    director.textContent = data.Director;

                    let writer = document.createElement('h4');
                    writer.textContent = data.Writer;

                    let actors = document.createElement('h5');
                    actors.textContent = data.Actors;

                    let awards = document.createElement('h4');
                    awards.textContent = data.Awards;

                    divDetails.style.width = '600px';
                    divDetails.append(titleDetails, relised, genre, country, director, writer, actors, awards)
                    footer.append(imgDetails, divDetails);
                }
            }
        })
}
let mainTag = document.querySelector('main');