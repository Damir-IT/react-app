import React from 'react'
import Button from '../Button/Button'
import css from './UsersPage.module.css'

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
