import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faTwitterSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import "./styles/footer.css"

function FooterContainer(){
    return(
        <div className="container">
        <p className='Paragraph'>
        Creating an online booking system for businesses who want to expand their global reach.
        </p>
        <div className="Inner">
        <FontAwesomeIcon icon={faFacebookSquare} size="lg"/>
        <FontAwesomeIcon icon={faTwitterSquare} size="lg"/>
        <FontAwesomeIcon icon={faInstagramSquare} size="lg"/>
        </div>
        </div>
    )
}
export default FooterContainer