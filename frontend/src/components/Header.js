import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Header = ({ setBodyMenu }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [openMenuin, setOpenMenuin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const Header = useRef(null);

  const regex = /(?<=^\/)[a-z]{1,}/i;
  const matchNav = location.pathname.match(regex);
  const currentNav = matchNav && matchNav[0];
  const classNav = 'current-menu-item';

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    //Header.current.scrollIntoView
    function scrollStickyHandler() {
      if (this.scrollY > Header.current.clientHeight + 20) {
        !sticky && setSticky(true);
      } else {
        sticky && setSticky(false);
      }
    }
    window.addEventListener('scroll', scrollStickyHandler);
  }, [userInfo, cartItems, sticky]);

  const openMenuinHandler = () => {
    setOpenMenuin(!openMenuin);
    setBodyMenu(!openMenuin);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header id='header' ref={Header} className={sticky ? 'sticky' : ''}>
      <div className='hd-wrap'>
        <div className='all'>
          <div className='logo'>
            <div className='img'>
              <Link to='/'>
                <img src='/images/header-logo.jpg' alt='' />
              </Link>
            </div>
          </div>
          <div className='hd-right'>
            <div className='hdr__left'>
              <div
                className={`navbar-toggle ${openMenuin && 'open'}`}
                onClick={openMenuinHandler}
              >
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </div>
              <div className='nav-wrap'>
                <div className='nav-overlay' onClick={openMenuinHandler}></div>
                <ul className='nav-ul'>
                  <li
                    className={
                      currentNav === 'products'
                        ? `${classNav} nav-li`
                        : 'nav-li'
                    }
                  >
                    <Link to='/products'>Products</Link>
                  </li>
                  <li
                    className={
                      currentNav === 'aboutus' ? `${classNav} nav-li` : 'nav-li'
                    }
                  >
                    <Link to='/aboutus'>About us</Link>
                  </li>
                  <li
                    className={
                      currentNav === 'news' ? `${classNav} nav-li` : 'nav-li'
                    }
                  >
                    <Link to='/news'>News</Link>
                  </li>
                  <li
                    className={
                      currentNav === 'member' ? `${classNav} nav-li` : 'nav-li'
                    }
                  >
                    <Link to='/member'>Member</Link>
                  </li>
                  <li
                    className={
                      currentNav === 'contact' ? `${classNav} nav-li` : 'nav-li'
                    }
                  >
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='hdr__side'>
              {userInfo && userInfo.name && (
                <div
                  style={{ display: 'inline-block', verticalAlign: 'middle' }}
                >
                  <div className='dropdown nav-li'>
                    <span className='link'>
                      {userInfo.name} <i className='fa fa-chevron-down'></i>
                    </span>
                    <ul className='sub-menu'>
                      <li>
                        <Link to='/profile'>Profile </Link>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='link'
                          onClick={logoutHandler}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <Link to='/cart' className='btn-icon i-circle btn-cart'>
                <i className='fa fa-shopping-cart' aria-hidden='true'></i>
                {cartItems && cartItems.length > 0 && (
                  <small className='num-cart'>{cartItems.length}</small>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
