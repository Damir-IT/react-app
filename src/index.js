import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
    dialogs : [
    { id : 1, name : 'Dasha' },
    { id : 2, name : 'Damir' },
    { id : 3, name : 'Artur' },
    { id : 4, name : 'Kriss' },
    ],
    messages : [
      { id : 1, message : 'Hey there' },
      { id : 2, message : 'Sup, bro' },
      { id : 3, message : 'How are you doin\'??' },
    ],
    posts : [

      {message : 'Pater noster..'},
      {message : 'Qui es en celis'},
      {message : 'Da fuk???'},

    ],

  }

ReactDOM.render(
  <React.StrictMode>
    <App 
    dialogs={ data.dialogs }
    messages={ data.messages } 
    posts={ data.posts }
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
