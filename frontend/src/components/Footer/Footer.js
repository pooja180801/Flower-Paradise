import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2>ABOUT US</h2>
                <p>Welcome to Flower Paradise, where each bouquet is a masterpiece crafted to enchant and inspire. Whether celebrating a special occasion, expressing love, or brightening someone's day, our array of choices—from classic roses to wildflowers and orchids—is designed to reflect nature's artistry and heartfelt sentiments. Explore our collection and let Flower Paradise convey your emotions through the timeless language of flowers.</p>
                <div className="social-icons-container">
                <FaFacebook className='social-icons'/>
                <FaXTwitter className='social-icons'/>
                <FaLinkedin className='social-icons'/>
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94-776-564-7865</li>
                    <li>contact@Flowerparadise.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className='footer-copyright'>Copyright 2024 &copy; FlowerParadise.com - All Right Reserved</p>
      
    </div>
  )
}

export default Footer
