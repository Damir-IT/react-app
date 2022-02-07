import React from 'react'
import Button from '../Button/Button'
import * as axios from 'axios'
import css from './UsersPage.module.css'

class UsersPage extends React.Component {
  componentDidMount() {
    //called every time the class Obj is created
    axios //server call to get users
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items) //gets user info from the server
        this.props.setTotalUserCount(response.data.totalCount) //gets the total number of users present
      })
  }
  pageSplitUsers = () => {
    //splites all users into pages
    //and returns an arr with page numbers
    const pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
    let splitPages = []
    for (let i = 1; i <= pageCount; i++) {
      splitPages.push(i)
    }
    return splitPages
  }
  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }
  render = () => {
    //render method, which is called every time the components is reinitialized
    return (
      <div className={css.container}>
        {this.pageSplitUsers().map((p) => {
          return (
            <span
              onClick={(e) => this.onPageChange(p)}
              className={this.props.currentPage === p && css.active_page}
            >
              {p}
            </span>
          )
        })}
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
}

export default UsersPage
