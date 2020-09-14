import React from 'react';
import ReactDOM from 'react-dom';
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
//Blog Uygulaması Giriş
  materilaze css min kur
  navbar->header
  change all occurainces
  alt+shift+f//düzeltme

  components
    home.js
    contacts.js
    about.js
    navbar.js

    footer yazdık.
    navbar //app.jsede import et ve kullan
    react-router-dom kur ve app.js de kullan

    navbar.js contacta tıkladığımda /contacta git
    /contactda ne var contact componenti

//NavLink
  contacta tıkladığımda full render ediliyor
  navbar.js->sorun a tagleri link ya da navlink kullanmalıyız

//Higher Order Component
About(props) ->navbara yap bunu
history->push(path,state) belirli bir urle git
props.history.push('/about')
belirli bir saniye sonra işlemimi yapıcam setTimeOut

props içerisi boş
navbara link ya da navlink ile yönlendirme olmadığı için props boş geliyor
bunu düzeltmek için higher order component propsu dolu getirir
  withRouter
  

//Higher Order Component Devam
  folder//wrapped component kullancaz
    rainbow
      biz bunu parametre olarak alıcaz. gönderdiğimiz yerden alıcaz(örn navbar)
      misal about,contact rengini değiştirmek istiyorum
        colors//her componenti yenilediğimde rengi değişsin
        bana gelen component wrappedcomponent ...props //props olarak bana gelen componenti
          geri yolluyorum
      export

  contact
    import rainbow
    rainbow(contact)

// Axios
  dami datayı fetch ile alcaz
  jsonplaceholder
  npm install axios
  import Home.js
  sayfa render edildikten sonra datayı çekmek istiyoz
    componentdidmount fetch setstate
    postList yoksa no post varsa post.map->cards

// Route Parametres
  url parametre geçme işlemi->post detaya gitme /32
  app.js
    route /:post_id Post /3266 -> Post.js e gider

    Post.js
      this.props.match.params.post_id
      //gönderdiğim parametre /3265

//Route Parametres Devam
  başlığa tıkladığında post detaya gitsin
  başlığa tıkladığımdayı parametre olarak geçmem lazımü
  Home.js
    link /+post.id
  Post.js
    axios idsi şu olanın bodysini bana dön

//Swith kullanarak
  post detay tüm componentlerde geliyor.
  1.yolu bir tane daha slaj at /posts/:post_id
  2.yolu Switch

//Image import ve css
  home.js
  index.css
    overflow:hidden//taşmasın

*/
