import React from 'react';

import './author.css';

const Author = () => {
    return (
        <div className='author'>
            <div className="author__stamp">
                <p className='author__info'>Made with love <br /> <a href="https://www.instagram.com/iambecksattorov/" className='author__name'>DevBeck</a></p>
            </div>
        </div>
    );
};

export default Author;