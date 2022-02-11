import {
  FOLLOWED,
  UNFOLLOWED,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USER_COUNT,
  DISPLAY_LOADING_SCREEN,
  SET_USER_ID,
} from './usersPageActionTypes'

export const follow = (userID) => ({ type: FOLLOWED, userID })
export const unfollow = (userID) => ({ type: UNFOLLOWED, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUserCount = (userCount) => ({
  type: SET_TOTAL_USER_COUNT,
  userCount,
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
export const displayLoadingScreen = (loading) => ({
  type: DISPLAY_LOADING_SCREEN,
  loading,
})
export const setUserID = (userID) => ({
  type: SET_USER_ID,
  userID,
})
