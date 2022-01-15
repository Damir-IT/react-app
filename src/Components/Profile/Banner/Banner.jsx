import React from "react"
import css from "./Banner.module.css"
const Banner = () => {
    return (
            <img 
                className={css.banner}
                alt='banner'
                src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            />
    )
}

export default Banner; 