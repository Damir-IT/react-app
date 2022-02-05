import React from 'react';
import css from './Menu.module.css';
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className={css.menu}>
        <Link to='/'>Profile</Link>
          <Link to='/dialogs'>Dialogs</Link>
          <Link to='/music'>Music</Link>
          <Link to='/users'>Users</Link>
          <Link to='/about'>About</Link>
        </div>
    )
}

export { Menu };

