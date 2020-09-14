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
***Uygulamaya Giriş
  Filter By Name Or Phone
    Can Boz
    Tuba Tekin
  Name
  Phone
  Add

***Listeleme
  App.js
    <Contacts
  Contacts.js
    <List
  List.js
    rcc
    input Search
      ul
        li <span
    //List.css span->display block//yan yana float-left kullanabilmek için
      span.phone span.name float.left,right
      span.clearFix float:clear.both;

  Form.js

***Componentlerin Eklenmesi
  Form.js
    form
      input name
      input phone
  App.css
    text-align
    width
    margin

    button

***State ile Yaptığımız İşlemler
  //App state oluştur props ile contact sonra 
    props ile contactdan liste yollamak

  App.js 
    state contacts:[]
    <Contacts contacts={this.state.contacts}
  Contacts.js
    <Lİst this.props.contacts
  List.js
    PropTypes
    this.props.contacts.map(contact => 
      li-key span {contact.name})

***Statei Nasıl Yazarız
   List.js
      constructor //bind et ->onChange
      onChange(e)//stateimize değeri atıyoz
          setState e.target.name:e.target.value//input name
      form
      input onChange value={this.state.name}//inputtan değer alıp state bascaz

***İçerdeki Komponenetten Dışa Datayı Göndermek
    en aşağıdan en yukarıya gidicez. 
    Form componentindeki datayı Appe gönderme

    App.js
    constructor //bind et
      addContact 
      <Contacts addContact

    Contacts.js
      propTypes addContact:func
      Form addContact

    Form.js
      onChange
      onSubmit
        //url name otomatik dolmasın,değişme olmasın
        preventDefault//engelle default halini
        ...this.state//name ve phone dolmuş oluyor
        //propsundaki addContacti doldurucaz
        this.props.addContact
          ...this.state
        //setState ile boşalt

        //formumu app.jse yolluycam
        form onSubmit=onSubmit
      
        App.js
          addContact->contact
            push//bir sonrakine ekleme yapar
            setState
              contacts:contacts

***Search İşlemi
    

      c yazdığımda canı görmek istiyorum-filtreleme
    List.js
    
      state={
        filterText:''
      }
      onChangeFilterText
        //state güncellenmezse tek tek olur
        //girdiğim değerleri filtertexte atamalıyım
        setState
      //bu veri döncek
      filteredContacts .filter
      //c kaçıncı indexte indexOf 
          contact =>{ return contact indexOf} 
            filterText //-1e eşit olmadığı sürece
                          bana dönsün-herhangi bir şeye eşitse
      input value=state.FilterText
      




*/