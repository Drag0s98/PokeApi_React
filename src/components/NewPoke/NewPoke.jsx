import React, { useState } from "react";


import './NewPoke.css'

const NewPoke = () => {

  const [setmyPoke] = useState([])

  const invForm = (event) => {
    event.preventDefault()
    console.log(event.target.name.value);
    setmyPoke([{
      name: event.target.name.value,
      type: event.target.type.value,
      image: event.target.image.value,
      habilityOne: event.target.habilityOne.value,
      habilityTwo: event.target.habilityTwo.value,
    }])
  }


  return (
    <section>
      <article className='formBox'>
        <form onSubmit={invForm}>
          <label>Name of Pokemon</label>
          <input type="text" name="name" />
          <label>Type</label>
          <input type="text" name="type" />
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
