async function main(param) {
  const api = await getApi();
  htmlGen(api);
}

main();
