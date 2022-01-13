import React from 'react';
import css from './Menu.module.css';
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <sidebar className={css.menu}>
          <Link to='/'>Profile</Link>
          <Link to='/dialogs'>Dialogs</Link>
          <Link to='/music'>Music</Link>
          <Link to='/friends'>Friend</Link>
          <Link to='/about'>About</Link>
        </sidebar>
    )
}

export default Menu;

