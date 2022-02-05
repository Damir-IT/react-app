import React from 'react'
import Button from '../Button/Button'
import User from './User'

const UsersPage = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <img src={u.photo} alt="#" />
          </div>
          <div>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
            <div>{u.country}</div>
            <div>{u.city}</div>
          </div>
          <div>
            {u.followed ? (
              <Button name="unfollow" onClick={() => props.unfollow(u.id)} />
            ) : (
              <Button name="follow" onClick={() => props.follow(u.id)} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersPage
