import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { About, Contact } from '../../pages';

import images from '../../constants/images';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbar__content-wrap">
                <div className="nav__container">
                    <div className="navbar__logo">
                        <a href="#"><img src={images.logo} alt="logo" /></a>
                    </div>
                    <div className="nav__menu">
                        <a href="#" className='nav__link nav__link-current'>Home</a>
                        <a href="#" className='nav__link'>About Us</a>
                        <a href="#" className='nav__link'>Services</a>
                        <a href="#" className='nav__link'>Pages</a>
                        <a href="#" className='nav__link'>Contact Us</a>
                    </div>
                    <div className="nav__icons">
                        {toggleMenu ? <RiCloseLine color='#333' fontSize={30} onClick={() => setToggleMenu(false)} />
                                    : <RiMenu3Line color='#333' fontSize={30} onClick={() => setToggleMenu(true)} />}
                    </div>
                </div>
            </div>
            <div className="nav__outline-menu">
                {toggleMenu && (
                    <div className="nav__outline-container scale-up-hor-right">
                        <div className="container">
                            <div className="nav__outline-menu_wrap">
                                <a href="#" className='nav__link nav__link-current'>Home</a>
                                <a href="#" className='nav__link'>About Us</a>
                                <a href="#" className='nav__link'>Services</a>
                                <a href="#" className='nav__link'>Pages</a>
                                <a href="#" className='nav__link'>Contact Us</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;