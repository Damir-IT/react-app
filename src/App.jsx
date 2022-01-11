
import './App.css';
import Header from './Components/Header/Header'; 
import Menu from './Components/Menu/Menu';
// import Post from './Components/Profile/Post/Post';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import NotFound from './Components/NotFound/NotFound';

import {BrowserRouter ,Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className='app__main'>
          <Menu className='menu'/>
            <Routes>
              <Route path='/dialogs' element={<Dialogs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
