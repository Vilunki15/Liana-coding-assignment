import React from "react";
import "./App.sass";
import { 
  BiLogoFacebook as Facebook,
  BiLogoTwitter as Twitter,
  BiLogoLinkedin as LinkedIn 
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
        <div  className="footer">
            <div className="footer-container-left">
              <h2>Liana Technologies</h2>
              <h4>Sales and inquiries</h4>
              <p>Email: sales@lianatech.com <br/>
              Phone: +358 10 387 7053</p>
            </div>
            <div className="footer-container-right">
              <ul>
                    <li><a href="/">Company</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Intranet</a></li>
                </ul>
                <ul className="social-links">
                  <li><a href="/"><Facebook /></a></li>
                  <li><a href="/"><Twitter /></a></li>
                  <li><a href="/"><LinkedIn /></a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;