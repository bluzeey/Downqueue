 import React from 'react';
 import { NavLink } from 'react-router-dom';
 import './heroimg.css';

 export default function HeroImg(){
     return(
         <div className="Heroimg-container">
             <div className="Heroimg-inner">
             <h1 className="Heroimg-title">Meet New People!</h1>
             <p className="Heroimg-paragraph">
                 Organize schedule, appointments to meet new strangers!
             </p>
             <NavLink className="Heroimg-button" to="/signup">Get Started &#10142;</NavLink>
             </div>
             <img className="Heroimg-img" src='assets/images/hero-image.jpg' alt='organize'/>
         </div>
     )
 }
