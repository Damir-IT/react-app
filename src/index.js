
import { store } from './redux/redux_store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext } from './redux/context';




const renderPage = (store) => {

  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <StoreContext.Provider value={ store }>
          <App />
        </StoreContext.Provider>
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





