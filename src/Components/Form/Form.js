import React, { Component } from 'react';
import './Form.css';
import preview from './Image/preview.jpeg';
import axios from 'axios';

class Form extends Component{
   constructor(){
      super();

      this.state = {
         imageUrl: '',
         productName: '',
         price: ''
      }

    this.handleUrlChange = this.handleUrlChange.bind (this);
    this.handleNameChange = this.handleNameChange.bind (this); 
    this.handlePriceChange = this.handlePriceChange.bind (this);    
    this.handleAdd = this.handleAdd.bind(this);   
   this.handleCancel = this.handleCancel.bind(this);
   }


handleUrlChange(event){
   this.setState({
      imageUrl: event.target.value
   });
}


handleNameChange(event){ 
   this.setState({
   productName: event.target.value
});
}


handlePriceChange(event){ 
   this.setState({
   price: event.target.value
});}

handleAdd(event){ 
   const {imageUrl, productName, price} = this.state;
   axios.post('/api/products', {
      imageUrl, 
      productName, 
      price
   }).then(() =>{
      this.setState({
         imageUrl: '',
         productName: '',
         price: ''
      });
   }).catch(() => {
      console.log('Item Failed to Add.')
   })
}


handleCancel(event){
   event.preventDefault();
   this.setState({
      imageUrl: '',
      productName: '',
      price: ''
   });
}




render(){
    return(
        <div className="Form">

            <img 
            className="Preview"
            src={preview}
            alt="product-image" />

             <p className="FormInput1">
                Image URL: 
                <input 
                type="text"
                placeholder="ImageURL"
                value={this.state.imageUrl}
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
             onClick={this.handleAdd}
             >Add to Inventory</button>

        </div>
    );
}



}



export default Form;