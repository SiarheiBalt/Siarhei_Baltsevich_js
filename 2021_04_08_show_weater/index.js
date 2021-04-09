const [header, input, button] = findDiv('#h1', '#inp', '#btn');
function findDiv(...arr) {
    return arr.reduce((acc, el) => [...acc, document.querySelector(el)], [])
};

button.addEventListener('click', load)
document.querySelector('#wr').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') load()
})

async function load() {
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=936c7b67f815746ef93d514f2b8c3b89`;

    let response = await fetch(url)
    try {
        let data = await response.json()
        let weather = {
            temp: Math.round(data.main.temp - 273.15),
            country: data.sys.country,
        }
        header.innerHTML = `${weather.temp} °C, ${weather.country}`
    } catch {
        header.innerHTML = 'Please, enter correct city.'
    }
}