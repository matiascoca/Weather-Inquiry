// Init storage
const storage = new Storage();

// Get stored location data
const wheatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(
  wheatherLocation.city,
  wheatherLocation.state,
  wheatherLocation.country,
  wheatherLocation.units
);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  let units = "";
  // let symbol = "";

  if (document.getElementById("optionsRadios1").checked === true) {
    units = "metric";
    // symbol = "˚C";
  } else {
    units = "imperial";
    // symbol = "˚F";
  }

  // Change location
  weather.changeLocation(city, state, country, units);

  // Set location in LS
  storage.setLocationData(city, state, country, units);

  // Get and display Weather
  // getWeather(symbol);
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

// function getWeather(value) {
function getWeather() {
  // will return a promise because getWeather is async and we need to use .then and .catch

  // let symbol = value;

  weather
    .getWeather()
    .then(results => {
      ui.paint(results.weatherData, results.iconUrl, results.symbol);
    })
    .catch(err => console.log(err));
}
