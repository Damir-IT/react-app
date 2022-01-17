
import './App.css';

import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import NotFound from './Components/NotFound/NotFound';

import { Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout';

function App(props) {
  return (
    <div className="app">
      <div className='app__main'>
          <Routes>
            <Route path='/' element={ <Layout /> } >
              <Route path='dialogs' element={<Dialogs 
                                                dialogs={ props.dialogs }
                                                messages={ props.messages } 
                                                />} 
                                              />
              <Route index element={<Profile 
                                      deletePost={ props.deletePost } 
                                      addPost={ props.addPost } 
                                      getPostIndex={ props.getPostIndex }
                                      posts={ props.posts } 
                                      showPostInput={ props.showPostInput }
                                      newPost={ props.newPost }
                                      />} 
                                    />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
      </div>
    </div>
  
  );
}

export default App;
