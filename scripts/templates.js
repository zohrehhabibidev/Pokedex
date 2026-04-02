// template strings / HTML builders
//${pok.type} For the background class
function createPokemonCard(pok) {
  return `
    <div class="pokemonCard ${pok.type}">
      <h3 class="pokemonTitle">${pok.name.toUpperCase()}</h3>
      <img src="${pok.imageUrl}" alt="${pok.name}">
      <span class="pokemonType">${pok.type}</span>
      <span class="pokemonUrl" style="display:none">${pok.url}</span>
    </div>
  `;
}
