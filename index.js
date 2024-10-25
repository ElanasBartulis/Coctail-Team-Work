async function main() {
  const api = await getApi();
  htmlGen(api);
  searchCountry(api);
}

main();
