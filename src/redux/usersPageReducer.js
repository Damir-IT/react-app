const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const initialState = {
  users: [],
  totalUserCount: 0,
  pageSize: 10,
  currentPage: 1,
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

export {
  usersPageReducer,
  //ACTION-CREATORS
  setTotalUserCountAC,
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
}
