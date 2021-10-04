import axios from "axios";
import React, { useState, useEffect } from "react";
import ListaPokemon from "../ListaPokemon";

import { useDebounce } from "use-debounce/lib";


import './home.css'

const Main = () => {

  const [lista, setLista] = useState([])

  const [value, setValue] = useState('')

  const [debounced] = useDebounce(value, 1000);
  
  const [spinner, setSpinner] = useState(false)

  useEffect( async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debounced}`)
      setLista([...lista, res.data])
      console.log('cambio');
    } catch (err) {
      console.log(err)
    }
  }, [debounced])
  
    const showSpin = async () => {
    setTexto(false)
    setSpinner(true)
    await new Promise(resolve => setTimeout(resolve,2000))
    setSpinner(false)
    setTexto(true)
  }  

  return (
    <section className='homeSection'>
        <h3 className='welcomeMsg'>Bienvenido a PokeReact. Busca tu pokemon</h3>
      <article>

        <input type="text" name='input' onChange={(e) => setValue(e.target.value)} />
      </article>
      <article>
        <ListaPokemon data={lista} />
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
