import React, { useRef } from 'react';
import { useState } from 'react';
import Slider from 'react-slick';

const setSlider1 = {
  infinite: false,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  dots: false,
  arrows: false,
};

const ProductDetailsSlider = ({ images }) => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [index, setIndex] = useState(0);

  const nextClick = () => {
    slider2.current.slickNext();
  };
  const prevClick = () => {
    slider2.current.slickPrev();
  };

  const setSlider2 = {
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    swipeToSlide: true,
    infinite: false,
    dots: false,
    arrows: false,
    afterChange: () => {
      const currentEle = slider2.current.innerSlider.list.querySelector(
        '.slick-current'
      );
      const indexItem = currentEle.dataset.index;
      setIndex(Number(indexItem));
    },
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
  };
  return (
    <>
      {images && images.length > 0 && (
        <div className='prod-dt__left'>
          <div className='display-img'>
            <Slider
              asNavFor={slider2.current}
              ref={slider1}
              {...setSlider1}
              className='slider-css'
            >
              {images.map((item) => (
                <div key={item} className='img-wrap'>
                  <div className='img'>
                    <img src={`${item}`} alt='' />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className='navfor-img'>
            <Slider
              asNavFor={slider1.current}
              ref={slider2}
              {...setSlider2}
              className='slider-css'
            >
              {images.map((item) => (
                <div key={item} className='nav-img'>
                  <img src={`${item}`} alt='' />
                </div>
              ))}
            </Slider>
            <div className='slider-css'>
              <button
                disabled={index === images.length - 1}
                type='button'
                className='slick-next'
                onClick={nextClick}
              >
                <i className='fa fa-chevron-right'></i>
              </button>
              <button
                disabled={index === 0}
                type='button'
                className='slick-prev'
                onClick={prevClick}
              >
                <i className='fa fa-chevron-left'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsSlider;
