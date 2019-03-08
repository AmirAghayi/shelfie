import React, { Component } from 'react';
import Route from './Routes';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';
import axios from 'axios';




class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory:[]
    };

  }

componentDidMount(){
 this.getProducts();
}



getProducts = () => {
  axios.get('/api/inventory')
  .then( response => {
     this.setState({
       inventory: response.data
      });
    });
  }
  

  

  render(){
    return (
      <div className="App">
           <Header />
           <Form />
           <Dashboard 
           inventory = {this.state.inventory}
           />
      </div>
    );
  }
}


    
  



  export default App;




