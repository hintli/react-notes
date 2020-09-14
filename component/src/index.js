import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
  ***Props
  Bir componentden diğer bir componente sabit verileri aktarmak istiyorsam props kullanırım
  propslar sabit veri olduğu için uygulmamı çalıştırdığımda tekrar tekrar render edilmeyecek
  Örnek:Appda sabit veriler tanımlayıp can componentine gönder
  App.js
    import can
    const title//return önce
    <Can baslik={title} aciklama={description}/>
  Can.js 
    this.props//const{baslik,aciklama} = this.props
    //this bu componenti yani canı temsil ediyor.
    //componentin içinde props olduğu için ulaşabiliyoz
    <h1>{this.props.aciklama}

    **Props:Dizi elemanlarını gönder
    App.js
      const dizim=[
        {title:"Hiper",description:React},//dizi elemanı bir obje
        {title:"Dİper",description:React}
      ]
      <Can title:{dizim[0].title} />//3 kere can componenti geçicez
     Can.js
      //bir şey değiştirme aynıları 3 defa çalışcak

    ***React Developer Tools(react,redux)
      //components->sayfayı incele

    ***Ara Katman ile dizi elemanı gönderme
      //Dizimde 100 tane eleman olsa 100 kere </Can> mı yazcaktım
      //Dizimi Arakatmana yollayıp orada dizimin elemanlarını dönüp cana yolluycam
      //key problemi alıcak

      App.js 
        import Arakatman
        <Arakatman dizim={dizim} />
      Arakatman.js
      import Can
        <div> { //içinde dönüyoz foreach gibi map
          this.props.dizim.map(dizim=>
            <Can baslik={dizim.title} />)
        }
      Can.js

      ***Key Nedir?
        /*render
        const elements=this.pro...
        return div {element}*\//böylede olur

        //app componenti dizim id:1
        //arakatman <can key={dizim.id}


      ***PropTypes
      //dizimin ya da componentimin ne şekilde geldiğini bilmek isteyebilirim(int,array,string)
      //functional,stateless componentlesde static kontrolü yapammıyoz

      Arakatman.js
        import PropTypes
        static propTypes = {dizim: PropTypes.array, name: PropTypes.string}

        //functional componentler için
        Arakatman.propTypes={}
      
      ***IsRequired
        //props girilmesi zorunluysa
        PropTypes.array.isRequired

        //ikiside olabilir
        PropTypes.oneOftype([
          PropTypes.number,
          PropTypes.string
        ])

        ***ShapePropTypes
        //Arakatman baslik aciklama yerine tüm dizimin elemanlarını can componentine yollucam
        can key={dizim.id} newsData={dizim}
        //default prop tanımlama
        static defaultProps={
          name:"Canan"//Arakatmana name değeri yollanmazsa canan olur default olarak
        }

        can.js//proptypesları burda tanımla
          PropTypes.shape({
            title:PropTypes.string,
            description:PropTypes.string
          })
          const {title,description} = this.props.newsData


        ***Constructor//bir class oluşturulduğunda otomatik olarak ilk çalışan method (ctor)
         constructor(props)
            super()//component classından inherit alıyor. cana has bir şeyler yazmak istersek super yazarız
            console.log(props)


        ***Event ve Context
        //event bind etme-
        butona tıkladığımızda bir aksiyon alınmasını istiyoz
        ya da inputa değer girildiğinde kaydedilmesini istiyoruz.
        //dizi render içinde olduğu için görmedi import altına aldım
        //propslar tekrar tekrar render edilmediği için göremedik tarayıcıda eklediğimiz objeyi
        //tarayıcıda anında değişiklik istiyorsak state ile yapmalıyız.

        App.js
          addNews() 
            console.log ekledim
            dizim.push({
              id:4,
              title:muhtesem
            })//yeni bir obje ekliyoz
          Arakatman addNews={this.addNews}
        Arakatman.js
          Form addNews={this.props.addNews}
        Form.js
          addButton() this.props.addNews();
          render-return
          button onClick={this.addButton.bind(this)} Ekle
          //bindi bağlamalıyımki 3.partide ben bunu kullanabiliyim

          //App componentinden Form componentine müdahale edebilmek için önce
          Arakatman componentine sonra form componentine müdahale etmek lazım.
          //Formdan Arakatmana arakatmandan appe ulaştım
          //butona tıkladığımda yeni bir dizi elemanı ekleyip tarayıcıda 
          gösterebilir miyim?

          ***Constructor Arrow Function ve JSX İçinde Binding
          //sag taraftaki eşitlik sol tarafa eşitlenir
          //form componenti her yüklendiğinde this.addButton bind edilmiş haline eşit olacak
          1-ctor(props) {super(props) this.addButton=this.addButton.bind(this)}//önerilen
          2-arrow function
            addButton = () => { this.props.addnews();
          3-onClick={ () =>  this.addButton()

        ***State //herhangi bir anda değeri değişen değerleri tutan js objesidir
        app.js
        //es6 öncesi
            1-constructor(props){super(props)
              this.state={
                name:"can"
              }  
            }
            h1 {this.state.can}
        //es6 sonrası
        Component altına
            state={}

        ***SetState //state değerini güncelleme-setState bu state değişti browser
        //react sadece değişen tarafı render ediyor.
        butona tıkladığında can canan olucak
        changeName(){this.setState({name:"Canan"})}
        buton onClick={this.changeName.bind(this)}

        //uygulama
        buton(1 azalt) sayi buton(1 arttır)
        App
            <Counter/>
        Counter
            state
            decrement setState-
            increment setState+

            h1 number
            button -
            button +

        ***StateFull StateLess
        Footer
        class Footer extends Component//render edilsin statefull
            const Footer = () => //tekrar render edilmesin stateless






*/
