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
  Proje
    Kullancının lokasyonu alacağız
    Lokasyona göre kullanıcının hangi yarım kürede
      yaşadığını belirleyeceğiz
    Tarihe göre ayı bulacağız ve hangi aya tekabül
      ettiğini belirteceğiz
    Yapılacak aktiviteyi belirteceğiz

  Proje Kurulumu
    Semantic ui cdn min-css copypast
    DecideActivity

  Konum Bilgisi
    geolocation api
          window.navigator.geolocation.getCurrentPosition//mevcut konumu alma
            setState//latitude ata
          console açıkken esc ...more tools sensors
  
  Sayfa Yükleniyor Nasıl Yapılır
    if
    else if
    return


  Koşula Göre Fonksiyonu Yazma
  //new Date().getMonth()
    hangi yarım kürede
    mevsim ne
    activity ne

  Proje Sonu
    //semantic ui cdn dahil et
    header->icon header//sun



*/