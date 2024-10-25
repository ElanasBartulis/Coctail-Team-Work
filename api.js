async function getApi() {
  const promise = await fetch("https://restcountries.com/v3.1/all");
  const response = await promise.json();
  return response;
}
