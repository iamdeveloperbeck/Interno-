import React from 'react';

import images from '../../constants/images';
import './client.css';

const Client = () => {
    return (
        <div className='client'>
            <div className="container">
                <div className="client__grid">
                    <div className="client__image">
                        <img src={images.clientLogo1} alt="client-logo-1" />
                    </div>
                    <div className="client__image">
                        <img src={images.clientLogo2} alt="client-logo-1" />
                    </div>
                    <div className="client__image">
                        <img src={images.clientLogo3} alt="client-logo-1" />
                    </div>
                    <div className="client__image">
                        <img src={images.clientLogo4} alt="client-logo-1" />
                    </div>
                    <div className="client__image">
                        <img src={images.clientLogo5} alt="client-logo-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;