import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';



//STORE ->GLOBALIZED STATE

//ACTION ->ARTTIRMA 
const increment = () => {
  return  {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return  {
    type: 'DECREMENT'
  }
}


//REDUCER  NE DISPATCH EDİLİRSE IONU ÇALIŞTIRIR
//REDUCER ACTION A GÖRE STORU U MODIFY EDER

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

let store=createStore(counter);

//Display it on the screen
store.subscribe(()=>console.log(store.getState()));






//DISPATCH ACTION U EXECUTE ETTİĞİMİZ YANİ ÇALIŞTIRDIĞIMIZ TER DISPATCH 

store.dispatch(increment());//1
store.dispatch(decrement());//0
store.dispatch(decrement());//-1



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
