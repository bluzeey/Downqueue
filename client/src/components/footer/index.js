import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faTwitterSquare,faInstagramSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./styles/footer.scss"

export default function Footer(){
    return(
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="About">
                  <h6>About</h6>
                  <p className="text-justify">Downqueue is a social network which improves scheduling and meeting with different individuals</p>
                </div>

                {/*
                Commenting out if required for the future
                <div>
                  <h6>Categories</h6>
                  <ul className="footer-links">
                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                    <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                    <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                  </ul>
                </div>*/}

                <div>
                  <h6>Quick Links</h6>
                  <ul className="footer-links">
                    <li><a href="http://downqueue.com/about/">About Us</a></li>
                    <li><a href="http://downqueue.com/contribute-at-downqueue/">Contribute</a></li>
                    <li><a href="http://downqueue.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="http://downqueue.com/sitemap/">Sitemap</a></li>
                  </ul>
                </div>
              </div>
            </div>
              <hr/>

            <div>
              <div>
                <div className="copyright">
                  <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
              <a href="#"> Downqueue</a>.
                  </p>
                </div>

                <div>
                  <ul className="social-icons">
                    <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebookSquare} size="lg"/></a></li>
                    <li><a className="twitter" href="#"><FontAwesomeIcon icon={faTwitterSquare} size="lg"/></a></li>
                    <li><a className="dribbble" href="#"><FontAwesomeIcon icon={faInstagramSquare} size="lg"/></a></li>
                    <li><a className="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a></li>   
                  </ul>
                </div>
              </div>
            </div>
          </footer>
    )
}
