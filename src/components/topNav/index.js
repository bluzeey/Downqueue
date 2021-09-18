import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles/topnav.css';
export default function TopNav(){
    return (
        <div>
        <img src='/assets/images/logo.png' alt="logo"/>
        <li><NavLink className='navigation' to="/">HOME</NavLink ></li>
        <li><NavLink className='navigation' to="/contact">CONTACT</NavLink ></li>
        <li><NavLink className='navigation' to="/about">ABOUT</NavLink></li>
        <li><NavLink className='navigation' to="/login">LOGIN</NavLink></li>
        </div>
    )
}