import {
  ADD_POST,
  DELETE_POST,
  POST_INPUT,
} from '../actions/profile_page/profilePageActionTypes'

const initialState = {
  posts: [
    { message: 'hi there' },
    { message: 'hello, world' },
    { message: 'barabashka' },
    { message: 'pater noster' },
    { message: 'qui es in celis' },
    { message: 'Ragnar Logbrock' },
    { message: 'You misspelled that one' },
  ],
  newPost: '',
}

export const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { message: state.newPost }],
        newPost: '',
      }
    case DELETE_POST:
      const index = state.posts.indexOf(action.post)
      state.posts.splice(index, 1)

      return {
        ...state,
        posts: [...state.posts],
      }

    case POST_INPUT:
      return {
        ...state,
        newPost: action.input,
      }
    default:
      return state
  }
}
