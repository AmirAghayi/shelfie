import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';
import axios from 'axios';



class Dashboard extends Component{




render(){
    const mappedInvList = this.props.inventory.map((product, index) => {
        return <Product key={ product.name } product={ product }/>
    });

    return(
        <div className="Dashboard">
             {mappedInvList}
        </div>
    );
}



}



export default Dashboard;