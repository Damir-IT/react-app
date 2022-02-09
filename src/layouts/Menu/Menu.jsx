import React from 'react'
import css from './Menu.module.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className={css.menu}>
      <Link to="/profile">profile</Link>
      <Link to="/dialogs">dialogs</Link>
      <Link to="/music">music</Link>
      <Link to="/users">users</Link>
      <Link to="/about">about</Link>
    </div>
  )
}

export { Menu }
