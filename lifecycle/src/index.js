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
//Constructor:props and state atama
    diğer tüm metodlardan önce çağrılır

//ComponentWillMount
    kullanılması önerilmiyor
    cwm
    renderdan hemen önce çalışır
    getDerivedStateFromProps//yeni

//ComponentDidMount
    cdm
    renderdan sonra çalışır
    setTimeOut//2 saniye sonra yeniden render et
      //setState olduğu için yeniden render edicek
//Hiyerarşi
    child componentinde gelen props 
    değeri değiştiği anda bu çalışır
    //react code snippets
    ComponentWillRecevieProps
    cwrp
    değişen propsu parametre olarak
    alır
    appdan props göndermem lazım ve
    bu propsun değişmesi lazım->
    changecolor butonuna tıklayınca
    değişir
    //childrenderdan bile önce çalışır,

//ShouldComponenetUpdate
    component render edilsin mi edilmesinmi
    false dönerse->render edilmez
    inputa 18tl kaç portakal alırım
    //5in katları girildiğinde render
    edilsin
    scu kullan//props yok state alıyor-durmanda
    return true ise component render
    edilicek

//ComponenetWillUpdate
    renderden önce->should true ise çalışır
    nextProps,nextState
//ComponentDidUpdate
renderden sonra
    prev... bir önceki state basar

      */
