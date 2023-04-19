async function dataFetching() {
  const responce = await fetch("https://dogapi.dog/api/facts");
  const dataMovie = await responce.json();
  return dataMovie;
}
export default dataFetching();
