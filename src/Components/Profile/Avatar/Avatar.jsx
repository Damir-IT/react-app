import React from "react"
import css from './Avatar.module.css'
const Avatar = () => {
    return (
        <img 
            className={css.avatar}
            alt='avatar'
            src='https://i.pinimg.com/originals/5e/fe/46/5efe46a674da7d77cc8a02c858b77d0b.jpg'
        />
    )
}

export default Avatar;