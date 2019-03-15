import React, { Component } from "react";
import "./Form.css";
import preview from "./Image/preview.jpeg";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgUrl: "",
      productName: "",
      price: "",
      edit: false
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      const { id } = this.props.match.params;
      this.getProduct(id);
    }
  }

  resetState = () => {
    this.setState({
      imgUrl: "",
      productName: "",
      price: ""
    });
  };

  handleUrlChange = event => {
    this.setState({
      imgUrl: event.target.value
    });
  };

  handleNameChange = event => {
    this.setState({
      productName: event.target.value
    });
  };

  handlePriceChange = event => {
    this.setState({
      price: event.target.value
    });
  };

  createProduct = () => {
    const { imgUrl, productName, price } = this.state;
    const { getProducts } = this.state;
    const product = {
      imgUrl,
      productName,
      price
    }

    axios.post('api/products', product)
    .then(response => {
         this.props.history.push('/');
    });
    
    this.resetState();
  };



  handleCancel = event => {
    event.preventDefault();
    this.setState({
      imgUrl: "",
      productName: "",
      price: ""
    });
  };

  getProduct = id => {
    axios.get(`/api/product/${id}`).then(response => {
       console.log(response)
      this.setState({
        imgUrl: response.data.img,
        productName: response.data.name,
        price: response.data.price,
      });
    });
  };

updateProduct = () => {
   const {id} = this.props.match.params;
    axios.put(`/api/update/${id}`, this.state)
    .then(response => {
       this.props.history.push('/');
    });
}






  render() {
    return (
      <div className="Form">
        <img
          className="Preview"
          src={this.state.imgUrl ? this.state.imgUrl : preview}
          alt="product-image"
        />

        <p className="FormInput1">
          Image URL:
          <input
            type="text"
            placeholder="ImageURL"
            value={this.state.imgUrl}
            onChange={this.handleUrlChange}
          />
        </p>

        <p className="FormInput2">
          Product Name:
          <input
            type="text"
            placeholder="Product Name"
            value={this.state.productName}
            onChange={this.handleNameChange}
          />
        </p>

        <p className="FormInput3">
          Price:
          <input
            type="number"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
        </p>

        <button
          className="CancelButton"
          type="cancel"
          onClick={this.handleCancel}
        >
          Cancel
        </button>

          {
             this.props.match.params.id 
             ?
             <button
             className="AddButton"
             type="submit"
             onClick={this.updateProduct}> Save Changes </button>
            : 
            <button
             className="AddButton"
             type="submit"
             onClick={this.createProduct}> Add To Inventory </button>
          }
      </div>
    );
  }
}

export default Form;
