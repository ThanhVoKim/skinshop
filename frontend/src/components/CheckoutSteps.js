import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({
  step1 = true,
  step2 = false,
  step3 = false,
  disabled = false,
}) => {
  return (
    <>
      <div className={'checkoutStep ' + (disabled ? 'disabled' : '')}>
        <Link
          to='/cart'
          className={'checkoutStep__item ' + (step1 ? 'active' : '')}
        >
          <span className='leftArr'></span>
          <span className='text'>1 Order</span>
          <span className='rightArr'></span>
        </Link>
        <Link
          to='/shipping'
          className={'checkoutStep__item ' + (step2 ? 'active' : '')}
        >
          <span className='leftArr'></span>
          <span className='text'>2 Shipping</span>
          <span className='rightArr'></span>
        </Link>
        <Link
          to='/thanks'
          className={'checkoutStep__item ' + (step3 ? 'active' : '')}
        >
          <span className='leftArr'></span>
          <span className='text'>3 Complete</span>
          <span className='rightArr'></span>
        </Link>
      </div>
    </>
  );
};

export default CheckoutSteps;
