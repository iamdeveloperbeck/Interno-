import React from 'react';


import './counter.css';

const Counter = () => {
    return (
        <div className='counter'>
            <div className="container">
                <div className="layout__grid counter__grid">
                    <div className="counter__item">
                        <h3 className='count-number'>12</h3>
                        <p className='counter__title'>Years Of Experiance</p>
                    </div>
                    <div className="counter__item">
                        <h3 className='count-number'>5K</h3>
                        <p className='counter__title'>Success Project</p>
                    </div>
                    <div className="counter__item">
                        <h3 className='count-number'>1K</h3>
                        <p className='counter__title'>Active Project</p>
                    </div>
                    <div className="counter__item">
                        <h3 className='count-number'>4K</h3>
                        <p className='counter__title'>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;