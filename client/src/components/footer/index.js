import React from 'react';
import {Twitter,Facebook,Instagram,LinkedIn} from '@mui/icons-material/';
import "./footer.css"

export default function Footer(){
    return(
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="About">
                  <h6>About</h6>
                  <p className="text-justify">Downqueue is a social network which improves scheduling and meeting with different individuals</p>
                </div>

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
                    <li><a className="facebook" href="#"><Facebook style={{marginTop:'0.4em'}}/></a></li>
                    <li><a className="twitter" href="#"><Twitter style={{marginTop:'0.4em'}}/></a></li>
                    <li><a className="dribbble" href="#"><Instagram style={{marginTop:'0.4em'}}/></a></li>
                    <li><a className="linkedin" href="#"><LinkedIn style={{marginTop:'0.4em'}}/></a></li>   
                  </ul>
                </div>
              </div>
            </div>
          </footer>
    )
}
