import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button type='button' className={className} onClick={onClick}>
      <i className='fa fa-chevron-right'></i>
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button type='button' className={className} onClick={onClick}>
      <i className='fa fa-chevron-left'></i>
    </button>
  );
};

const BannerSlider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    // centerPadding: '5px',
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className='banner'>
        <Slider {...settings} className='slider-css'>
          <Link draggable={false} to='/products' className='banner-slider-item'>
            <div className='bg-wrap'>
              <div
                className='slider-bg'
                style={{ backgroundImage: 'url(/images/banner-bg.jpg)' }}
              >
                <div className='all'>
                  <div className='banner-content'>
                    <h1 className='hd'>
                      <span className='color2'>Whitening</span> <br />
                      <span className='black fw500'>&amp; Reborn cells</span>
                    </h1>
                    <p>
                      Businesses often become known today through effective
                      marketing. The marketing may be in the form of a regular
                      news item or half column society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link draggable={false} to='/products' className='banner-slider-item'>
            <div className='bg-wrap'>
              <div
                className='slider-bg'
                style={{
                  backgroundImage:
                    'url(https://theme.hstatic.net/200000031870/1000609338/14/slideshow_3.jpg?v=376)',
                }}
              ></div>
            </div>
          </Link>
          <Link draggable={false} to='/products' className='banner-slider-item'>
            <div className='bg-wrap'>
              <div
                className='slider-bg'
                style={{
                  backgroundImage:
                    'url(https://theme.hstatic.net/200000031870/1000609338/14/slideshow_4.jpg?v=376)',
                }}
              ></div>
            </div>
          </Link>
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
