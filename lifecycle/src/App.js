import React ,{Component} from 'react';
import Child from "./Child";
import './App.css';

class App extends Component {
  state=
  {
    tl:0
  };
  

  change = (e) =>
  {
    this.setState({
      tl:e.target.value
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate',nextProps,nextState)
    return (nextState.tl % 5) === 0;
    
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate',nextProps,nextState)
  }
 
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate',prevProps,prevState)

  }
  
  
  
  
  render()
  {
    console.log('render');
    return (
      
      <div className="App">
     <input name="tl" id="tl" onChange={this.change}/>
     <br/>
     <br/>

     Her Portakal 5 tl
     <br/>
     {this.state.tl / 5} tane portakal alabilirsin
       
      </div>
    );
  }
  
}

export default App;
