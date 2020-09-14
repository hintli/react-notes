import React, { Component } from 'react';

import Arakatman from "./Arakatman";
import Counter from "./Counter";
import Footer from "./Footer";


import './App.css';


// const dizim=[{
//   id:1,
//   title:"Hiper",
//   description:"React"
// },
// {
//   id:2,
//   title:"Süper",
//   description:"React Öğrenmek"
// },
// {
//   id:3,
//   title:"Hiper Süper",
//   description:"Reactın kendisi"
// }

// ]

class App extends Component {

  // state = {
  //   name :"Can"
  // }

  // addnews()
  // {
  //   console.log("Ekledim");
  //   dizim.push({

  //     id:4,
  //     title:'Muhteşem',
  //     description:'Muhteşem Ötesi'
  //   });
  //   console.log(dizim);
  // }

  // changeName()
  // {
  //   console.log(this.state);
  //   this.setState(
  //     {
  //       name :"Canan"
  //     }
  //   )
  // }
  render()
  {        
    return (
      
      <div className="App">
        
        {/* <h1>{this.state.name}</h1>
        {/* <Arakatman dizim={dizim} addnews={this.addnews} /> */}
        {/* <button onClick={this.changeName.bind(this)}>Değiştir</button> */} 
        <Counter/>
        <Footer/>
       
      </div>      
    );
  }
 
}

export default App;
