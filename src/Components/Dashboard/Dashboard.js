import React, { Component } from 'react';
import Product from '../Product/Product';



class Dashboard extends Component{





render(){
    return(
        <div className="Dashboard">
              <p> This is the Dashboard!</p>
              <Product />
        </div>
    );
}



}



export default Dashboard;