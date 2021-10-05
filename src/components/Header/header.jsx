import React from "react";
import './header.css'

import Nav from '../Nav'

const Header = (props) => {

  return (
    <header style={props.style}>
      <Nav />
      <figure>
        <img  className='head_logo' alt="PokeReact" si/>
      </figure>
    </header>
  )
};

export default Header;
