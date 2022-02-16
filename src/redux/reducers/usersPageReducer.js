import {
  //action creator types to prevent any misspelings
  FOLLOWED,
  UNFOLLOWED,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USER_COUNT,
  DISPLAY_LOADING_SCREEN,
  SET_USER_ID,
  ENABLE_FOLLOWING,
} from '../actions/users_page/usersPageActionTypes'

const initialState = {
  users: [], //an array with available users
  totalUserCount: 51, // number of users fetched from the server
  pageSize: 10, //number of users displayed on a single page
  currentPage: 1, //first page the user is at when the 'Users' page is openend
  isFetching: false, //loading screen boolean
  isBeingFollowed: [], //array of user IDs, whos follow/unfollow button is disabled
}

//BLL of the users page
export const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state, //coppying the initial state
        users: state.users.map((u) => {
          //coppying the users
          if (u.id === action.userID) {
            return { ...u, followed: true } //changing the boolean 'followed' depending on the presence of the user ID in the passed action creator
          }
          return u // returning the user with the default 'followed' attr if their id was not present in the action.userID
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
        users: action.users, //setting the users for the initial server call when the page is loaded
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage, //server call to get a page the user would like to have, depending on the totalUserCount and pageSize
      }
    case SET_TOTAL_USER_COUNT:
      return { ...state, totalUserCount: action.userCount } //the value is received from the server upon the first page load
    case DISPLAY_LOADING_SCREEN:
      return {
        ...state,
        isFetching: action.loading, // toggles the bollean
      }
    case SET_USER_ID:
      return {
        ...state,
        userID: action.useID, //sets the id of the users whos profile should be displayed upon their avatar click
      }
    case ENABLE_FOLLOWING:
      return {
        ...state,
        isBeingFollowed: action.isFetching //bollean indicates whether the follow/unfollow button was clicked
          ? [...state.isBeingFollowed, action.userID] //if true, the passed in action.userID is added to the isBeingFollowed array
          : [state.isBeingFollowed.filter((id) => id !== action.userID)], //if false, the array is filtered to get rid of the user's id and allow their follow/unfollow button to be clicked
      }
    default:
      return state // return the default state if nothing was changed
  }
}
