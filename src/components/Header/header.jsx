import React from "react";
import './header.css'
import { Link } from "react-router-dom";

import Nav from '../Nav'

const Header = (props) => {

  return (
    <header style={props.style}>
      <Nav />
      <Link to='/home' className='homeBack'>
        <figure>
          <img className='head_logo' alt="PokeReact" />
        </figure>
      </Link>
    </header>
  )
};

export default Header;
