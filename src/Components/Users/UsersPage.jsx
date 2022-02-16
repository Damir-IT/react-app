import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import css from './UsersPage.module.css'
import { usersAPI } from '../../api/api'

const UsersPage = (props) => {
  return (
    <div className={css.container}>
      {props.pageSplitUsers().map((p) => {
        return (
          <span
            onClick={(e) => props.onPageChange(p)}
            className={props.currentPage === p && css.active_page}
          >
            {p}
          </span>
        )
      })}
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img
                src={
                  u.photos.small ||
                  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png'
                }
                alt="#"
              />
            </NavLink>
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{u.country}</div>
            <div>{u.city}</div>
          </div>
          <div>
            {u.followed ? (
              //depending on the boolean 'followed' conditional component is displayed
              <Button
                //button is disabled if any of the user ID's is in the isBeingFollowed array
                disabled={props.isBeingFollowed.some((id) => id === u.id)}
                name="unfollow"
                onClick={() => {
                  props.enableFollowing(true, u.id)
                  //userAPI is an axios.create() instance with baseURL headers and API-KEY to access the server
                  usersAPI.unfollowUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id)
                      props.enableFollowing(false, u.id)

                      return
                    }
                    props.enableFollowing(false, u.id)
                    alert(data.messages) //displays an error message that comes with the data from server
                  })
                }}
              />
            ) : (
              <Button
                name="follow"
                disabled={props.isBeingFollowed.some((id) => id === u.id)}
                onClick={() => {
                  props.enableFollowing(true, u.id)
                  usersAPI.followUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(u.id)
                      props.enableFollowing(false, u.id)
                      return
                    }
                    props.enableFollowing(false, u.id)

                    alert(data.messages)
                  })
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersPage
