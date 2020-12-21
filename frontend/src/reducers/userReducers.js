import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,
} from '../constants/userConstants';

export const userLoginReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return { userInfo: {} };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

// export const userUpdateProfileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_UPDATE_PROFILE_REQUEST:
//       return { loading: true };
//     case USER_UPDATE_PROFILE_SUCCESS:
//       return { loading: false, success: true, userInfo: action.payload };
//     case USER_UPDATE_PROFILE_FAIL:
//       return { loading: false, error: action.payload };
//     case USER_UPDATE_PROFILE_RESET:
//       return {};
//     default:
//       return state;
//   }
// };
