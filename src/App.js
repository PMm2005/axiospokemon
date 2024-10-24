import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const fetchPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
    const pokemonNames = response.data.results.map((pokemon) => pokemon.name);
    setPokemonList(pokemonNames);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={fetchPokemon}>
        Fetch Pokémon
      </button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
