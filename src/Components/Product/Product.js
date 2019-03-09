import React, { Component } from 'react';



export default function product(props){
    const {removeProduct, product} = props;
    return (
        <div className="Product-Card">
            <img src={product.img}/>
            <h1>{product.name}</h1>
            <button onClick={() => removeProduct(product.id)}>
            Delete
            </button>

        </div>
    );
}