
import './App.css';
import Header from './Components/Header/Header'; 
import Menu from './Components/Menu/Menu';
// import Post from './Components/Profile/Post/Post';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import NotFound from './Components/NotFound/NotFound';

import {BrowserRouter ,Routes, Route, Link} from 'react-router-dom'
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className='app__main'>
            <Routes>
              <Route path='/' element={ <Layout /> } >
                <Route path='dialogs' element={<Dialogs />} />
                <Route index element={<Profile />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
