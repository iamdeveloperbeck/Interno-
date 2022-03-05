import React from 'react';

import images from '../../constants/images';
import './testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="container">
                <div className="testimonials__content">
                    <h2 className='testimonials__h2'>What the People Thinks <br /> About Interno</h2>
                    <div className="testimonials__grid">
                        <div className="testimonials__item">
                            <div className="testimonials__detail">
                                <div className="testimonials__image">
                                    <img src={images.clientImg1} alt="client1" />
                                    <div className="client__detail">
                                        <h3 className='client__name'>Lisa Clairton</h3>
                                        <div className="client__location">New York, USA</div>
                                    </div>
                                </div>
                                <p className='testimonials_content'>We selected Interno interior because of rigorous design background & education.</p>
                            </div>
                        </div>
                        <div className="testimonials__item">
                            <div className="testimonials__detail">
                                <div className="testimonials__image">
                                    <img src={images.clientImg3} alt="client1" />
                                    <div className="client__detail">
                                        <h3 className='client__name'>David Knight</h3>
                                        <div className="client__location">Sydney, Australia</div>
                                    </div>
                                </div>
                                <p className='testimonials_content'>The team exceeded our expectations and emerged as leaders of our project’s.</p>
                            </div>
                        </div>
                        <div className="testimonials__item">
                            <div className="testimonials__detail">
                                <div className="testimonials__image">
                                    <img src={images.clientImg2} alt="client1" />
                                    <div className="client__detail">
                                        <h3 className='client__name'>Monica Deborah</h3>
                                        <div className="client__location">Paris, France</div>
                                    </div>
                                </div>
                                <p className='testimonials_content'>They balanced the architectural vision and the project realities beautifully.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;