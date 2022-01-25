
import './App.css';

import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import NotFound from './Components/NotFound/NotFound';

import { Routes, Route} from 'react-router-dom'
import { Layout } from './Components/Layout/Layout';
import { Message } from './Components/Dialogs/Message/Message';


function App(props) {
  
  return (
    <div 
      className="app">
      <div 
        className='app__main'>
        <Routes>
          <Route 
            path='/' element={ <Layout /> } >

            <Route path='dialogs' element={
              <Dialogs 
                dialogPage={ props.state.dialogsPage } 
                dispatch={ props.dispatch }/> }> 
              <Route path='dialogs/:id' element={ <Message /> } />
            </Route>
            <Route index element={
              <Profile 
                profilePage={ props.state.profilePage }
                dispatch={ props.dispatch }/> } 
              />

            <Route path='*' element={ <NotFound /> } />
            
          </Route>
        </Routes>
      </div>
    </div>
  
  );
}

export { App };
