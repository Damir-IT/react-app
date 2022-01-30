
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import { Routes, Route} from 'react-router-dom'
import { Layout } from './Components/Layout/Layout';
import { Message } from './Components/Dialogs/Message/Message';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';


function App() {
  return (
    <div 
      className="app">
      <div 
        className='app__main'>
        <Routes>
          <Route 
            path='/' element={ <Layout /> } >
            <Route path='dialogs' 
              element={ <DialogsContainer /> }>  
              <Route path='dialogs/:id' element={ <Message /> } />
            </Route>
            <Route index element={ <ProfileContainer /> }/>
            <Route path='*' element={ <NotFound /> } />
            
          </Route>
        </Routes>
      </div>
    </div>
  
  );
}

export { App };
