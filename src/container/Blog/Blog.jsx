import React from 'react';

import images from '../../constants/images';
import './blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <div className="container">
                <div className="centered__title blog__title">
                    <h2 className='blog__title'>Recent Blogs</h2>
                    <p className='blog__paragraph'>Get updates about our latest trends and techniques used in <br />
                    interior design project works.</p>
                </div>
                <div className="blog__wrap">
                    <div className="blog__row">
                        <div role="listitem" className='blog__item'>
                            <div className="blog__col">
                                <div className="blog__img">
                                    <a href="#" className='blog__img-link'>
                                        <img src={images.blogImage1} alt="blog-img" />
                                    </a>
                                    <a href="#" className='blog__img-info_link'>
                                        <div className="blog__category">Kitchen Design</div>
                                    </a>
                                </div>
                                <a href="#" className='blog__info-text'>
                                    <h2 className='blog__title-small'>Residential Interior Designer <br /> In New York, USA</h2>
                                </a>
                                <div className="blog__item-meta">
                                    <p className='blog__date'>March 03, 2022</p>
                                    <a href="#" className='blog__link-arrow'>
                                        <img src={images.linkArrow} alt="link-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className='blog__item'>
                            <div className="blog__col">
                                <div className="blog__img">
                                    <a href="#" className='blog__img-link'>
                                        <img src={images.blogImage2} alt="blog-img" />
                                    </a>
                                    <a href="#" className='blog__img-info_link'>
                                        <div className="blog__category">Living Room</div>
                                    </a>
                                </div>
                                <a href="#" className='blog__info-text'>
                                    <h2 className='blog__title-small'>How To Choose The Best Wall <br /> Art & Decor House?</h2>
                                </a>
                                <div className="blog__item-meta">
                                    <p className='blog__date'>February 15, 2022</p>
                                    <a href="#" className='blog__link-arrow'>
                                        <img src={images.linkArrow} alt="link-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className='blog__item'>
                            <div className="blog__col">
                                <div className="blog__img">
                                    <a href="#" className='blog__img-link'>
                                        <img src={images.blogImage3} alt="blog-img" />
                                    </a>
                                    <a href="#" className='blog__img-info_link'>
                                        <div className="blog__category">Minimalist Interior</div>
                                    </a>
                                </div>
                                <a href="#" className='blog__info-text'>
                                    <h2 className='blog__title-small'>Tips To Increase The Interior <br /> Value Of Your House</h2>
                                </a>
                                <div className="blog__item-meta">
                                    <p className='blog__date'>January 22, 2022</p>
                                    <a href="#" className='blog__link-arrow'>
                                        <img src={images.linkArrow} alt="link-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className='blog__item'>
                            <div className="blog__col">
                                <div className="blog__img">
                                    <a href="#" className='blog__img-link'>
                                        <img src={images.blogImage4} alt="blog-img" />
                                    </a>
                                    <a href="#" className='blog__img-info_link'>
                                        <div className="blog__category">Kitchen Design</div>
                                    </a>
                                </div>
                                <a href="#" className='blog__info-text'>
                                    <h2 className='blog__title-small'>Best Solution For Any Office <br /> & Business Interior</h2>
                                </a>
                                <div className="blog__item-meta">
                                    <p className='blog__date'>December 23, 2021</p>
                                    <a href="#" className='blog__link-arrow'>
                                        <img src={images.linkArrow} alt="link-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className='blog__item'>
                            <div className="blog__col">
                                <div className="blog__img">
                                    <a href="#" className='blog__img-link'>
                                        <img src={images.blogImage5} alt="blog-img" />
                                    </a>
                                    <a href="#" className='blog__img-info_link'>
                                        <div className="blog__category">Kitchen Design</div>
                                    </a>
                                </div>
                                <a href="#" className='blog__info-text'>
                                    <h2 className='blog__title-small'>Get Solution For Building <br /> Construction Work</h2>
                                </a>
                                <div className="blog__item-meta">
                                    <p className='blog__date'>December 06, 2021</p>
                                    <a href="#" className='blog__link-arrow'>
                                        <img src={images.linkArrow} alt="link-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className='blog__item'>
                            <div className="blog__col">
                                <div className="blog__img">
                                    <a href="#" className='blog__img-link'>
                                        <img src={images.blogImage6} alt="blog-img" />
                                    </a>
                                    <a href="#" className='blog__img-info_link'>
                                        <div className="blog__category">Minimalist Interior</div>
                                    </a>
                                </div>
                                <a href="#" className='blog__info-text'>
                                    <h2 className='blog__title-small'>Attain The Best Finish For <br /> The Kitchen Cabinets</h2>
                                </a>
                                <div className="blog__item-meta">
                                    <p className='blog__date'>November 15, 2021</p>
                                    <a href="#" className='blog__link-arrow'>
                                        <img src={images.linkArrow} alt="link-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;