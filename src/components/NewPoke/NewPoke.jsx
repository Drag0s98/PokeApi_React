import React, { useState, useContext } from "react";
import { DataContext } from "../../context/pokeData.context";
import './NewPoke.css'


const NewPoke = () => {

  const [myPoke, setmyPoke] = useState([])
  const { data, setData } = useContext(DataContext)


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
        front_default: event.target.image.value
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
      id:  Math.floor(Math.random()*(900-1000))+1000
    }])
    event.target.name.value = ''
    event.target.type.value = ''
    event.target.image.value = ''
    event.target.habilityOne.value = ''
    event.target.habilityTwo.value = ''
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
