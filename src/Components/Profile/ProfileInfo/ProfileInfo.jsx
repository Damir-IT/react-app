import React from 'react'
import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div className={css.content}>
      <span>{props.profileStatus}</span>
    </div>
  )
}
export default ProfileInfo
