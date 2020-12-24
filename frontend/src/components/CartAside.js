import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, saveCheckoutInfos } from '../actions/cartActions';

const CartAside = ({ showAside, setAsideCart }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const roundNumber = (num) => {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2);
  };

  const subTotal =
    cartItems.length > 0 &&
    cartItems.reduce((acc, item) => acc + item.numQty * item.price, 0);
  const tax = cartItems.length > 0 && subTotal * 0.15;
  const shipping = cartItems.length > 0 && (subTotal > 100 ? 0 : 15);
  const total = subTotal + tax + shipping;

  useEffect(() => {
    dispatch(
      saveCheckoutInfos({
        subTotal: Number(roundNumber(subTotal)),
        tax: Number(roundNumber(tax)),
        shipping: Number(roundNumber(shipping)),
        total: Number(roundNumber(total)),
      })
    );
  }, [dispatch, subTotal, tax, shipping, total]);

  const closeAsideHandler = (e) => {
    if (e.target === e.currentTarget) setAsideCart(false);
  };

  const checkoutHandler = () => {
    dispatch(
      saveCheckoutInfos({
        subTotal: Number(roundNumber(subTotal)),
        tax: Number(roundNumber(tax)),
        shipping: Number(roundNumber(shipping)),
        total: Number(roundNumber(total)),
      })
    );
    return true;
  };

  const removeCartHandler = (id) => {
    dispatch(removeFromCart(id));
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
                  <div className='img' style={{ position: 'relative' }}>
                    <img src={cart.images} alt={cart.name} />
                    <small className='num-cart'>{`${cart.numQty}`}</small>
                  </div>
                  <div className='cartName'>
                    <p>
                      <Link to={`products/${cart.product}`} className='hd'>
                        <strong>{cart.name}</strong>
                      </Link>
                    </p>
                    <p>${(cart.numQty * cart.price).toFixed(2)}</p>
                  </div>
                  <div>
                    <button
                      className='btn-icon'
                      type='button'
                      onClick={() => removeCartHandler(cart.product)}
                    >
                      <i className='fa fa-trash'></i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <div className='d-flex j-between a-end'>
              <p className='hd'>Sub-total</p>
              <p>${roundNumber(subTotal)}</p>
            </div>
            <div className='d-flex j-between a-end'>
              <p className='hd'>Shipping</p>
              <p>${roundNumber(shipping)}</p>
            </div>
            <div className='d-flex j-between a-end'>
              <p className='hd'>Tax</p>
              <p>${roundNumber(tax)}</p>
            </div>
            <div className='d-flex j-between a-end'>
              <p className='hd'>Total Cost</p>
              <p>${roundNumber(total)}</p>
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
            <Link
              to='/shipping'
              onClick={checkoutHandler}
              className={
                cartItems.length < 1
                  ? 'mn-btn btn-1 disabled'
                  : 'mn-btn btn-1 inver'
              }
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CartAside;
