import React from "react";

import PokeBall from '../../styles/assets/video/Pokeball.mp4'

import './Entry.css'

const Entry = () => {



  return (
    <section className='entryBody'>
      <video autoPlay loop muted>
        <source src={PokeBall} type='video/mp4' />
      </video>
      <article className='buttonBox'>
      <a href="/home"><button className='enterButton'>Entrar</button></a>
      </article>
    </section>
  )
};

export default Entry;
