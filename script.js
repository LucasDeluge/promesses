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

    data.forEach((country) => {
        const img = document.createElement('img');
        const p = document.createElement('p');
        p.className = 'nameCountry';
        const p2 = document.createElement('p');
        let lstLng = [];
        for (lang in country.languages) {
            lstLng.push(country.languages[lang]);
        }
        if (country.capital) {
            p.innerHTML = `${country.name.common}`;
            p2.innerHTML = `<img src="${country.flags.png}"></img> <br/> Capitale : ${country.capital[0]}  <br/>  Habitants : ${country.population} <br/> Nom en francais : ${country.translations.fra.official}
            <br/> Superficie : ${country.area} km² <br/> Langues : ${lstLng.join(", ")}`;
        }
        else {
            p.textContent = `${country.name.common} - Pas de capitale`
        }
        result.appendChild(p);
        result.appendChild(p2);
        result.appendChild(img)
        console.log(country);
    });
}
