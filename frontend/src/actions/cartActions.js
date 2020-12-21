import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_CHECKOUT_INFOS,
  CART_UPDATE_ITEMS,
} from '../constants/cartConstants';

export const addToCart = (id, numQty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      images: data.images[0],
      price: data.price,
      qty: data.qty,
      numQty,
    },
  });

  const { cartItems, shippingAddress, checkoutInfos } = await getState().cart;

  localStorage.setItem(
    'cart',
    JSON.stringify({
      cartItems,
      shippingAddress,
      checkoutInfos,
    })
  );
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  const { cartItems, shippingAddress, checkoutInfos } = await getState().cart;

  localStorage.setItem(
    'cart',
    JSON.stringify({ cartItems, shippingAddress, checkoutInfos })
  );
};

export const saveCheckoutInfos = (data) => async (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_CHECKOUT_INFOS,
    payload: data,
  });
  const { cartItems, shippingAddress } = await getState().cart;

  localStorage.setItem(
    'cart',
    JSON.stringify({
      cartItems,
      checkoutInfos: data,
      shippingAddress,
    })
  );
};

export const updateCartItems = (data) => async (dispatch, getState) => {
  dispatch({
    type: CART_UPDATE_ITEMS,
    payload: data,
  });
  const { checkoutInfos, shippingAddress } = await getState().cart;

  localStorage.setItem(
    'cart',
    JSON.stringify({
      cartItems: data,
      checkoutInfos,
      shippingAddress,
    })
  );
};
