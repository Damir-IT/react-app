import { applyMiddleware, combineReducers, createStore } from 'redux'
import { authReducer } from './reducers/authReducer'
import { dialogsPageReducer } from './reducers/dialogsPageReducer'
import { profilePageReducer } from './reducers/profilePageReducer'
import { usersPageReducer } from './reducers/usersPageReducer'
import thunkMiddleWare from 'redux-thunk'

//all reducers are combined here and passed to the store
const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare))
//thunkMiddleWare is a function, that can act asynchronosly and dispatch actions

window.store = store //allows store.getState() in the browser console
