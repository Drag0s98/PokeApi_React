import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";

import './Details.scss'

const Details = () => {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let id = query.get("id")

  const [myPoke, setmyPoke] = useState([])

  useEffect(() => {
    console.log('entro');
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setmyPoke([res.data]))
  }, [id])

  return (
    <section>
      <article>
        {myPoke.map((param) => {
          console.log(param);
          return (
            <figure class={`card card--${param.types[0].type.name}`}>
              <div class="card__image-container">
                <img src={param.sprites.other['official-artwork'].front_default} alt={param.name} class="card__image" />
              </div>
              <figcaption class="card__caption">
                <h1 class="card__name">{param.name}</h1>
                <table class="card__stats">
                  <tbody><tr>
                    <th>HP</th>
                    <td>{param.stats[0].base_stat}</td>
                  </tr>
                    <tr>
                      <th>Attack</th>
                      <td>{param.stats[1].base_stat}</td>
                    </tr>

                    <tr>
                      <th>Defense</th>
                      <td>{param.stats[2].base_stat}</td>
                    </tr>

                    <tr>
                      <th>Special Attack</th>
                      <td>{param.stats[3].base_stat}</td>
                    </tr>
                    <tr>
                      <th>Special Defense</th>
                      <td>{param.stats[4].base_stat}</td>
                    </tr>
                    <tr>
                      <th>Speed</th>
                      <td>{param.stats[5].base_stat}</td>
                    </tr>
                  </tbody></table>

                <div class="card__abilities">
                  <h4 class="card__ability">
                    <span class="card__label">Ability</span>
                    {param.abilities[0].ability.name}
                  </h4>
                  <h4 class="card__ability">
                    <span class="card__label">Hidden Ability</span>
                    {param.abilities[1].ability.name}
                  </h4>
                </div>
              </figcaption>
            </figure>
          )
        })}
      </article>
    </section>
  );
};

export default Details;
