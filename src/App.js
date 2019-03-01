import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Header />
           <Dashboard />
           <Form />
      </div>
    );
  }
}

export default App;
