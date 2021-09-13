//init weather object

const weather = new Weather('London');

//init UI
 const ui = new UI();

//get weather on dom load

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}