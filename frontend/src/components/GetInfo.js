import React from 'react';

const GetInfo = () => {
  return (
    <div
      className='sec-pad2 subscribe'
      style={{ backgroundImage: 'url(/images/subcribe-bg.png)' }}
    >
      <div className='all'>
        <div className='sec-title'>
          <h2 className='hd'>Get information</h2>
        </div>
        <div className='subscribe-form'>
          <input
            type='text'
            className='f-control'
            placeholder='Write your email'
          />
          <span className='submit-button'>
            <button className='mn-btn'>Send</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetInfo;
