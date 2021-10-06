import React, { useContext } from "react";
import { DataContext } from "../../context/pokeData.context";
import './NewPoke.css'


const NewPoke = () => {


  const { setData } = useContext(DataContext)


  const invForm = (event) => {
    event.preventDefault()
    setData([{
      name: event.target.name.value,
      types: [{
        type: {
          name: event.target.type.value
        }
      }],
      sprites: {
        other: {
          ['official-artwork']: {
            front_default: event.target.image.value
          }
        }
      },
      abilities: [{
        ability: {
          name: event.target.habilityOne.value
        }
      },
      {
        ability: {
          name: event.target.habilityTwo.value
        }
      }],
      stats: [
        { base_stat: event.target.hp.value },
        { base_stat: event.target.attack.value },
        { base_stat: event.target.defense.value },
        { base_stat: event.target.special_attack.value },
        { base_stat: event.target.special_defense.value },
        { base_stat: event.target.speed.value },
      ],
      id: Math.floor(Math.random() * (900 - 1000)) + 1000
    }])
    event.target.name.value = ''
    event.target.type.value = ''
    event.target.image.value = ''
    event.target.habilityOne.value = ''
    event.target.habilityTwo.value = ''
    event.target.hp.value = ''
    event.target.attack.value = ''
    event.target.defense.value = ''
    event.target.special_attack.value = ''
    event.target.special_defense.value = ''
    event.target.speed.value = ''
  }

  return (
    <section>
      <article className='formBox'>
        <form onSubmit={invForm}>
          <label>Name of Pokemon</label>
          <input type="text" name="name" />
          <label>Type</label>
          <select name="type" className='selectType'>
            <option value="electric">Electric</option>
            <option value="fire">Fire</option>
            <option value="grass">Grass</option>
            <option value="water">Water</option>
            <option value="poison">Poison</option>
          </select>
          <label>Image</label>
          <input type="text" name="image" />
          <label>HP</label>
          <input type="number" name="hp" />
          <label>Attack</label>
          <input type="number" name="attack" />
          <label>Defense</label>
          <input type="number" name="defense" />
          <label>Special Attack</label>
          <input type="number" name="special_attack" />
          <label>Special Defense</label>
          <input type="number" name="special_defense" />
          <label>Speed</label>
          <input type="number" name="speed" />
          <label>Hability 1</label>
          <input type="text" name="habilityOne" />
          <label>Hability 2</label>
          <input type="text" name="habilityTwo" />
          <input type="submit" className='sbmForm' />
        </form>
      </article>
      <article className='myCards_box'>
      </article>
    </section>


  )
};

export default NewPoke;
