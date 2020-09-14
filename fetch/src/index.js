import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
//Data Çekme İşlemi
  jsonplaceholder
  fetch kullanımı
  id problemi kaldır-tarayıcıya bastır

//Sayfa Yükleniyor Yapımı
    loading:true,false

//Axios
    npm install axios --save
    import

//İleri Component Kullanımı
  WrappedComponent->Burayı Çalış

*/