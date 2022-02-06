import React from 'react'
import Button from '../Button/Button'
import * as axios from 'axios'
import css from './UsersPage.module.css'

class UsersPage extends React.Component {
  constructor(props) {
    super(props)
    //server call to get users
    //since it's in the constructor, it's called
    // every time the component's reinitializes
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        props.setUsers(response.data.items)
      })
  }
  render = () => (
    //render method, which is called every time the components is reinitialized
    <div>
      {this.props.users.map((u) => (
        <div key={u.id}>
          <div>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png"
              alt="#"
            />
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{u.country}</div>
            <div>{u.city}</div>
          </div>
          <div>
            {u.followed ? (
              <Button
                name="unfollow"
                onClick={() => this.props.unfollow(u.id)}
              />
            ) : (
              <Button name="follow" onClick={() => this.props.follow(u.id)} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersPage
