/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='ft-infos sec-pad2' style={{ paddingBottom: '30px' }}>
        <div className='all'>
          <div className='ft-infos-wrap'>
            <div className='ft-infos__child ft-logo'>
              <div className='footer-logo'>
                <Link to='/'>
                  <h1 className='footer__logo'>SkinShop</h1>
                </Link>
              </div>
              <div className='ft-intro'>
                In this digital generation where information can be easily
                obtained within seconds, business .
              </div>
              <div className='ft-media'>
                <a href='#' className='ft-media-btn'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
                <a href='#' className='ft-media-btn'>
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>
                <a href='#' className='ft-media-btn'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>
                <a href='#' className='ft-media-btn'>
                  <i className='fa fa-youtube-play' aria-hidden='true'></i>
                </a>
              </div>
            </div>
            <div className='ft-infos__child'>
              <div className='foot-title'>
                <h4 className='hd'>Contact us</h4>
              </div>
              <div className='ft-contact'>
                <div className='ft-contact-info clear'>
                  <span className='icon'>
                    <i className='fa fa-map-marker' aria-hidden='true'></i>
                  </span>
                  <div className='ct'>
                    xxx Ly Thuong Kiet, xx Ward, Dist. Ho Chi Minh
                  </div>
                </div>
                <div className='ft-contact-info clear'>
                  <span className='icon'>
                    <i className='fa fa-phone' aria-hidden='true'></i>
                  </span>
                  <div className='ct'>
                    <p>Hotline</p>
                    <a href='tel:+'>+xx xxx xxx xxxx</a>
                  </div>
                </div>
                <div className='ft-contact-info clear'>
                  <span className='icon'>
                    <i className='fa fa-envelope' aria-hidden='true'></i>
                  </span>
                  <div className='ct'>
                    <p>Email</p>
                    <a href='mailto:'>xxxxxxxxxx@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='ft-infos__child'>
              <div className='foot-title'>
                <h4 className='hd'>Form mua hàng</h4>
              </div>
              <div className='ft-form'>
                <div className='form__child'>
                  <input type='text' className='f-control' placeholder='Name' />
                </div>
                <div className='form__child'>
                  <input
                    type='text'
                    className='f-control'
                    placeholder='Phone'
                  />
                </div>
                <div className='form__child'>
                  <textarea
                    className='f-control'
                    placeholder='Message'
                  ></textarea>
                </div>
                <div className='form__child'>
                  <button className='mn-btn btn-2 inver'>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
