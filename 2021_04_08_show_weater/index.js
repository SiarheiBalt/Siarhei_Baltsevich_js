const [header, input, button] = findDiv('#h1', '#inp', '#btn');
function findDiv(...arr) {
    return arr.reduce((acc, el) => [...acc, document.querySelector(el)], [])
};

button.addEventListener('click', load)

function load(event) {
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=936c7b67f815746ef93d514f2b8c3b89`;

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let weather = {
                temp: Math.round(data.main.temp - 273.15),
                country: data.sys.country,
            }
            return weather;
        })
        .then((data) => {
            header.innerHTML = `${data.temp} celsius, ${data.country}`

        })
        .catch(() => {
            header.innerHTML = 'Please, enter correct city.'
        })
}