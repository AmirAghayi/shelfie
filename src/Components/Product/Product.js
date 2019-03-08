import React, { Component } from 'react';



export default function product(props){
    return (
        <div>
            <p>{props.product.imageUrl}</p>
            <p>{props.product.productName}</p>
            <p>{props.product.price}</p>
        </div>
    );
}