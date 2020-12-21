import React from 'react';
import ChildPageHead from '../components/ChildPageHead';
import GetInfosChild from '../components/GetInfosChild';
import GoogleMap from '../components/GoogleMap';

const ContactScreen = () => {
  const nav = [{ url: '/', name: 'Home' }];

  return (
    <>
      <ChildPageHead title='Contact' nav={nav} />
      <GoogleMap />
      <div className='sec-pad2 contact-us'>
        <div className='all'>
          <div className='row100'>
            <div className='col25 left'>
              <div className='sec-title2 st-left'>
                <h2 className='hd'>Contact us</h2>
              </div>
              <div className='contactus-content'>
                <div className='contactus-info clear'>
                  <span className='icon'>
                    <i className='fa fa-home' aria-hidden='true'></i>
                  </span>
                  <div className='ct'>
                    <p className='title'>Office</p>
                    xxxxxx Ly Thuong Kiet, xxxxxx Ward, Dist. Ho Chi Minh
                  </div>
                </div>
                <div className='contactus-info clear'>
                  <span className='icon'>
                    <i className='fa fa-phone' aria-hidden='true'></i>
                  </span>
                  <div className='ct'>
                    <p className='title'>Hotline</p>
                    <a href='tel:+'>+xxxxxxxxx</a>
                  </div>
                </div>
                <div className='contactus-info clear'>
                  <span className='icon'>
                    <i className='fa fa-envelope' aria-hidden='true'></i>
                  </span>
                  <div className='ct'>
                    <p className='title'>Email</p>
                    <a href='mailto:'>xxxxxxx@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col75 right'>
              <form className='form-box'>
                <div className='f-col2 clear'>
                  <div className='form__child'>
                    <input
                      type='text'
                      className='f-control'
                      placeholder='Your name'
                    />
                  </div>
                  <div className='form__child'>
                    <input
                      type='text'
                      className='f-control'
                      placeholder='Phone number'
                    />
                  </div>
                </div>
                <div className='f-col2 clear'>
                  <div className='form__child'>
                    <input
                      type='text'
                      className='f-control'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form__child'>
                    <input
                      type='text'
                      className='f-control'
                      placeholder='Sub'
                    />
                  </div>
                </div>
                <div className='form__child'>
                  <textarea
                    className='f-control'
                    placeholder='Message'
                  ></textarea>
                </div>
                <div className='submit-button'>
                  <button className='mn-btn btn-1'>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <GetInfosChild />
    </>
  );
};

export default ContactScreen;
