
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
          state={ store.getState() }
          dispatch={ store.dispatch.bind(store) }
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
  
  reportWebVitals();

}
renderPage()

store.assign(renderPage);





