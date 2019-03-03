import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory:[]
    }

  }

  // axios.get('/products').then(response => {

  // })


  

  render(){
    return (
      <div className="App">
           <Header />
           <Form />
           <Dashboard />
      </div>
    );
  }
}


    
  



  export default App;




