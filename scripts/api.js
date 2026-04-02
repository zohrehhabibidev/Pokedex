// ===============================
// API LOGIC
// ===============================

// Fetch Pokémon LIST (only name + url)
async function getPokemonsData() {

  // Build dynamic URL for pagination (limit + offset)
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`;

  // Set loading state → prevents multiple requests
  isLoading = true;

  try {
    // Step 1: Request data from API
    const response = await fetch(url);

    // Step 2: Convert response to JSON
    const pokemonJsonData = await response.json();

    // Step 3: Store ONLY basic data (name + url) into state
    loadedPokemons = pokemonJsonData.results;
    console.log(loadedPokemons);

  } catch (error) {
    // Handle errors (network, server, etc.)
    console.warn(error);
  }
  // Reset loading state after request is done
  isLoading = false;

  // With await:
  // the code WAITS until all images are fetched
  await getPokemonsImage();
}
getPokemonsData();


// ===============================
// FETCH DETAIL DATA (image, etc.)
// ===============================

async function getPokemonsImage() {

  // Loop through all loaded Pokémon
  for (let index = 0; index < loadedPokemons.length; index++) {

    // Fetch detail endpoint for each Pokémon
    const response = await fetch(loadedPokemons[index].url);
    const pokemonJsonImg = await response.json();

    // Extract image URL and attach it to the SAME Pokémon object
    loadedPokemons[index].imageUrl = pokemonJsonImg.sprites.other["official-artwork"].front_default;
    //Pokemon type is a seprate array
    //     "types": [
    // {
    // "slot": 1,
    // "type": {
    // "name": "grass",
    // "url": "https://pokeapi.co/api/v2/type/12/"
    // }
    // },
    // {
    // "slot": 2,
    // "type": {
    // "name": "poison",
    // "url": "https://pokeapi.co/api/v2/type/4/"
    // }
    // }
    // ],

    loadedPokemons[index].type = pokemonJsonImg.types[0].type.name;
  }
  renderPokemonCards();
}


async function loadMorePokemon() {
  currentOffset += limit;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`;

  isLoading = true;

  try {
    const responseUrl = await fetch(url);
    const pokemonJsonNewData = await responseUrl.json();//results

    for (let i = 0; i < pokemonJsonNewData.results.length; i++) {
      loadedPokemons.push(pokemonJsonNewData.results[i]);
    }
    console.log(loadedPokemons);

  } catch (error) {
    console.warn(error);
  }

  isLoading = false;
  await getPokemonsImage();
}
