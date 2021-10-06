import React from "react";

import './card.css'

const Card = (props) => {

  const bgColor = () => {
    if (props.data.types[0].type.name === 'electric' ) {
      return 'electric'
    }
    if (props.data.types[0].type.name === 'fire') {
      return 'fire'
    }
    if (props.data.types[0].type.name === 'grass') {
      return 'grass'
    }
    if (props.data.types[0].type.name === 'water') {
      return 'wated'
    }
    if (props.data.types[0].type.name === 'poison' ) {
      return 'poison'
    }
  }
  console.log(props);
  return (
    <>
      <div className='card'>
        <div className={bgColor()}>
          <div className='cardHeader'>
            <h4 className='pokemonName'>{props.data.name} </h4>
            <img src={props.data.sprites.front_default } alt={props.data.name } />
            <h2 className='pokemonType'>Type || {props.data.types[0].type.name }</h2>
          </div>
          <div className='cardBody'>
            <h4>Hability 1</h4>
            <p>{props.data.abilities[0].ability.name }</p>
            <h4>Hability 2</h4>
            <p>{props.data.abilities[1].ability.name}</p>
          </div>
          <div className='cardFooter'>
            <p>{props.data.id }</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Card;
