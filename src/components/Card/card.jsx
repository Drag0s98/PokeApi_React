import React from "react";

import './card.css'

const Card = (props) => {

  // console.log(props.data[0].name);
  return (
    <>
      <div className='card'>
        <div className='cardHeader'>
          <img src={props.data.sprites.front_default} alt={props.data.name} />
          <h2 className='pokemonType'>Pokemon Type || {props.data.types[0].type.name}</h2>
          <h4 className='pokemonName'>Pokemon || {props.data.name}</h4>
        </div>
        <div className='cardBody'>
          <h4>Habilidad 1</h4>
          <p>{props.data.abilities[0].ability.name}</p>
          <h4>Habilidad 2</h4>
          <p>{props.data.abilities[1].ability.name}</p>
        </div>
        <div className='cardFooter'>
          <p>{props.data.id}</p>
        </div>
      </div>

    </>
  )
};

export default Card;
