import React, { useEffect, useMemo, useState } from 'react';

import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

import './carousel.css';

const Carousel = ({
  children,
  title,
  maxLength,
  addReview,
  addReviewHandler,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [defaultTransform, setDefaultTransForm] = useState(50);

  const ind = useMemo(() => {
    if (defaultTransform === 50) {
      return maxLength - 2;
    } else if (defaultTransform === 100) {
      return maxLength - 1;
    }
  }, [defaultTransform, maxLength]);

  const next = () => {
    if (currentIndex < ind) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setDefaultTransForm(50);
    } else if (window.innerWidth <= 992) {
      setDefaultTransForm(100);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

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
            {addReview && (
              <span onClick={addReviewHandler} className='add-review'>Оставить отзыв</span>
            )}
          </h1>
        )}
        <div className='carousel_header__nav'>
          <div
            onClick={prev}
            className={`left_arrow ${currentIndex === 0 ? 'disableArrow' : ''}`}
          >
            <span><ArrowLeft /></span>
          </div>
          <div
            onClick={next}
            className={`right_arrow ${currentIndex === ind ? 'disableArrow' : ''}`}
          >
            <span><ArrowRight /></span>
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
