
import { store } from './redux/redux_store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';




const renderPage = (store) => {

  ReactDOM.render(
    <BrowserRouter> 
    {/* BrowserRouter allows SPA realisation */}
    {/* Componetns within can access the <Link> and <NavLink> */}
      <React.StrictMode>
        <Provider store={ store }> {/* Manages store /more info below */}
          <App />
        </Provider> 
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
  
  reportWebVitals();

}
 
renderPage(store)

store.subscribe(() => {
  // pass the render func to BL:
  
  //subscribe = renderPage(store)

  //subsribe(); every time something changes
  // to rerender the page
  renderPage(store); 
});

//  Description 
//Here how it works under the hood
// const StoreContext = React.createContext(null);

// const Provider = (store) => {
//   return (
//     <StoreContext.Provider value={ props.store}>
//       {props.children}
//     </StoreContext.Provider>
//   )
// }



