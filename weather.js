class Weather {
  constructor(city, state, country, units) {
    this.apiKey = "5f1cd43a9f0eaadbc178e4ceefeef0f0";
    this.city = city;
    this.state = state;
    this.country = country;
    this.units = units; // default: kelvin, metric: celcious, imperial: farenheit
  }
  s;
  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&appid=${this.apiKey}&units=${this.units}`
    );

    const weatherData = await response.json();

    const iconData = weatherData.weather[0].icon;

    const icon = await fetch(
      `http://openweathermap.org/img/wn/${iconData}@2x.png`
    );

    const iconUrl = icon.url;

    let symbol = "";

    if (this.units === "metric") {
      symbol = "˚C";
    } else {
      symbol = "˚F";
    }

    return {
      weatherData,
      iconUrl,
      symbol
    };
  }

  // Change weather location
  changeLocation(city, state, country, units) {
    this.city = city;
    this.state = state;
    this.country = country;
    this.units = units;
  }
}
