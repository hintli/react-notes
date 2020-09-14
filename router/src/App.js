import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link,NavLink, Redirect,Switch} from 'react-router-dom';



const news = ({match}) => {
  // console.log(route);
return(<h1>Yeni Sayfa:{match.params.id}</h1>)
}

const Profile = () => {
  // console.log(route);
return(<h1>Profile: Can Boz</h1>)
}
const Error = () => {
  // console.log(route);
return(<h1>404 Not Found</h1>)
}

class App extends Component {
state={
  loggedIn:false

};
ClickButton = () =>
{
  this.setState(prevState => ({
    loggedIn:!prevState.loggedIn
  }))
};

  render() {
    return (
      <Router>
      <div>
        <NavLink activeClassName="can" to="/">Anasayfa</NavLink> <br/>
        <NavLink activeClassName="can" to="/iletisim">İletisim</NavLink> <br/>
        <NavLink activeClassName="can" to="/news/6">Yeni Sayfa</NavLink> <br/>
        <NavLink activeClassName="can" to="/profile">Profile</NavLink>
        
        <br/><br/>

        <input type="button" onClick={this.ClickButton} value={this.state.loggedIn ? 'Log out' : 'Login'}/>
      <Switch>
        <Route path="/" exact render={
          () => 
          {
            return (<h1>Anasayfa</h1>  )
          }
        }/>

        <Route path="/iletisim" exact strict render={
          () => 
          {
            return (<h1>İletisim</h1>  )
          }
        }/>
        <Route path="/news/:id" exact strict component={news}/>
        <Route path="/profile" exact strict render={ () => (

          this.state.loggedIn ? (<Profile/>) :(<Redirect to="/" />)
        )}/>
        <Route component={Error}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;