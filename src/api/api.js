import * as axios from 'axios'

const api = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ac2a8633-91b1-4f6c-9022-b359ba8611e5',
  },
})

export const usersAPI = {
  getUserProfile(userID) {
    return api.get(`profile/${userID}`).then((response) => {
      return response.data
    })
  },
  getUsers(currentPage = 1, pageSize = 10) {
    return api
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data
      })
  },
  setUsers(pageNumber = 1, pageSize = 10) {
    return api
      .get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        return response.data
      })
  },
  followUser(userID) {
    return api.post(`follow/${userID}`).then((response) => {
      return response.data
    })
  },
  unfollowUser(userID) {
    return api.delete(`follow/${userID}`).then((response) => {
      return response.data
    })
  },
}
export const authAPI = {
  authenticateUser() {
    return api.get('auth/me').then((response) => {
      return response.data
    })
  },
}
