class Storage {
  constructor() {
    this.city;
    this.state;
    this.country;
    this.units;
    this.defaultCity = "Buenos Aires";
    this.defaultState = "";
    this.defaultCountry = "AR";
    this.defaultUnits = "metric";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("state") === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem("state");
    }

    if (localStorage.getItem("country") === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem("country");
    }

    if (localStorage.getItem("units") === null) {
      this.units = this.defaultUnits;
    } else {
      this.units = localStorage.getItem("units");
    }

    return {
      city: this.city,
      state: this.state,
      country: this.country,
      units: this.units
    };
  }

  setLocationData(city, state, country, units) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("country", country);
    localStorage.setItem("units", units);
  }
}
