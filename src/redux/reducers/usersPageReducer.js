import { 
  FOLLOWED, 
  UNFOLLOWED, 
  SET_USERS, 
  SET_CURRENT_PAGE, 
  SET_TOTAL_USER_COUNT, 
  DISPLAY_LOADING_SCREEN,
  SET_USER_ID
} from "../actions/users_page/usersPageActionTypes"

const initialState = {
  users: [],
  totalUserCount: 51,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
}

export const usersPageReducer = (state = initialState, action) => {
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
      case SET_USER_ID:
        return {
          ...state,
          userID: action.useID,
        }
    default:
      return state
  }
}
