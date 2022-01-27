
import { store } from './redux/redux_store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



const renderPage = (store) => {

  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App 
          state={ store.getState()  }
          dispatch={ store.dispatch.bind(store) }
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
  
  reportWebVitals();

}
 
renderPage(store)

store.subscribe(() => {
  renderPage(store); 
});





