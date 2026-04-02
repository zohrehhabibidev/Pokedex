// template strings / HTML builders

function createPokemonCard(pok) {
  return `
    <div class="pokemonCard">
      <h3 class="pokemonTitle">${pok.name.toUpperCase()}</h3>
      <img src="${pok.imageUrl}" alt="${pok.name}">
      <span class="pokemonUrl">${pok.url}</span>
    </div>
  `;
}
