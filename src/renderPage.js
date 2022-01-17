import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost, deletePost, getPostIndex, showPostInput } from './redux/state';


const renderPage = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App 
          dialogs={ state.dialogsPage.dialogs }
          messages={ state.dialogsPage.messages } 
          posts={ state.profilePage.posts }
          newPost={ state.profilePage.newPost }
          addPost={ addPost }
          deletePost={ deletePost }
          getPostIndex={ getPostIndex }
          showPostInput={ showPostInput }
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
  
  reportWebVitals();

}


export default renderPage;
