 import React from 'react';
 import './styles/heroimg.css';

 export default function HeroImg(){
     return(
         <div className="Container">
             <div className="Inner">
             <h1 className="Title">Meet New People!</h1>
             <p className="Paragraph">
                 Organize schedule, appointments to meet new strangers!
             </p>
             <button className="Button">Get Started &#10142;</button>
             </div>
             <img src='assets/images/hero-image.jpg' alt='organize'/>
         </div>
     )
 }
