import React, { useEffect, useState } from "react";

import Spinner from '../Spinner'
import fetchHock from '../../hooks/feet-hook'
import './Home.css'


const Home = () => {

  const [pokemons, setPokemons] = useState([])

  const { result } = fetchHock(`https://pokeapi.co/api/v2/pokemon`)

  useEffect(() => {
    setPokemons(result.results)
  }, [result])

  return (
    <section className='homeBox'>
      <article className='welcomeBox'>
        <h4 >Here you can found some pokemons to search in the browser</h4>
      </article>
      <article>
        <ul className='boxList'>
          {
            pokemons !== undefined ? pokemons.map((param, i) => {
              return <li className='pokeNames' key={i}>{param.name}</li>
            }) : <Spinner />
          }
        </ul>x`
      </article>
    </section>
  )
};

export default Home;
