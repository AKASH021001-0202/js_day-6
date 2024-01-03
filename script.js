// XLR HTTP Request configuration
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const countries = JSON.parse(xhr.responseText);

    // 1. Get all the countries from Asia continent/region using the Filter function
    const asiaCountries = countries.filter(
      (country) => country.region === "Asia"
    );
    console.log("Countries in Asia:", asiaCountries);

    // 2. Get all the countries with a population of less than 2 lakhs using the Filter function
    const lowPopulationCountries = countries.filter(
      (country) => country.population < 200000
    );
    console.log(
      "Countries with population less than 2 lakhs:",
      lowPopulationCountries
    );

    // 3. Print the details (name, capital, flag) using the forEach function
    console.log("details name, capital, flag");
    countries.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log(
        "Capital:",
        Array.isArray(country.capital) && country.capital.length > 0
          ? country.capital[0]
          : "N/A"
      );
      console.log("Flag:", country.flags.svg);
      console.log("----------------------");
    });

    // 4. Print the total population of countries using the reduce function
    const totalPopulation = countries.reduce(
      (acc, country) => acc + country.population,
      0
    );
    console.log("Total Population:", totalPopulation);

    // 5. Print the country that uses US dollars as currency
    const usDollarCountry = countries.find(
      (country) => country.currencies && country.currencies.USD
    );
    console.log(
      "Country using US dollars:",
      usDollarCountry ? usDollarCountry.name.common : "Not found"
    );
  }
};
