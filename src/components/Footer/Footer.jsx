import React from 'react';

import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn  } from 'react-icons/fa';
import images from '../../constants/images';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__grid-wrap">
                    <div className="footer__widget">
                        <a href="#"><img src={images.logo} alt="logo" /></a>
                        <p className='footer__text'>We are the leading architect and <br /> interior design firm in the world.</p>
                        <div className="footer__social-wrap">
                            <a href="#" className='footer__social-link'>
                                <FaFacebookF />
                            </a>
                            <a href="#" className='footer__social-link'>
                                <FaInstagram />
                            </a>
                            <a href="#" className='footer__social-link'>
                                <FaTwitter />
                            </a>
                            <a href="#" className='footer__social-link'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <div className="footer__widget">
                        <h2 className='footer__widget-title'>Pages</h2>
                        <div className="footer__menu-links">
                            <a href="#" className='footer__link'>Style Guide</a>
                            <a href="#" className='footer__link'>Protected</a>
                            <a href="#" className='footer__link'>Licenses</a>
                            <a href="#" className='footer__link'>Changelog</a>
                            <a href="#" className='footer__link'>404</a>
                        </div>
                    </div>
                    <div className="footer__widget">
                        <h2 className='footer__widget-title'>Explore</h2>
                        <div className="footer__menu-links">
                            <a href="#" className='footer__link'>About Us</a>
                            <a href="#" className='footer__link'>Recent Blog</a>
                            <a href="#" className='footer__link'>Pricing Plan</a>
                            <a href="#" className='footer__link'>Our Projects</a>
                            <a href="#" className='footer__link'>Contact Us</a>
                        </div>
                    </div>
                    <div className="footer__widget">
                        <h2 className='footer__widget-title'>Contact</h2>
                        <div className="footer__menu-links">
                            <p className='footer__link-info'>53, East Birchwood Ave. Brooklyn, <br /> New York 11201, USA.</p>
                            <a href="#" className='footer__link'>contact@interno.com</a>
                            <a href="#" className='footer__link'>(123) 456 - 7890</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;