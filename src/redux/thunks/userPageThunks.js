import { usersAPI } from '../../api/api'
import { setUserProfile } from '../actions/profile_page/profilePageACs'
import {
  displayLoadingScreen,
  enableFollowing,
  setUsers,
  unfollow,
  follow,
} from '../actions/users_page/usersPageACs'

//Thunks
export const getUsers = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(displayLoadingScreen(true))
    usersAPI.getUsers(pageNumber, pageSize).then((data) => {
      dispatch(setUsers(data.items)) //gets user info from the server
      dispatch(displayLoadingScreen(false))
      //this.props.setTotalUserCount(response.data.totalCount) //gets the total number of users present
    })
  }
}

export const unfollowUser = (userID) => {
  return (dispatch) => {
    dispatch(enableFollowing(true, userID))
    //userAPI is an axios.create() instance with baseURL headers and API-KEY to access the server
    usersAPI.unfollowUser(userID).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userID))
        dispatch(enableFollowing(false, userID))

        return
      }
      dispatch(enableFollowing(false, userID))
      alert(data.messages) //displays an error message that comes with the data from server
    })
  }
}
export const followUser = (userID) => {
  return (dispatch) => {
    dispatch(enableFollowing(true, userID))
    //userAPI is an axios.create() instance with baseURL headers and API-KEY to access the server
    usersAPI.followUser(userID).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userID))
        dispatch(enableFollowing(false, userID))
        return
      }
      dispatch(enableFollowing(false, userID))
      alert(data.messages) //displays an error message that comes with the data from server
    })
  }
}

export const getUserProfile = (userID) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userID).then((data) => {
      dispatch(setUserProfile(data))
    })
  }
}
