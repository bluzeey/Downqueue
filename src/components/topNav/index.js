import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles/topnav.scss';
export default function TopNav(){
    return (
        <div className="Container">
        <img className="Image" src='/assets/images/logo.png' alt="logo"/>
        <li className="listItem"><NavLink className='navigation' to="/">HOME</NavLink ></li>
        <li className="listItem"><NavLink className='navigation' to="/contact">CONTACT</NavLink ></li>
        <li className="listItem"><NavLink className='navigation' to="/about">ABOUT</NavLink></li>
        <li className="listItem"><NavLink className='navigation' to="/login">LOGIN</NavLink></li>
        </div>
    )
}