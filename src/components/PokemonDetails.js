import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/pokemonDetails.css'

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const getPokemonDetails = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, sprites, height, weight, abilities } = response.data;

    const pokemonDetails = {
      name,
      sprites,
      height,
      weight,
      abilities: abilities.map((ability) => ability.ability.name).join(", "),
    };

    setPokemon(pokemonDetails);
  };

  useEffect(() => {
    getPokemonDetails();
  }, [id]);

  return (
    <div className="container">
    <div className="pokemon-details">
      <h1>{pokemon.name}</h1>
      {pokemon.sprites && <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />}

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Abilities: {pokemon.abilities}</p>
    </div>
    <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default PokemonDetails;
