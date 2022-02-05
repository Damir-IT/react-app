import React from 'react'
import Button from '../Button/Button'

const User = (props) => {
  return (
    <div>
      <div>
        <img src={props.user.photo} alt="#" />
      </div>
      <div>
        {props.user.fullName}
        {props.user.status}
        {props.user.country}
        {props.user.city}
      </div>
      <div>
        {props.user.followed ? (
          <Button onClick={() => props.follow(props.user.id)} name="follow" />
        ) : (
          <Button
            onClick={() => props.unfollow(props.user.id)}
            name="unfollow"
          />
        )}
      </div>
    </div>
  )
}

export default User
