
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



const renderPage = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App 
          dialogs={ store._state.dialogsPage.dialogs }
          messages={ store._state.dialogsPage.messages } 
          posts={ store._state.profilePage.posts }
          newPost={ store._state.profilePage.newPost }
          addPost={ store.addPost.bind(store) }
          deletePost={ store.deletePost.bind(store) }
          showPostInput={ store.showPostInput.bind(store) }
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
  
  reportWebVitals();

}
renderPage()

store.assign(renderPage);





