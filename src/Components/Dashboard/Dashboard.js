import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';
import axios from 'axios';



class Dashboard extends Component{
    constructor(){
        super();

    }



    removeProduct(id){
        const {getProducts} = this.props;

        axios.delete(`/api/product/ ${id}`)
        .then(response => {
            getProducts();
        })
    }




render(){
    const mappedInvList = this.props.inventory.map((product, index) => {
        return <Product key={ product.id } product={ product } removeProduct={this.removeProduct}/>
    });

    return(
        <div className="Dashboard">
             {mappedInvList}
        </div>
    );
}



}



export default Dashboard;