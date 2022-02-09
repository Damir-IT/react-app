const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const DISPLAY_LOADING_SCREEN = 'DISPLAY_LOADING_SCREEN'

const initialState = {
  users: [],
  totalUserCount: 51,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
}

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOWED:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_TOTAL_USER_COUNT:
      return { ...state, totalUserCount: action.userCount }
    case DISPLAY_LOADING_SCREEN:
      return {
        ...state,
        isFetching: action.loading,
      }
    default:
      return state
  }
}

//ACTION-CREATORS
const followAC = (userID) => ({ type: FOLLOWED, userID })
const unfollowAC = (userID) => ({ type: UNFOLLOWED, userID })
const setUsersAC = (users) => ({ type: SET_USERS, users })
const setTotalUserCountAC = (userCount) => ({
  type: SET_TOTAL_USER_COUNT,
  userCount,
})
const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
const displayLoadingScreenAC = (loading) => ({
  type: DISPLAY_LOADING_SCREEN,
  loading,
})

export {
  usersPageReducer,
  //ACTION-CREATORS
  setTotalUserCountAC,
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  displayLoadingScreenAC,
}
