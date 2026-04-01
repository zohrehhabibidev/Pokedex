// template strings / HTML builders

function createPokemonCard(pok) {
  return `
    <div class="pokemonCard">
      <h3 class="pokemonTitle">${pok.name}</h3>
      <span class="pokemonUrl">${pok.url}</span>
    </div>
  `;
}
