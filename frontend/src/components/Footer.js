import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <a href="/shop">Shop</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
      <div className="footer-icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
      </div>
      <p> our project website.</p>
    </footer>
  );
}

export default Footer;
