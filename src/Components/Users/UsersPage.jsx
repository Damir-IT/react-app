import React from 'react'
import Button from '../Button/Button'
import User from './User'
import * as axios from 'axios'

const UsersPage = (props) => {
  debugger
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        props.setUsers(response.data.items)
      })
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <img src={u.photo} alt="#" />
          </div>
          <div>
            <div>{u.name}</div>
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
