import * as axios from 'axios'

//axios instance wiht required info to get the correct server interractions
const api = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/', //the initial api url
  withCredentials: true, //checks your cookies to verify your credentials
  headers: {
    'API-KEY': 'ac2a8633-91b1-4f6c-9022-b359ba8611e5', //api key to bind the user interractions to your account
  },
})

//users DAL
export const usersAPI = {
  getUserProfile(userID) {
    //gets the user profile info
    return api //axios instaces created above
      .get(`profile/${userID}`) //added to the baseURL
      .then((response) => {
        return response.data //strips the response from the unnecessary for the componnent info and returns only the needed data
      })
  },
  getUsers(pageNumber = 1, pageSize = 10) {
    return api //server call to get users
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
  },

  followUser(userID) {
    //let the server know which user the authenticated user followed
    return api.post(`follow/${userID}`).then((response) => {
      return response.data
    })
  },
  unfollowUser(userID) {
    //let the server know which user the authenticated user unfollowed
    return api.delete(`follow/${userID}`).then((response) => {
      return response.data
    })
  },
}
export const authAPI = {
  me() {
    return api.get('auth/me').then((response) => {
      return response.data
    })
  },
}
