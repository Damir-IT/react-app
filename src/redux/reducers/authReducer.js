import { SET_AUTH_USER } from '../actions/auth/authActionTypes'

const initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    default:
      return state
  }
}
