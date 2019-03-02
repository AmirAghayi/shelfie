import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';



class Dashboard extends Component{





render(){
    return(
        <div className="Dashboard">
              <p> user should be able to see all of the products that have been added to the inventory</p>
              <Product />
        </div>
    );
}



}



export default Dashboard;