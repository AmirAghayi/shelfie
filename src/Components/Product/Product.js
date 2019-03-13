import React from 'react';
import './Product.css';



export default function product(props){
    const {removeProduct, product} = props;

    return (
        <div className="Product-Card">

        <span>
            <img
                className="image" 
                src={product.img}
                alt='product'
            />
        </span>
            
        <span className="product_info">
            <h1 className="product_name">{product.name}</h1>
                <h2 className="price"> ${product.price} </h2>
                <button 
                className="delete_button"
                onClick={() => removeProduct(product.id)}>
                Delete
                </button>

                <button 
                className="Edit_button"
                > Edit
                </button>
        </span>
           

        </div>
    );
}