import React from 'react';
import css from './Menu.module.css';
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className={css.menu}>
          <NavLink to='/'>Profile</NavLink>
          <NavLink to='/dialogs'>Dialogs</NavLink>
          <NavLink to='/music'>Music</NavLink>
          <NavLink to='/friends'>Friend</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
    )
}

export default Menu;

