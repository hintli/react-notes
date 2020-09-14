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
  ***Proje Kurulumu
    Semantic uı-hazır componentler
    create-react-app yorumlar
    rafc//stateless component
    semantic ui cdn//css min copy-paste index.html//head arası link
    sayfayı incele-network//action,callback,js,css dosyaları kontrolü

  ***Semantic Ui ı Projeye Dahil Etme
    comment componenti seçtik bir tane 
    app.js divi copy-paste yaptık

  ***İmage Çekme
    Random image atayan api kullancaz
    fakerjs
    npm install faker --save//mastera gir yorumlar //save->npm installda yüklenir bunlar
    classları className yap
    faker import et
    avatar->src={faker.image.avatar()}//metod olarak kullandığı için

  ***Componentlere Ayırma
    App.js
      import Comment
      <Comment/>
    Comment.js
      div comment copy past

  ***Değer Gönderme
  App.js
    Birden fazla comment kullanma
      <Comment name={Ahmet}/>
      <Comment name={Hasan}/>
    değişicekler(isim,date,star)
  Comment.js
    Comment(props)
      const name=props.name//3 tarz tanımlanabiliyor. Comment(name,)
      <a>{name}
      //imageıda App.jsden gönder avatar

  ***Semantic UI yı Projede Aktif Kullanma
    App.js
      import Card
      css ver
      //parent-child//props olarak gidiyor
      Card>Comment
    //card seç
    Card.js//rafc
      {props.chidren}



*/
