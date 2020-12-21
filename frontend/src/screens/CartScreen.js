import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeFromCart,
  saveCheckoutInfos,
  updateCartItems,
} from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';

const CartScreen = () => {
  const dispatch = useDispatch();

  const roundNumber = (num) => {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2);
  };

  const [carts, setCarts] = useState([]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    setCarts(cartItems);
  }, [cartItems]);

  const addNumQty = (id, qty) => {
    const currentCart = carts.find((cart) => cart.product === id);
    let updateNumQty = currentCart.numQty + 1;
    if (updateNumQty <= qty) {
      const updatedCarts = carts.map((item) =>
        item.product === id ? { ...item, numQty: updateNumQty } : item
      );
      setCarts(updatedCarts);
    }
  };
  const subNumQty = (id) => {
    const currentCart = carts.find((cart) => cart.product === id);
    let updateNumQty = currentCart.numQty - 1;
    if (updateNumQty > 0) {
      const updatedCarts = carts.map((item) =>
        item.product === id ? { ...item, numQty: updateNumQty } : item
      );
      setCarts(updatedCarts);
    }
  };
  const changeNumQty = () => {};

  const checkoutHandler = () => {
    dispatch(
      saveCheckoutInfos({
        subTotal: Number(roundNumber(subTotal)),
        tax: Number(roundNumber(tax)),
        shipping: Number(roundNumber(shipping)),
        total: Number(roundNumber(total)),
      })
    );
    dispatch(updateCartItems(carts));
    return true;
  };

  const removeCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const subTotal =
    carts.length > 0 &&
    carts.reduce((acc, item) => acc + item.numQty * item.price, 0);
  const tax = carts.length > 0 && subTotal * 0.15;
  const shipping = carts.length > 0 && (subTotal > 100 ? 0 : 15);
  const total = subTotal + tax + shipping;
  return (
    <div className='sec-pad2 shopping-cart'>
      <div className='all'>
        <CheckoutSteps />
        <div className='sec-title'>
          <h1 className='hd' style={{ fontSize: '36px' }}>
            Shopping Cart
          </h1>
        </div>
        <div className='row100 d-flex j-between'>
          <div className='col75'>
            {carts.length < 1 ? (
              <Message>Cart is empty</Message>
            ) : (
              carts.map((cart) => (
                <div key={cart.product} className='cartItem i--border'>
                  <div className='img'>
                    <img src={cart.images} alt={cart.name} />
                  </div>
                  <div className='cartName'>
                    <p className='hd'>
                      <Link to={`/products/${cart.product}`}>
                        <strong>{cart.name}</strong>
                      </Link>
                    </p>
                    <p>Price: ${`${cart.price}`}</p>
                  </div>
                  <div className='cartCol f-setQty'>
                    <button
                      className='mn-btn icon inver'
                      onClick={(e) => subNumQty(cart.product)}
                      type='button'
                    >
                      <i className='fa fa-minus'></i>
                    </button>
                    <input
                      type='number'
                      value={cart.numQty}
                      className='f-control text-center'
                      style={{ width: '60px' }}
                      onChange={changeNumQty}
                    />
                    <button
                      className='mn-btn icon inver'
                      onClick={(e) => addNumQty(cart.product, cart.qty)}
                      type='button'
                    >
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                  <div className='' style={{ width: '80px' }}>
                    ${roundNumber(cart.price * cart.numQty)}
                  </div>
                  <div className='remove'>
                    <button
                      className='btn-icon'
                      type='button'
                      onClick={() => removeCartHandler(cart.product)}
                    >
                      <i className='fa fa-trash'></i>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className='col25' style={{ marginLeft: 'auto' }}>
            <div className='orderSummary'>
              <div className='title'>
                <h2 className='hd'>Order Summary</h2>
              </div>
              <div className='orderList'>
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
              </div>
              <div>
                <div className='d-flex j-between a-end'>
                  <p className='hd'>Total Cost</p>
                  <p>${roundNumber(total)}</p>
                </div>
                <div className='button'>
                  <Link
                    to='/shipping'
                    className={
                      carts.length < 1
                        ? 'mn-btn btn-1 disabled'
                        : 'mn-btn btn-1'
                    }
                    onClick={checkoutHandler}
                  >
                    CHECKOUT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
