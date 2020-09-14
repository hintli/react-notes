import React,{ Component } from 'react';
import './App.css';
import Contacts from './Contacts';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.addContact=this.addContact.bind(this);
  }
state={
  contacts:[{
    name:'Can',
    phone:'0555 555 55 55'
  },
  {
    name:'Tuba',
    phone:'0555 555 55 54'
  }

]
};

addContact(contact)
{
  console.log(contact);

  const{contacts}=this.state;
  contacts.push(contact);

  this.setState(
    {
      contacts:contacts
    }
  );
}

  render()
  {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
 
}

export default App;
