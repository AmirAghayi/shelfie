import React, { Component } from 'react';
import Route from './Routes';
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
      inventory:[
        {
          imageUrl: "https://www.target.com/p/men-s-joseph-captoe-dress-shoe-goodfellow-co-153/-/A-52687443",
          name: "Dress Shoes",
          price: "75" 
        },
        {
          imageUrl: "https://www.jcrew.com/p/mens_category/shoes/exclusives/new-balance-x-jcrew-999-night-sky-sneakers/J8492?color_name=blue-black",
          name: "sneakers",
          price: "45" 
        },
        {
          imageUrl: "https://www.famousfootwear.com/en-US/Product/1040959/Timberland/_/Womens+Dausette+Lace+Up+Sneaker+Boot.aspx",
          name: "College shoes",
          price: "79" 
        }
      ]
    }

  }

  // axios.get('/products').then(response => {

  // })


  

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




