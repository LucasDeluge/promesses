let result = document.querySelector("#result")

document.querySelector('#searchCountry').onsubmit = function (e) {
    document.querySelector("#result").innerHTML = ""
    e.preventDefault();
    actionForm(document.querySelector('#country').value);
}

const actionForm = async (name) => {
    let url = `https://restcountries.com/v3.1/name/${name}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let lstLng = [];
    for (lang in country.languages) {
        lstLng.push(country.languages[lang]);
    }

    data.forEach((country) => {
        const img = document.createElement('img');
        const p = document.createElement('p');
        if (country.capital) {
            img.src = `${country.flags.png}`;
            p.innerHTML = `${country.name.common} - ${country.capital[0]}  <br/>  habitant: ${country.population} <br/> Nom en francais: ${country.translations.fra.official}
  <br/> Superficie: ${country.area} km²`;
        }
        else {
            p.textContent = `${country.name.common} - Pas de capitale`
        }
        result.appendChild(p);
        result.appendChild(img)
        console.log(country);
    });
}

actionForm()
