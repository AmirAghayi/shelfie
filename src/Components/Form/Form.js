import React, { Component } from 'react';
import './Form.css';
import { IncomingMessage } from 'http';

class Form extends Component{





render(){
    return(
        <div className="Form">

            <img src="./Image/preview.jpeg" />

             <p className="FormInput1">
                Image URL: 
                <input></input>
             </p>
            
             <p className="FormInput2">
                Product Name: 
                <input></input>
             </p>

             <p className="FormInput3">
                Price: 
                <input></input>
             </p>

             <button className="CancelButton">Cancel</button>

             <button className="AddButton">Add to Inventory</button>

        </div>
    );
}



}



export default Form;