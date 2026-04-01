// render logic
let PokemonCardContainer = document.getElementById('pokemonGrid');
function renderPokemonCards() {
  // Create an empty string to collect all card HTML, then render everything at once
  let cardsCollect = "";
  for (let index = 0; index < loadedPokemons.length; index++) {
    cardsCollect += createPokemonCard(loadedPokemons[index]);
  }
  PokemonCardContainer.innerHTML = cardsCollect;
}
