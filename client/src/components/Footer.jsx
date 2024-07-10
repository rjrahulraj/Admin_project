import '../styles/Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="footer-about">
      <h2>TechVersity</h2>
      <p>Your gateway to mastering web and mobile development. Join us and unlock your potential!</p>
    </div>
    
    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>Email: info@techversity.com</p>
      <p>Phone: +123-456-7890</p>
      <div className="social-media">
        <Link href="#"><FaFacebook size="30px" /></Link>
        <Link href="#"><FaTwitterSquare size="30px"  /></Link>
        <Link href="#"><FaLinkedin size="30px" /></Link>
        <Link href="#"><FaInstagramSquare size="30px"  /></Link>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 TechVersity. All rights reserved.</p>
  </div>
</footer>

  )
}

export default Footer;
