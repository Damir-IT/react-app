import { connect } from 'react-redux'
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/usersPageReducer'
import UsersPage from './UsersPage'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
