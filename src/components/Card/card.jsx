import React from "react";
import { Link } from "react-router-dom";
import './card.css'

const Card = (props) => {
  console.log(props);
  return (
    <>
      <figure class={`card card--${props.data.types[0].type.name}`}>
        <div class="card__image-container">
          <img src={props.data.sprites.other['official-artwork'].front_default} alt={props.data.name} class="card__image" />
        </div>
        <figcaption class="card__caption">
          <Link to={`/pokemon/name=${props.data.name}
            ?id=${props.data.id}
            &img=${props.data.sprites.other['official-artwork'].front_default}
            &type=${props.data.types[0].type.name}`} className='linkDetails'>
            <h1 class="card__name">{props.data.name}</h1>
          </Link>
          <table class="card__stats">
            <tbody><tr>
              <th>HP</th>
              <td>{props.data.stats[0].base_stat} </td>
            </tr>
              <tr>
                <th>Attack</th>
                <td>{props.data.stats[1].base_stat === undefined? '':props.data.stats[1].base_stat}</td>
              </tr>

              <tr>
                <th>Defense</th>
                <td>{props.data.stats[2].base_stat === undefined? '':props.data.stats[2].base_stat}</td>
              </tr>

              <tr>
                <th>Special Attack</th>
                <td>{props.data.stats[3].base_stat === undefined? '':props.data.stats[3].base_stat}</td>
              </tr>
              <tr>
                <th>Special Defense</th>
                <td>{props.data.stats[4].base_stat === undefined? '':props.data.stats[4].base_stat}</td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>{props.data.stats[5].base_stat === undefined? '':props.data.stats[5].base_stat}</td>
              </tr>
            </tbody></table>

          <div class="card__abilities">
            <h4 class="card__ability">
              <span class="card__label">Ability</span>
              {props.data.abilities[0].ability.name}
            </h4>
            <h4 class="card__ability">
              <span class="card__label">Hidden Ability</span>
              {props.data.abilities[1].ability.name}
            </h4>
          </div>
        </figcaption>
      </figure>
    </>
  )
};

export default Card;
