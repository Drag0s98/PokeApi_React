import axios from "axios";
import React, { useState } from "react";
import ListaPokemon from "../ListaPokemon";

import './home.css'

const Main = () => {

  const [lista, setLista] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [texto, setTexto] = useState(false)

  const showSpin = async () => {
    setTexto(false)
    setSpinner(true)
    await new Promise(resolve => setTimeout(resolve,2000))
    setSpinner(false)
    setTexto(true)
  }

  const handdleSubmit = async (event) => {
    event.preventDefault();
    let input = event.target.elements.input.value
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    setLista([...lista, res.data])
  }

  return (
    <section className='homeSection'>
        <h3 className='welcomeMsg'>Bienvenido a PokeReact. Busca tu pokemon</h3>
      <article>
        <form onSubmit={handdleSubmit} className='pokeForm'>
          <input type="text" name='input' className='pokeSearch'/>
          <button onClick={showSpin}>Buscar</button>
        </form>
      </article>
      <article className='pokeList'>
        {spinner === true ?
          <div className="stage">
            <div className="poke bounce">
            </div>
          </div> : ''}
          {texto === true? <ListaPokemon data={lista} />:''}
      </article>
    </section>
  )
};

export default Main;
