export default function PokemonList({ pokedex }) {
  const pokemonList = pokedex.map((pokemon) =>
    <li key={pokemon.number}>{pokemon.name}</li>
  );
  return <ul>{pokemonList}</ul>;
}
