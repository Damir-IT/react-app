import React from 'react';
import css from './Menu.module.css';
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <sidebar className={css.menu}>
          <Link to='/profile'>Profile</Link>
          <Link to='/dialogs'>Dialogs</Link>
        </sidebar>
    )
}

export default Menu;

