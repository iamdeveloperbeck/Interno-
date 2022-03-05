import React from 'react';

import images from '../../constants/images';
import './project.css';

const Project = () => {
    return (
        <div className='project'>
            <div className="container">
                <div className="section__title">
                    <h2 className='project__title centered__title'>Recent Projects</h2>
                    <p className='header-p project__p'>With tools to make every part of your process more human and a support team <br /> excited to help you, getting started with us never been easier.</p>
                </div>
                <div className="project__items">
                    <div className="item__row">
                        <div role='listitem' className="project__col project__col-6">
                            <div className="project__item">
                                <a href="#" className='project__item-link'>
                                    <img src={images.projectImg1} alt="project1" />
                                </a>
                                <div className="project__details">
                                    <div className="project__title-wrap">
                                        <a href="#" className='project__name'>Winery Dry Creek Building</a>
                                        <a href="#" className='project__categorey'>Art Modern</a>
                                    </div>
                                    <div className="project__read-more">
                                        <a href="#" className='project__link'>
                                            <img src={images.linkArrow} alt="link-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role='listitem' className="project__col project__col-6">
                            <div className="project__item">
                                <a href="#" className='project__item-link'>
                                    <img src={images.projectImg2} alt="project1" />
                                </a>
                                <div className="project__details">
                                    <div className="project__title-wrap">
                                        <a href="#" className='project__name'>Creative Workplace Design</a>
                                        <a href="#" className='project__categorey'>Minimalist</a>
                                    </div>
                                    <div className="project__read-more">
                                        <a href="#" className='project__link'>
                                            <img src={images.linkArrow} alt="link-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role='listitem' className="project__col project__col-6">
                            <div className="project__item">
                                <a href="#" className='project__item-link'>
                                    <img src={images.projectImg3} alt="project1" />
                                </a>
                                <div className="project__details">
                                    <div className="project__title-wrap">
                                        <a href="#" className='project__name'>Bedroom Interior Pot Work</a>
                                        <a href="#" className='project__categorey'>Modern</a>
                                    </div>
                                    <div className="project__read-more">
                                        <a href="#" className='project__link'>
                                            <img src={images.linkArrow} alt="link-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role='listitem' className="project__col project__col-6">
                            <div className="project__item">
                                <a href="#" className='project__item-link'>
                                    <img src={images.projectImg4} alt="project1" />
                                </a>
                                <div className="project__details">
                                    <div className="project__title-wrap">
                                        <a href="#" className='project__name'>Light Ambience Sepia Design</a>
                                        <a href="#" className='project__categorey'>Scandinavian</a>
                                    </div>
                                    <div className="project__read-more">
                                        <a href="#" className='project__link'>
                                            <img src={images.linkArrow} alt="link-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;