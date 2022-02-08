import React from 'react'
import css from './NotFound.module.css'
const NotFound = () => {
    return (
        <>
            <img 
                className={ css.img }
                alt='404 page not found'
                src='https://i.pinimg.com/originals/fd/78/c4/fd78c47f2a009df65b5b5a46f4437399.png' />
        </>
    )
}

export default NotFound;