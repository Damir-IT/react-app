import React from 'react'
import css from './Button.module.css'
const Button = (props) => {
  return (
    <button
      disabled={props.disabled || null} //while props.disabled the button will not be clickable
      onClick={props.onClick} //action that happens every time the button is clicked
      className={css.button} //css class to style the button
    >
      {props.name} {/* text displayed within the button */}
    </button>
  )
}

export default Button
