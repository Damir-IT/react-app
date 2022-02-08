import React from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'

import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/reducers/usersPageReducer'
import UsersPage from './UsersPage'
import Preloader from '../../layouts/preload/Preloader'

class UserPageContainer extends React.Component {
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
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }
  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersPage
          pageSplitUsers={this.pageSplitUsers}
          onPageChange={this.onPageChange}
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUserCount={this.props.totalUserCount}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => dispatch(followAC(userID)),
    unfollow: (userID) => dispatch(unfollowAC(userID)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setTotalUserCount: (userCount) => dispatch(setTotalUserCountAC(userCount)),
  }
}
// attr from mapStateToProps and mapDispatchToProps will be passed to UserPageContainer as props
//you will be able to access them with this.props.[name]
export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer)
