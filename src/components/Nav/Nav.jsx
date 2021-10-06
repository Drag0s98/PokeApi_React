import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu'
import { HamburgerArrow } from 'react-animated-burgers'
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {

  const [isActivate, setisActivate] = useState(false)

  const toggleButton = () => {
    setisActivate(!isActivate)
  }


  return (
    <div>
      <HamburgerArrow isActive={isActivate} toggleButton={toggleButton} buttonColor="transparent" barColor="white" />
      <Menu left className={'menu'}  >
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/new'><li>Create Pokemon</li></Link>
          <Link to='/search'><li>Search</li></Link>
        </ul>
      </Menu>
    </div>
  )
};

export default Nav;
