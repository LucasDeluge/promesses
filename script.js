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
        img.src = `${country.flags.png}`;
        img.classList.add("rounded");
        img.style = "border: 1px solid black; width: 10vw";
        const p = document.createElement('p');
        p.classList.add("mb-2", "fs-2", "fw-bold");
        const p2 = document.createElement('p');
        p2.classList.add('mt-2')
        const p3 = document.createElement('p');
        p3.classList.add("mx-auto");
        p3.style = "border: 1px solid black; width: 10vw"
        let lstLng = [];
        for (lang in country.languages) {
            lstLng.push(country.languages[lang]);
        }
        let lstCur = [];
        for (currencie in country.currencies) {
            lstCur.push(country.currencies[currencie]);
        }
        const p4 = document.createElement('p');
        lstCur.forEach((cur) => {
            if (country.capital) {
                p.innerHTML = `${country.name.common}`;
                p2.innerHTML = `Capitale : ${country.capital[0]}  <br/>  Habitants : ${country.population} <br/> Nom en francais : ${country.translations.fra.official}
                <br/> Superficie : ${country.area} km² <br/> Langues : ${lstLng.join(", ")} <br/> Monnaie : 
                ${cur["name"]} <br/> Symbole : ${cur["symbol"]}`;
            }
            else {
                p.textContent = `${country.name.common} - Pas de capitale`
            }
        });
        result.appendChild(p);
        result.appendChild(img);
        result.appendChild(p2);
        result.appendChild(p4);
        result.appendChild(p3);
        console.log(country);
    });
}
