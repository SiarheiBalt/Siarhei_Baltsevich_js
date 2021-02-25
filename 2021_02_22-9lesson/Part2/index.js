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
//    console.log(selectTypeVideo);
    // 'http://www.omdbapi.com/?apikey=14ec9722&s=war&t=movie&4'
    // Чтоб выводил 10 результатов -'s' вместо 't'
    $.ajax( `http://www.omdbapi.com/?apikey=14ec9722&s=${inputAdd.value}&t=${selectTypeVideo}&4`, {
        success: function (data) {
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
                if ( footerRemove.innerHTML = '') {
                    creatEllInfo(el.imdbID)
                } else {
                    footerRemove.innerHTML = '';
                    creatEllInfo(el.imdbID)
                }
            })
        });
        }
    }); 
});

function creatEllInfo(items) {
    $.ajax( `http://www.omdbapi.com/?apikey=14ec9722&i=${items}`, {
        success: function (data) {
            let footer = document.querySelector('footer');
            let imgDetails = document.createElement('img');
            imgDetails.src = data.Poster;
            let divDetails = document.createElement('div');
            let titleDetails = document.createElement('h4');
            titleDetails.textContent = data.Title;
            
            divDetails.append(titleDetails, data.Released, data.Genre, data.Country, data.Director, data.Writer, data.Actors, data.Awards )

            footer.append(imgDetails, divDetails);
            }
        })
}