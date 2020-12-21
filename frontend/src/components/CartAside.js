import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartAside = ({ showAside, setAsideCart }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const closeAsideHandler = (e) => {
    if (e.target === e.currentTarget) setAsideCart(false);
  };

  return (
    <aside
      className={showAside ? 'aside-cart show' : 'aside-cart'}
      onClick={closeAsideHandler}
    >
      <div className='aside-wrap'>
        <button
          type='button'
          className='mn-btn asideClose'
          onClick={(e) => setAsideCart(false)}
        >
          <i className='fa fa-times'></i>
        </button>
        <div className='orderSummary sum--more'>
          <div className='title text-center'>
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
                    <p>
                      <Link to={`products/${cart.product}`} className='hd'>
                        <strong>{cart.name}</strong>
                      </Link>
                    </p>
                    <p>Qty: {`${cart.numQty}`}</p>
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
          <div className='d-flex j-center'>
            <Link
              to='/cart'
              className='mn-btn btn-1'
              style={{ marginRight: '5px' }}
            >
              View Cart
            </Link>
            <Link to='/shipping' className='mn-btn btn-1 inver'>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CartAside;
