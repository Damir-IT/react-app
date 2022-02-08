import { ADD_POST, DELETE_POST, POST_INPUT } from './profilePageActionTypes'

export const postInputActionCreator = (input) => ({
  type: POST_INPUT,
  input: input,
})

export const deletePostActionCreator = (post) => ({
  type: DELETE_POST,
  post: post,
})

export const addPostActionCreator = () => ({ type: ADD_POST })
