import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export default function product(props) {
  const { removeProduct, product } = props;

  return (
    <div className="Product-Card">
      <span>
        <img className="image" src={product.img} alt="product" />
      </span>

      <span className="product_info">
        <h1 className="product_name">{product.name}</h1>
        <h2 className="price"> ${product.price} </h2>
        <button
          className="delete_button"
          onClick={() => removeProduct(product.id)}
        >
          Delete
        </button>

        <Link to={`/edit/${product.id}`}>
          <button className="Edit_button"> Edit</button>
        </Link>
      </span>
    </div>
  );
}
