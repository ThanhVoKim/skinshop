import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEMS,
  CART_CLEAR_ITEMS,
  CART_SAVE_CHECKOUT_INFOS,
} from '../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {}, checkoutInfos: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_CHECKOUT_INFOS:
      return {
        ...state,
        checkoutInfos: action.payload,
      };
    case CART_UPDATE_ITEMS:
      return { ...state, cartItems: action.payload };
    case CART_CLEAR_ITEMS:
      return { cartItems: [], shippingAddress: {}, checkoutInfos: {} };
    default:
      return state;
  }
};
