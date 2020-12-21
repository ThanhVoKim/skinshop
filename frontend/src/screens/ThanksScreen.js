import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

const ThanksScreen = () => {
  return (
    <div className='sec-pad2 thanks'>
      <div className='all'>
        <CheckoutSteps step2={true} step3={true} disabled={true} />
        <div className='thanks-ct' style={{ marginTop: '60px' }}>
          <div className='check-icon'>
            <i className='fa fa-check'></i>
          </div>
          <div className='detail'>
            <p className='hd'>Thank you, your order has been placed</p>
            <p>
              We will send you an email as an acknowledgment of your order and{' '}
              <br />
              with your confirmation details shortly
            </p>
          </div>
          <div className='button'>
            <Link to='/products' className='mn-btn btn-1 inver'>
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksScreen;
