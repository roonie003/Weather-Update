class Weather{
    constructor(name){
        this.apiKey = '2173e851d28bcfeaf9f47de06928627e';
        this.name = name;
        
    }
   //fetch weather from API

   async getWeather (){
       const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=${this.apiKey}`);
       const responseData = await response.json();

       return responseData.weather.main;
   
    }

    //change weather location

    changeLocation(name){
        this.name = name;
        
    }
}