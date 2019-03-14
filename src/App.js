import React, { Component } from 'react';
import Route from './Routes';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Header />
          {Route}    
      </div>
    );
  }
}

export default App;