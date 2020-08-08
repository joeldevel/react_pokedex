import React, {useState, useEffect} from 'react';
import './pokemon.css';

function Pokemon( {pokemon}) {
 const index = pokemon.url[pokemon.url.length-2];
  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name"
        // style={{`background-image: url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png);`}}
        >{pokemon.name}</h2>
      <img  className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}/>
    </div>
  )
}

export default Pokemon
