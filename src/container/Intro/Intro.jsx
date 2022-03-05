import React from 'react';

import images from '../../constants/images';
import './intro.css';

const Intro = () => {
    return (
        <div className='intro'>
            <div className="container">
                <div className="intro-grid-wrap">
                    <div className="intro-content">
                        <h2 className='intro__heading'>We Tackle The Most Challenging Designs</h2>
                        <p className='header-p'>The world needs innovators and problem solvers who turn challenges into greater opportunities. We have
                        an insatiable curiosity about transformative trends challenging the status.</p>
                        <div className="intro__quick-link">
                            <div className="intro__icon-wrap">
                                <img src={images.callIcon} alt="callIcon" />
                            </div>
                            <div className="intro__call-wrap">
                                <p className='intro__phone-number'>012345678</p>
                                <p className='intro__phone-info'>Call Us Anytime</p>
                            </div>
                        </div>
                        <button type='button' className='button'>Get Free Estimate</button>
                    </div>
                    <div className="intro__image-wrap">
                        <img src={images.introImg} alt="introHero" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;