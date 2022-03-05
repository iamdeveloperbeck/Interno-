import React from 'react';

import images from '../../constants/images';
import './service.css';

const Service = () => {
    return (
        <div className='service'>
            <div className="container">
                <div className="service__content">
                    <div className="service__grid">
                        <div className="service__item">
                            <h2 className='service__title'>Interior Design</h2>
                            <p className='sevice__paragraph'>Enhancing the interior to achieve a healthier environment for the people using right space.</p>
                            <div type='button' className='link__button'>
                                <p className='link__button-text'>View More</p>
                                <img src={images.arrowGold} alt="arrow" />
                            </div>
                        </div>
                        <div className="service__item">
                            <h2 className='service__title'>Furniture</h2>
                            <p className='sevice__paragraph'>Movable articles that are used to make a room or building suitable for living or working.</p>
                            <div type='button' className='link__button'>
                                <p className='link__button-text'>View More</p>
                                <img src={images.arrowGold} alt="arrow" />
                            </div>
                        </div>
                        <div className="service__item">
                            <h2 className='service__title'>Flooring</h2>
                            <p className='sevice__paragraph'>Thin object any finished material applied over a floor structure to provide a walking surface.</p>
                            <div type='button' className='link__button'>
                                <p className='link__button-text'>View More</p>
                                <img src={images.arrowGold} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;