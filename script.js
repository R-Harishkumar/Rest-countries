'use strict';



//const btn = document.querySelector('.btn-country');
//const countriesEl = document.querySelector('.countries');
const countriesEl = document.getElementById('countries');

//const countriesEl = document.getElementById('countries')

async function fun() {

  let response = await fetch("https://restcountries.eu/rest/v2/all")
  let countries = await response.json();

  displayCountries(countries);
}

function displayCountries(countries) {

  countries.forEach(country => {

    const CountryEl = document.createElement('div')
    CountryEl.classList.add('card');

    CountryEl.innerHTML = `
    <div>
        <img src="${country.flag}" alt="Germany" />
    </div>
    <div class="card-body">
        <h3 class="country-name">${country.name}</h3>
        <p>
            <strong>Population:</strong>
            ${country.population}
        </p>
        <p class="country-region">
            <strong>Region:</strong>
            ${country.region}
        </p>
        <p>
            <strong>Capital:</strong>
            ${country.capital}
        </p>
    </div>
`;

    countriesEl.appendChild(CountryEl);
  });
}

fun();