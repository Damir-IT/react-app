import { store } from './redux/redux_store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <BrowserRouter>
    {/* BrowserRouter is wrapped around components that will be able to access Routing functionality */}
    <React.StrictMode>
      {/*  */}
      <Provider store={store}>
        {/* Manages store /more info in context.js */}
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
