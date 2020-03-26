class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    // this.details = document.getElementById("w-details");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.fellsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weatherData, iconUrl, symbol) {
    this.location.textContent = weatherData.name;
    this.desc.textContent = weatherData.weather[0].main;
    this.string.textContent = `${weatherData.main.temp}${symbol}`;
    this.icon.setAttribute("src", iconUrl);
    // this.details.textContent = "Information";
    this.humidity.textContent = `Relative Humidity: ${weatherData.main.humidity}`;
    this.pressure.textContent = `Pressure: ${weatherData.main.pressure}`;
    this.fellsLike.textContent = `Feels Like: ${weatherData.main.feels_like}${symbol}`;
    this.wind.textContent = `Wind: ${weatherData.wind.speed}`;
  }
}
