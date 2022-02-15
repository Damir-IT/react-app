import React from 'react'
import css from './Header.module.css'

const Header = (props) => {
  return (
    <div>
      <header className={css.header}>
        <img
          className={css.img}
          alt="#"
          src="https://image.shutterstock.com/image-vector/s-brush-stroke-letter-logo-260nw-715074679.jpg"
        />
      </header>
      <div className={css.login}>
        {props.isAuth ? <span>{props.login}</span> : <span>Login</span>}
      </div>
    </div>
  )
}
export default Header
