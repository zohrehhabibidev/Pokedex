//API logic
// fetch functions
async function getPokemonsData() {
  //Dynamic URL for load more
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`;

  try {
    //Go get data from the API and Wait for the server to respond
    const response = await fetch(url);
    //Convert answers into usable data
    const pokemonJsonData = await response.json();

    //Just take the list of Pokémon and save it into state.
    loadedPokemons = pokemonJsonData.results;
    console.log(loadedPokemons);
  } catch (error) {
    console.warn(error);
  }
}

getPokemonsData();
