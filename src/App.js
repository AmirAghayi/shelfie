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
      inventory:[],
      currentlySelected: {}
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
           <Form 
           newInventory = {this.getProducts}
           currentlySelected = {this.state.currentlySelected}
           getProducts = {this.getProducts}

           />
           <Dashboard 
           inventory = {this.state.inventory}
           getProducts = {this.getProducts}
           />
      </div>
    );
  }
}


    
  



  export default App;




