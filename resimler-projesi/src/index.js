import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './componenents/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
Projeye Giris
search=Ara
resimleri getir//unsplash

//Proje Kurulumu
create-react-app resim
app.js stateless
npm start
react-scripts start

//SearchBar

//Css verilmesi
semantic ui cdn->css min
input
ap-container(app.js)
app.css
  display//Flex
  justify-content//Yeri

flex:1

//State e Değer Atama
searchbar.js
  state
  inputChanged//setState
  input onChange=ınputChanged

//İkon Entegrasyonu
  button onClick SearchImage
  entera bastığımda onKeyPress e.key='Enter SearchImage çalıştır'//resimler gelsin

//App.js e parametre göndermek
  içteki componentden dıştaki componente değer gönderme
  app.js 
    onsearchımage
    searchbara props olarak gönder

  searchbar
    butona veya entera tıkladığımda app.js e gitmesi lazım
    this.props.onsearchımage e statei ata

//API ye Bağlanma
  app->query(car) ->api  api->json data-app

//Postman İle API a Bağlanma
  Header YOUR_ACCESS_KEY

//Axios Entegrasyonu
  npm master
  npm install axios --save
  app.js 
    import axios
    onsearchımage
      axios

    network/xhr

//Axios Devam
  app.js
  state images
  result.data.results//10 resim gelir->setState
  async-await//datayı çekerken kullancaz

  length..

//Componenentlerin Oluşturulması
<ImageList

//Gelen Datayı Listeleme
  app.js_>resimleri ımageliste props olarak geç
  ımagelist.js
    images.map

    flex-direction:column
    grid ile düzeltcez
    imagelist.css
      grid//alt alta geldi
      grid-templeta-column//column nasıl olcak repeat//otomatik olarak
      grid-gap//resimler arası boşluk
      grid-row-end//rowun sonuna ne kadar ekliyebilir

//createRef
  resimlerin yüksekliğine jsde ulaşma
    js->document.getelementbaytgname[0].clientHeight
    react->createRef

    ImageList
      Image

    load olduğunda dön
    myRef.clientHeight

//Gerekli Alanları Hesaplama
  grid 30->resmi 30 parçaya böl
  bana kaç tane span lazım
  imageList ->spanCount
  state spanCount
    gridRowEnd spanCount

//CSS Grid  

*/

