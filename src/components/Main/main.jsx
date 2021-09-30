import axios from "axios";
import React, { useState } from "react";
import ListaPokemon from "../ListaPokemon";

const Main = () => {

  const [lista, setLista] = useState([])



  const handdleSubmit =  async (event) => {
    event.preventDefault();
    let input = event.target.elements.input.value
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    setLista([...lista, res.data])
  }

  return (
    <section>
      <article>
        <form onSubmit={handdleSubmit}>
          <input type="text" name='input' />
          <button>Enviar</button>
        </form>
      </article>
      <article>
        <ListaPokemon  data={lista}/>
      </article>
    </section>
  )
};

export default Main;
