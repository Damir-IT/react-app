import {
  ADD_POST,
  DELETE_POST,
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

export const addPost = () => ({ type: ADD_POST })
