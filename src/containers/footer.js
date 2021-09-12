import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faTwitterSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/footer/';

function FooterContainer(){
    return(
        <Footer>
        <Footer.Paragraph>
        Creating an online booking system for businesses who want to expand their global reach.
        </Footer.Paragraph>
        <Footer.Inner>
        <FontAwesomeIcon icon={faFacebookSquare} size="lg"/>
        <FontAwesomeIcon icon={faTwitterSquare} size="lg"/>
        <FontAwesomeIcon icon={faInstagramSquare} size="lg"/>
        </Footer.Inner>
        </Footer>
    )
}
export default FooterContainer