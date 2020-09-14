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

// Browser Router Nedir Nasıl Kullanılır Exact
  react-dom
  react-router-dom //ikisini kur ve import et ->BrowserRouter ve Router

  BrowserRouter->en dışa yazılır 
  div 
  Route path/ render->callback ile return yapılır
  exact / ve /a da iki sayfada geliyor exact path doğruysa getirir. /a gelir sadece

//Strict Kullanımı bir şeyi force etme-zorlama
  iletisim
  iletisim/->gelmez path eşleşmezse gelmez. bire bir aynısı olmalı

//Component
  stateless componenti routera atama
  component = {news}

//Route a Parametre Nasıl Gönderilir
  news/:id

  news = (match) => match.params.id    /route/match-params

// Link İle Yönlendirme Nasıl Yapılır
  Link import

  link to=yönlendirme

//Navlink İle Yönlendirme Nasıl Yapılır
  a etiketinin style alabiliyor hali
  activeStyle={{color:"blue"}}//inline
  activeClassName="can"

//Redirect İle Yönlendirme Nasıl Yapılır
  profile-button(butona tıkladığında login,logout)
  profile login değilse profile gözükmez.
  buton tıkla loginse logout

  state loggedIn,
  clickbutton->loggedın true->false
  input button value=true ise logout değilse login

  route profile render
    loggedın true ise profile sayfası 
    değilse Redirect anasayfa//yönlendirme

//Switch İle 404 Mesajı Verme
  stateless component//error--hata sayfası
    Switch//Routeları içine al
      //içinde bulunduğu pathe eşleşiyorsa
      pathe giricek herhangi birine girmiyorsa
      Route component={Error}
*/