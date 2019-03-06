import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './Image/logo.png';



export default function header(){




   




    return (
        <div className="Header">
            <img 
            className="Image"
            src={logo}
            alt="logo"/>
            
            <p>SHELFIE</p>
            <div>
                <button className="NavBar1" type="button">Dashboard</button>

                <Link to="/Form">
                   <button 
                   className="NavBar2" 
                   type="button"
                   >Add Inventory</button>
                </Link>
                
            </div>
            
            
        </div>


    );
}