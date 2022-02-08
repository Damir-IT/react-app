import React from 'react'
import loadingSVG from '../../assets/pictures/ball-triangle.svg'
import css from './Preloader.module.css'
const Preloader = (props) => {
  return (
    <div className={css.Preloader}>
      <img src={loadingSVG} alt="loading..." />
    </div>
  )
}

export default Preloader
