import React, { Component } from "react";
import Product from "../Product/Product";
import "./Dashboard.css";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios.get("/api/inventory").then(response => {
      this.setState({
        inventory: response.data
      });
    });
  };

  removeProduct = id => {
    axios.delete(`/api/products/${id}`).then(response => {
      this.getProducts();
    });
  };

  render() {
    const mappedInvList = this.state.inventory.map((product, index) => {
      return (
        <Product
          key={product.id}
          product={product}
          removeProduct={this.removeProduct}
        />
      );
    });

    return <div className="Dashboard_cards">{mappedInvList}</div>;
  }
}

export default Dashboard;
