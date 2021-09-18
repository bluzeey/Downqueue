import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faTwitterSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import "./styles/footer.css"

export default function Footer(){
    return(
        <div className="Footer-container">
          <p className='Footer-paragraph'>
          Creating an online booking system for businesses who want to expand their global reach.
          </p>
          <div className="Footer-inner">
          <FontAwesomeIcon icon={faFacebookSquare} size="lg"/>
          <FontAwesomeIcon icon={faTwitterSquare} size="lg"/>
          <FontAwesomeIcon icon={faInstagramSquare} size="lg"/>
          </div>
        </div>
    )
}
