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
              <Button
                name="unfollow"
                onClick={() => {
                  usersAPI.unfollowUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id)
                      return
                    }
                    alert(data.messages)
                  })
                }}
              />
            ) : (
              <Button
                name="follow"
                onClick={() => {
                  usersAPI.followUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(u.id)
                      return
                    }
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
