function htmlGen(param) {
  let html = "";
  html += `
        <div class="flag">
            <img src="https://flagcdn.com/gs.svg" alt="Salies Veleva">
        </div>
        <div class="country-info">
            <ul>
                <li>Country: {England}</li>
                <li>Population: {11213214}</li>
                <li>Currency: {777$}</li>
                <li>Capital: {London}</li>
                <li>Time: {20:00}</li>
                <li>Language: {ENGLISH}</li>
            </ul>
        </div>
    `;

  const mainContentElement = document.querySelector(".main-content");
  mainContentElement.innerHTML = html;
}
