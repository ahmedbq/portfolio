import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble/Bubble';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Bubble 
            name="name"
            alt="Ahmed's Picture"
            linkURL="linkURL"
          />
       </div>
    );
  }
}

export default App;
