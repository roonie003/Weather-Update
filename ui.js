class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather){
        this.location.textContent = weather.display.name;
        this.desc.textContent = weather.weather.description;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute('src', weather.icon );
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLiketextContent = `Feels Like: ${weather.main.feels_like}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind: ${weather.main.wind}`;

    }
}