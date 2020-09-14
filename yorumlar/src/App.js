import React from 'react';
import faker from "faker";
import Card from "./Card";

import Comment from "./Comment";


 const App = () => {
  return (
    <div className="ui comments" style={{
      paddingTop:'10px',
      paddingLeft:'15px'
    }}>
      <Card>
      <Comment name="Can Boz" timeAgo="2" star="5" avatar={faker.image.avatar()} comment="React Mükemmel" />



      </Card>
      <Card>
      <Comment name="Tuba Tekin" timeAgo="3" star="4" avatar={faker.image.avatar()} comment="React Efsane"/>



      </Card>
    </div>
  )
}

export default App;
