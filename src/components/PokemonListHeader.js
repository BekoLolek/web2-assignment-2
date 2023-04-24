import React from 'react';
import '../styles/pokemonListHeader.css'

function PokemonListHeader({ goToNextPage, goToPrevPage }) {
    console.log("Rendering PokemonListHeader...");
  return (
    <header className="pokemon-list-header">
      <button onClick={goToPrevPage}>Previous</button>
      <h2>PokeDex</h2>
      <button onClick={goToNextPage}>Next</button>
    </header>
  );
}

export default PokemonListHeader;
