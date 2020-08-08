import React, {useState, useEffect} from 'react';
import './header.css';



function Header() {

  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState([]);

  const types=[
    { id: 0,
      type:'normal'
    },
    { id: 1,
      type:'fighting'
    },
    { id: 2,
      type:'flying'
    },
    { id: 3,
      type:'poison'
    }
  ];



  return (
    <header className="header">
      <div className="status-container">
        <div className="status-led status-led-red"></div>
        <div className="status-led status-led-green"></div>
        <div className="status-led status-led-yellow"></div>
      </div>
      <div className="types-container">

      </div>
      <h1 className="app-title"></h1>
    </header>
  )
}

export default Header;
