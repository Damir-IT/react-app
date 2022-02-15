import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import css from './UsersPage.module.css'
import * as axios from 'axios'

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
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'ac2a8633-91b1-4f6c-9022-b359ba8611e5',
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                        return
                      }
                      alert(response.data.messages)
                    })
                }}
              />
            ) : (
              <Button
                name="follow"
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'ac2a8633-91b1-4f6c-9022-b359ba8611e5',
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode == 0) {
                        props.follow(u.id)
                        return
                      }
                      alert(response.data.messages)
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
