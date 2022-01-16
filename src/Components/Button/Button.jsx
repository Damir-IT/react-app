import React from 'react'
import css from './Button.module.css'
const Button = (props) => {
   
    return (
        <button onClick={ props.onClick } className={css.button}>
            {props.name}
        </button>
    )
}

export default Button;