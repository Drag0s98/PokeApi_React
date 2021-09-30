import React, { useState, useEffect, useRef } from "react";
import axios from 'axios'

const Card = () => {

  //Declaro los estados 
  const [input, setInput] = useState([])
  const [pokemons, setPokemons] = useState([])

  const inp = useRef('')

  useEffect(() => {
    //Hago una precarga de la api
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=200`)
  })

  const handdleSubmit = async (event) => {
    event.preventDefault();

    if (input > 0) {
      setPokemons('') //Reseteo el estado 
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${input}`)
      const data = res.data
      setPokemons(data)
      console.log(pokemons);
    } else {
      setPokemons('') //Reseteo el estado
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      const data = res.data
      setPokemons(data) 
      console.log(pokemons);
    }
  }
  const handdleChange = () => {
    setInput(inp.current.value)
  }

  return (
    <section >
      <form onSubmit={handdleSubmit}>
        <input type="text" onChange={handdleChange} ref={inp} />
        <button>Search</button>
      </form>
      <br />
      <p>{input}</p>
    </section>
  )
};

export default Card;
