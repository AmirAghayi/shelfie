import React, { Component } from 'react';
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
            
        </div>


    );
}