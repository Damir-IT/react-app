import React from 'react';

import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
        <img 
            className={css.img} 
            alt='#' 
            src='https://image.shutterstock.com/image-vector/s-brush-stroke-letter-logo-260nw-715074679.jpg'/>
        </header>
    )
}
export default Header;
