function htmlGen(param) {
  console.log(param);
  let html = "";
  for (let value of param) {
    html += `
          <div class="flag">
              <img src=${value.flagImg} alt="Salies Veleva">
          </div>
          <div class="country-info">
              <ul>
                  <li>Country: ${value.country}</li>
                  <li>Population: ${value.population}</li>
                  <li>Currency: ${value.currency}</li>
                  <li>Capital: ${value.capital}</li>
                  <li>Time: ${value.time}</li>
                  <li>Language: ${value.language}</li>
              </ul>
          </div>
      `;
  }

  const mainContentElement = document.querySelector(".main-content");
  mainContentElement.innerHTML = html;
}
