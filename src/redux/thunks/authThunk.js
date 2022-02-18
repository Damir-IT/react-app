import { authAPI } from '../../api/api'
import { authenticateCurrentUser } from '../actions/auth/authAC'

//Thunk
export const authenticateMe = (pageNumber, pageSize) => {
  return (dispatch) => {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data
        dispatch(authenticateCurrentUser(id, email, login))
      }
    })
  }
}
