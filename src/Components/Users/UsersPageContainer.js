import React from 'react'
import { connect } from 'react-redux'
import UsersPage from './UsersPage'
import Preloader from '../../layouts/Preloader/Preloader'
import {
  displayLoadingScreen,
  follow,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  unfollow,
} from '../../redux/actions/users_page/usersPageACs'
import { usersAPI } from '../../api/api'

class UserPageContainer extends React.Component {
  componentDidMount() {
    //called every time the class Obj is created
    this.props.displayLoadingScreen(true)
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items) //gets user info from the server
        this.props.displayLoadingScreen(false)
        //this.props.setTotalUserCount(response.data.totalCount) //gets the total number of users present
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
    this.props.displayLoadingScreen(true)
    this.props.setCurrentPage(pageNumber)
    usersAPI.setUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items)
      this.props.displayLoadingScreen(false)
    })
  }
  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersPage
          {...this.props}
          pageSplitUsers={this.pageSplitUsers}
          onPageChange={this.onPageChange}
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

export default connect(mapStateToProps, {
  displayLoadingScreen,
  follow,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  unfollow,
})(UserPageContainer)
