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

//className
/*
***Uygulama kurulumu:
create-react-app giris
npm start

***Render Etme
node_modules
public
  index.html->div id=root//layout-her şey bunun içine basılır
src
  index.js->app componentini render ediyor
  app.js->merhaba dünya 
  app.css->text-align:center


StrictMode-lifecycle unsafe hataları consoleda görmemizi sağlar.


ilk başta index.html çalışıyor body içindeki idsi root olan div tanımladık
index.jsde idsi root olana render ediyoruz kodlarımızı(app componentini basıyoruz.)
app.js burdaki componenti burda //class,function component

  ctrl+k+c yoruma al

***js içinde html kullanmamızı sağlar-jsx experssion
return içinde 2 div kullanılmaz tek div//rcc
label- htmlFor
html içinde js yazma {2+2}
{"can".toUpperCase()}
const sayi=27;//returnden önce
{dogrumu ? <p>Kullanıcı var</p> : <p>Kullanıcı yok</p>}


***Component Oluşturma
//yeni bir component oluştur,kullanacağımız jsye import etme ve kısayollar
es7 react.. expression
Can.js 
  //rcc class component
  //rfc function component
    form 
      input
      button

App.js 
  import Can
  return <Can/>

  ***Boostrap ekleme ve Css verme
    css:
    1.İnline css:style={{textAlign:"center"}}
    2.dışardan import et.
    boostrap:
    production->npm
    development->cdn
      css kopyala index.htmle yapıştır.(titledan önce)
      js copy-past body bitiş etiketinden hemen önce
    app.js 
      className:container

  ***Functional component
  neden function ve class component var
  props,state->class her ikisinide kullanabiliyoruz//değişicek alanlar
  functionda props kullanılıyor state kullanılamıyor//değişmiyecek alanlar


*/

