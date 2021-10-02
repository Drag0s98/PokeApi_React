import React from "react";
import './header.css'

const Header = (props) => {

  console.log(props);
  return (
    <header style={props.style}>
      <figure>
        <img  className='head_logo' alt="PokeReact" si/>
      </figure>
    </header>
  )
};

export default Header;
