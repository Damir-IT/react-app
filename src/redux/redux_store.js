import { combineReducers, createStore } from 'redux'
import { dialogsPageReducer } from './dialogsPageReducer'
import { profilePageReducer } from './profilePageReducer'
import { usersPageReducer } from './usersPageReducer'

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
})

export const store = createStore(reducers)
