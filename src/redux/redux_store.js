import { combineReducers, createStore } from 'redux'
import { dialogsPageReducer } from './dialogsPageReducer';
import { profilePageReducer } from './profilePageReducer';


const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
})

const store = createStore(reducers);  

export  { 
    store,
};

