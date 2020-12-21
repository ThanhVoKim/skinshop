import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import ChildPageHead from '../components/ChildPageHead';
import GetInfosChild from '../components/GetInfosChild';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Strength from '../components/Strength';
import ToggleCategory from '../components/ToggleCategory';
import { PRODUCT_LIST_RESET } from '../constants/productConstants';

const ProductListScreen = () => {
  const nav = [{ url: '/', name: 'Home' }];

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  const [keyword, setKeyword] = useState('aurora');

  useEffect(() => {
    dispatch(listProducts({ keyword }));

    return () => {
      dispatch({ type: PRODUCT_LIST_RESET });
    };
  }, [dispatch, keyword]);

  return (
    <>
      <ChildPageHead title='Products' nav={nav} />
      <div className='sec-pad2 product-list'>
        <div className='all'>
          <div className='category-prd-nav'>
            <ToggleCategory setKeyword={setKeyword} />
          </div>
          <div className='category-prd-ct' id='list-content-tab'>
            <div id='cateprd-1'>
              <ul className='col4-container'>
                {loading ? (
                  <Loader />
                ) : error ? (
                  <Message variant='danger'>${error}</Message>
                ) : (
                  products.map((product) => (
                    <li key={product._id} className='col4__item'>
                      <div className='product-card'>
                        <div className='img'>
                          <Link to={`/products/${product._id}`}>
                            <img
                              src={`${product.images[0]}`}
                              alt={`${product.name}`}
                            />
                          </Link>
                        </div>
                        <p>
                          <Link to={`/products/${product._id}`}>
                            {`${product.name}`}
                          </Link>
                        </p>
                        <p className='price'>${`${product.price}`}</p>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Strength />
      <GetInfosChild />
    </>
  );
};

export default ProductListScreen;
