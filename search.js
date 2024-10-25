function searchCountry(param) {
  const searchInputElement = document.querySelector(".search");
  searchInputElement.addEventListener("input", (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredCountries = param.filter((value) =>
      value.country.toLowerCase().includes(inputValue)
    );
    htmlGen(filteredCountries);
  });
}
