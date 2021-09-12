 import React from 'react';
 import HeroImg from '../components/heroimg/';

 export default function HeroImgContainer(){
     return(
         <HeroImg>
             <HeroImg.Inner>
             <HeroImg.Title>Meet New People!</HeroImg.Title>
             <HeroImg.Paragraph>
                 Organize schedule, appointments to meet new strangers!
             </HeroImg.Paragraph>
             <HeroImg.Button>Get Started &#10142;</HeroImg.Button>
             </HeroImg.Inner>
             <HeroImg.Image src='assets/images/hero-image.png' alt='organize'/>
         </HeroImg>
     )
 }