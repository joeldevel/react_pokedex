import React, {useState, useEffect} from 'react';
import './app.css';
import Pokemon from './Pokemon';
import Header from './Header';

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect( ()=> {
    const getPokemons = async () => {
      const url =
      `https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`;
      try {
        const res = await fetch( url );
        const data = await res.json();
        // console.log( data.results );
        setPokemons( data.results );
        // console.log( pokemons )
      } catch (err) {
        console.error(err)
      }
    }
    getPokemons();
  },[]);
  return (
    <>
    <Header/>
    <div>
       {pokemons.map( pokemon=><Pokemon key={pokemon.name} pokemon={pokemon}/>)}
    </div>
    </>
  )
}

export default App;
