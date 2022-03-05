import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__hero">
                <div className="container">
                    <div className="header__hero-content">
                        <h1 className='header-h1'>Let's Create Your Dream Interior</h1>
                        <p className='header-p'>The world needs innovators and problem solvers who turn
                        challenges into greater opportunities.</p>
                        <button type='button' href="#" className='button'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;