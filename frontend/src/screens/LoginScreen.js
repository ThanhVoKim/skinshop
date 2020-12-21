import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('123456');

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const redirect =
    location.state && location.state.from ? location.state.from : '/';

  useEffect(() => {
    if (userInfo && userInfo.name) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className='sign-page'>
      <div className='all'>
        <div className='sign-form'>
          <form action='' className='form-box'>
            <div className='sec-title'>
              <h1 className='hd' style={{ fontSize: '36px' }}>
                Đăng nhập
              </h1>
            </div>
            {error && (
              <div className='form-row'>
                <Message variant='danger'>{error}</Message>
              </div>
            )}
            {loading && (
              <div className='form-row'>
                <Loader />
              </div>
            )}
            {location.state && location.state.requireLogin && (
              <Message>You must be logged in to access this page</Message>
            )}
            <div className='form-row'>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='f-control'
                placeholder='admin@example.com'
              />
            </div>
            <div className='form-row'>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='f-control'
                placeholder='123456'
              />
            </div>
            <div className='d-flex a-center'>
              <button
                type='submit'
                onClick={submitHandler}
                className='mn-btn btn-1'
              >
                Login
              </button>
              <div style={{ margin: '0 0 0 15px', fontSize: '16px' }}>
                or{' '}
                <Link to='/signup' className='link'>
                  <strong> Sign up</strong>
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

export default LoginScreen;
