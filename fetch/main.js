async function logJSONData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Network response was not OK. Status Code: ${response.status}`);
    }
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (err) {
    console.error(err);
  }
}
logJSONData();

async function logPokeData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1500');
    if (!response.ok) {
      throw new Error(`Network response was not OK. Status Code: ${response.status}`);
    }
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (err) {
    console.error(err);
  }
}
logPokeData();
