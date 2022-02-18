import React from 'react'
import { connect } from 'react-redux'
import UsersPage from './UsersPage'
import Preloader from '../../layouts/Preloader/Preloader'
import { setTotalUserCount } from '../../redux/actions/users_page/usersPageACs'
import {
  followUser,
  getUsers,
  unfollowUser,
} from '../../redux/thunks/userPageThunks'

class UserPageContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
    this.props.getUsers(pageNumber, this.props.pageSize)
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
    isBeingFollowed: state.usersPage.isBeingFollowed,
  }
}

export default connect(mapStateToProps, {
  setTotalUserCount,
  getUsers,
  unfollowUser,
  followUser,
})(UserPageContainer)
