async function getApi() {
  const promise = await fetch("https://restcountries.com/v3.1/all");
  const response = await promise.json();

  const newObject = response.map((value) => {
    return {
      name: value.name.common,
      population: value.population,
      currency: value.currencies
        ? value.currencies[Object.keys(value.currencies)[0]]?.name
        : "Unknown",
      currencySymbol: value.currencies
        ? value.currencies[Object.keys(value.currencies)[0]]?.symbol
        : "Unknown",
      capital: value.capital?.[0] || "No Capital",
      time: "12:00",
      language: value.languages
        ? Object.values(value.languages).toString()
        : "Unknown",
      flagImg: value.flags.svg,
    };
  });

  return newObject;
}
