import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { USER_REGISTER_RESET } from '../constants/userConstants';

const RegisterScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const redirect = location.search && location.search.split('=')[1];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, success } = userRegister;

  useEffect(() => {
    if (success) {
      history.push(redirect);
    }
    return () => {
      dispatch({
        type: USER_REGISTER_RESET,
      });
    };
  }, [success, history, redirect, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <div className='sign-page'>
      <div className='all'>
        <div className='sign-form'>
          <form action='' className='form-box'>
            <div className='sec-title'>
              <h1 className='hd' style={{ fontSize: '36px' }}>
                Đăng ký
              </h1>
            </div>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <div className='form-row'>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                className='f-control'
                placeholder='Full name'
              />
            </div>
            <div className='form-row'>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='f-control'
                placeholder='Email'
              />
            </div>
            <div className='form-row'>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='f-control'
                placeholder='Password'
              />
            </div>
            <div className='d-flex align-c'>
              <button
                onClick={submitHandler}
                type='submit'
                className='mn-btn btn-1'
              >
                Register
              </button>
              <div style={{ margin: '0 0 0 15px', fontSize: '16px' }}>
                Have an Account?{' '}
                <Link to='/login' className='link'>
                  <strong> Login</strong>
                </Link>
                .
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
