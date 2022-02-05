const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET-USERS'
const initialState = {
  users: [],
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
        users: [...state.users, ...action.users],
      }
    default:
      return state
  }
}

//ACTION-CREATORS
const followAC = (userID) => ({ type: FOLLOWED, userID })
const unfollowAC = (userID) => ({ type: UNFOLLOWED, userID })
const setUsersAC = (users) => ({ type: SET_USERS, users })

export {
  usersPageReducer,
  //ACTION-CREATORS
  followAC,
  unfollowAC,
  setUsersAC,
}
