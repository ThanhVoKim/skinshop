import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import Message from '../components/Message';

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('admin');
  const [address, setAddress] = useState('abc');
  const [province, setProvince] = useState('def');
  const [district, setDistrict] = useState('xyz');

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { success: successPay, error: errorPay } = orderCreate;

  useEffect(() => {
    if (successPay) {
      history.push('/thanks');
    }
    return () => {
      dispatch({
        type: ORDER_CREATE_RESET,
      });
    };
  }, [dispatch, history, successPay]);

  const paymentHandler = (e) => {
    e.preventDefault();

    const order = {
      orderItems: cartItems,
      shippingAddress: {
        name,
        address,
        province,
        district,
      },
      taxPrice: cart.checkoutInfos.tax,
      shippingPrice: cart.checkoutInfos.shipping,
      totalPrice: cart.checkoutInfos.total,
      isPaid: true,
      paidAt: Date.now(),
    };
    dispatch(createOrder(order));
  };

  return (
    <div className='sec-pad2 shopping-cart'>
      <div className='all'>
        <CheckoutSteps step2={true} />
        <div className='sec-title'>
          <h1 className='hd' style={{ fontSize: '36px' }}>
            Shipping Details
          </h1>
        </div>
        {errorPay && <Message variant='danger'>{errorPay}</Message>}
        <div className='row100 d-flex j-between'>
          <div className='col60'>
            <form action='' className='form-box f--lg'>
              <div className='form-row'>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  required
                  className='f-control'
                  placeholder='Full name'
                />
              </div>

              <div className='form-row'>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type='text'
                  required
                  className='f-control'
                  placeholder='Address'
                />
              </div>
              <div className='form-row'>
                <input
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  type='text'
                  required
                  className='f-control'
                  placeholder='Province'
                />
              </div>
              <div className='form-row'>
                <input
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  type='text'
                  required
                  className='f-control'
                  placeholder='District'
                />
              </div>
              <div className='form-row' style={{ maxWidth: '200px' }}>
                <button
                  type='submit'
                  className='mn-btn btn-1'
                  onClick={paymentHandler}
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
          <div className='col40' style={{ marginLeft: 'auto' }}>
            <div className='orderSummary sum--more'>
              <div className='title'>
                <h2 className='hd'>Order Summary</h2>
              </div>
              <div className='orderList'>
                {cartItems.length > 0 &&
                  cartItems.map((cart) => (
                    <div key={cart.product} className='cartItem i--slim'>
                      <div className='img'>
                        <img src={cart.images} alt={cart.name} />
                      </div>
                      <div className='cartName'>
                        <p className='hd'>
                          <strong>{cart.name}</strong>
                        </p>
                        <p>Qty: {`${cart.numQty}`}</p>
                        <p>Price: ${`${cart.price}`}</p>
                      </div>
                      <div>${(cart.numQty * cart.price).toFixed(2)}</div>
                    </div>
                  ))}
              </div>
              <div>
                <div className='d-flex j-between a-end'>
                  <p className='hd'>Sub-total</p>
                  <p>${cart.checkoutInfos.subTotal}</p>
                </div>
                <div className='d-flex j-between a-end'>
                  <p className='hd'>Shipping</p>
                  <p>${cart.checkoutInfos.shipping}</p>
                </div>
                <div className='d-flex j-between a-end'>
                  <p className='hd'>Tax</p>
                  <p>${cart.checkoutInfos.tax}</p>
                </div>
                <div className='d-flex j-between a-end'>
                  <p className='hd'>Total Cost</p>
                  <p>${cart.checkoutInfos.total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;
