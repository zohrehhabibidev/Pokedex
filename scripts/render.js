// render logic
let PokemonCardContainer = document.getElementById('pokemonGrid');
function renderPokemonCard() {
  for (let index = 0; index < loadedPokemons.length; index++) {
    PokemonCardContainer.innerHTML += createPokemonCard(loadedPokemons[index]);
  }
}
