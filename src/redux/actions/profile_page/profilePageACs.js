import {
  ADD_POST,
  DELETE_POST,
  SET_USER_PROFILE,
  SHOW_POST_INPUT,
} from './profilePageActionTypes'

export const showPostInput = (input) => ({
  type: SHOW_POST_INPUT,
  input: input,
})

export const deletePost = (post) => ({
  type: DELETE_POST,
  post: post,
})
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
})

export const addPost = () => ({ type: ADD_POST })
