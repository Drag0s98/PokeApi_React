import React, { useEffect, useState } from "react";

import Spinner from '../Spinner'
import fetchHock from '../../hooks/feet-hook'


const Home = () => {

  const [pokemons, setPokemons] = useState([])

  const {result } = fetchHock(`https://pokeapi.co/api/v2/pokemon`)
  
  useEffect(() => {
    setPokemons(result.results)
  }, [result])

  return (
    <section>
      <ul>
        {
          pokemons!==undefined?pokemons.map((param, i )=>{
            return <li key={i}>{param.name}</li>
          }):<Spinner/>
        }
      </ul>
    </section>
  )
};

export default Home;
