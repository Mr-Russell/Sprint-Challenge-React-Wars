import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res =>{
      console.log(res)
      setCharacters(res.data.results)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(item =>{
          return <Character character={item}/>
        })
      }
    </div>
  );
}

export default App;
