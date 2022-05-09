const getCountries = async () => {
    const url = await fetch("https://restcountries.com/v3.1/all")
    const res = await url.json();
    console.log(res);
    res.forEach((country) => {
        const p = document.createElement('p');
        const img = document.createElement('img')
        if (country.capital) {
            p.textContent = `${country.name.common} - ${country.capital[0]} - ${country.population} - ${country.translations.fra.official}`;
            img.src = `${country.flags.png}`
        } else {
            p.textContent = `${country.name.common} - Pas de capitale`;
        }
        document.querySelector('body').appendChild(p);
        document.querySelector('body').appendChild(img);
        console.log(country);
    });
}

getCountries()