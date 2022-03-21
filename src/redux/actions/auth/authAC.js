import { SET_AUTH_USER } from './authActionTypes'

export const authenticateCurrentUser = (userID, email, login) => ({
  type: SET_AUTH_USER,
  data: { userID, email, login },
})
