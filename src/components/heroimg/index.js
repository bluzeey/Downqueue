 import React from 'react';
 import './styles/heroimg.scss';

 export default function HeroImg(){
     return(
         <div className="Heroimg-container">
             <div className="Heroimg-inner">
             <h1 className="Heroimg-title">Meet New People!</h1>
             <p className="Heroimg-paragraph">
                 Organize schedule, appointments to meet new strangers!
             </p>
             <button className="Heroimg-button">Get Started &#10142;</button>
             </div>
             <img className="Heroimg-img" src='assets/images/hero-image.jpg' alt='organize'/>
         </div>
     )
 }
