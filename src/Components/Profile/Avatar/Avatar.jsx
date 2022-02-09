import React from 'react'
import css from './Avatar.module.css'
const Avatar = (props) => {
  return <img className={css.avatar} alt="avatar" src={props.profilePhoto} />
}

export default Avatar
