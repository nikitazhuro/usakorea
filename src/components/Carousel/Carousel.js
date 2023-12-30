import React, { useEffect, useState } from 'react';

import './carousel.css';

const Carousel = ({ children, title, maxLength }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [defaultTransform, setDefaultTransForm] = useState(50);

  const next = () => {
    if (currentIndex < 2) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1440) {
      setDefaultTransForm(20);
    } else if (window.innerWidth <= 1440) {
      setDefaultTransForm(25);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='carousel_container'>
      <div className='carousel_header'>
        {title && (
          <h1 className='carousel_header__title'>
            {title}
          </h1>
        )}
        <div className='carousel_header__nav'>
          <div
            onClick={prev}
            className={`left_arrow ${currentIndex === 0 ? 'disableArrow' : ''}`}
          >
            <span>&lt;</span>
          </div>
          <div
            onClick={next}
            className={`right_arrow ${currentIndex === 3 ? 'disableArrow' : ''}`}
          >
            <span>&gt;</span>
          </div>
        </div>
      </div>
      <div className='carousel_wrapper'>
        <div className='carousel_content_wrapper'>
          <div
            className='carousel_content'
            style={{
              transform: `translateX(-${currentIndex * defaultTransform}%)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
