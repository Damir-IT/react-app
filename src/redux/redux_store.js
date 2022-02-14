import { combineReducers, createStore } from 'redux'
import { authReducer } from './reducers/authReducer'
import { dialogsPageReducer } from './reducers/dialogsPageReducer'
import { profilePageReducer } from './reducers/profilePageReducer'
import { usersPageReducer } from './reducers/usersPageReducer'

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
})

export const store = createStore(reducers)

window.store = store
