import axios from "axios";
import React, { useState, useEffect } from "react";
import ListaPokemon from "../ListaPokemon";

import { useDebounce } from "use-debounce/lib";


import './home.css'

const Main = () => {

  const [lista, setLista] = useState([])
  const [value, setValue] = useState('')

  const [debounced] = useDebounce(value, 1000);

  useEffect( async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debounced}`)
      setLista([...lista, res.data])
      console.log('cambio');
    } catch (err) {
      console.log(err)
    }
  }, [debounced])

  return (
    <section>
      <article>
        <input type="text" name='input' onChange={(e) => setValue(e.target.value)} />
      </article>
      <article>
        <ListaPokemon data={lista} />
      </article>
    </section>
  )
};

export default Main;
