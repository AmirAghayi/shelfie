import React, { Component } from 'react';
import './Form.css';
import preview from './Image/preview.jpeg';
import axios from 'axios';

class Form extends Component{
   constructor(){
      super();

      this.state = {
         imgUrl: '',
         productName: '',
         price: ''
      }

      this.handleUrlChange = this.handleUrlChange.bind (this);
      this.handleNameChange = this.handleNameChange.bind (this); 
      this.handlePriceChange = this.handlePriceChange.bind (this);    
      this.createProduct = this.createProduct.bind(this);   
      this.handleCancel = this.handleCancel.bind(this);

   }



   componentDidUpdate(props){
      if(props !== this.props){
          
      }
   }


resetState = () => {
   this.setState({
         imgUrl: '',
         productName: '',
         price: ''
   })
}


handleUrlChange (event) {
   this.setState({
      imgUrl: event.target.value
   });
}


handleNameChange(event) { 
   this.setState({
   productName: event.target.value
});
}


handlePriceChange(event){ 
   this.setState({
   price: event.target.value
});}

createProduct(){
   const {imgUrl, productName, price} = this.state;
   const {getProducts} = this.props;
console.log('the values', this.state)
   const product = {
       imgUrl,
       productName,
       price
   }

   axios.post('/api/products', product).then(response => {
       getProducts();
   });
   this.resetState();
}


handleCancel(event){
   event.preventDefault();
   this.setState({
      imgUrl: '',
      productName: '',
      price: ''
   });
}




render(){
    return(
        <div className="Form">

            <img 
            className="Preview"
            src={this.state.imgUrl ? this.state.imgUrl :  preview}
            alt="product-image" />

             <p className="FormInput1">
                Image URL: 
                <input 
                type="text"
                placeholder="ImageURL"
                value={this.state.imgUrl}
                onChange={this.handleUrlChange}
                ></input>
             </p>
            
             <p className="FormInput2">
                Product Name: 
                <input
                type="text"
                placeholder="Product Name"
                value={this.state.productName}
                onChange={this.handleNameChange}
                ></input>
             </p>

             <p className="FormInput3">
                Price: 
                <input
                type="number"
                placeholder="Price"
                value={this.state.price}
                onChange={this.handlePriceChange}
                ></input>
             </p>

             <button 
             className="CancelButton"
             type="cancel"
             onClick={this.handleCancel}
             >Cancel</button>

             <button 
             className="AddButton"
             type="submit"
             onClick={this.createProduct}
             >Add to Inventory</button>

        </div>
    );
}



}



export default Form;