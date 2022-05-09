const getCountries = async () => {
    const url = await fetch("https://restcountries.com/v3.1/all")
    const res = await url.json();
    console.log(res);
    res.forEach((country) => {
        const p = document.createElement('p');
        if (country.capital) {
            p.textContent = `${country.name.common} - ${country.capital[0]}`;
        } else {
            p.textContent = `${country.name.common} - Pas de capitale`;
        }
        document.querySelector('body').appendChild(p);
        console.log(country);
    });
}

getCountries()