import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce/lib";

import ListaPokemon from "../ListaPokemon";
import Spinner from "../Spinner";


import './search.css'

const Main = () => {

  const [lista, setLista] = useState([])

  const [value, setValue] = useState(null)

  const [busqueda, setBusqueda] = useState([])

  const [debounced] = useDebounce(value, 3000);

  const [spinner, setSpinner] = useState(false)

  const [texto, setTexto] = useState(false)

  useEffect(() => {
    try {
      setBusqueda([...busqueda, debounced])
      let exist = busqueda.includes(debounced)
      if (exist === false && debounced !== null) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${debounced}`)
          .then(response => setLista([...lista, response.data]))
      } else {
        console.log('El pokemon existe');
      }
    } catch (err) {
    }
  }, [debounced])

  useEffect( () => {
    try {
      if (value.length !== 0) {
        setSpinner(true)
        setTexto(false)
        new Promise(resolve => setTimeout(resolve, 3500))
        setSpinner(false)
        setTexto(true)
      }
    } catch (err) {
    }
  }, [value])

  return (
    <section className='homeSection'>
      <h3 className='welcomeMsg'>Bienvenido a PokeReact. Busca tu pokemon</h3>
      <article className='pokeForm'>
        <input type="text" className='pokeSearch' name='input' onChange={async (e) => {
          setValue(e.target.value)
          await new Promise(resolve => setTimeout(resolve, 4000))
          e.target.value = ''
        }} />
      </article>
      <article className='pokeList'>
        {spinner === true ? <Spinner /> : ''}
        {texto === true ? <ListaPokemon data={lista} /> : ''}
      </article>
    </section>
  )
};

export default Main;

/*
const showSpin = async () => {

      await new Promise(resolve => setTimeout(resolve, 3000))
      setSpinner(false)
      setTexto(true)
  }
*/

/*

<article className='pokeList'>
        {spinner === true ?
          <div className="stage">
            <div className="poke bounce">
            </div>
          </div> : ''}
        {texto === true ? <ListaPokemon data={lista} /> : ''}
      </article>



*/
