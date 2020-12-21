import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import BannerSlider from '../components/BannerSlider';
import GetInfo from '../components/GetInfo';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductList from '../components/ProductList';
import ToggleCategory from '../components/ToggleCategory';
import { PRODUCT_LIST_RESET } from '../constants/productConstants';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { error: errorList, loading: loadingList, products } = productList;

  const [keyword, setKeyword] = useState('aurora');

  useEffect(() => {
    dispatch(listProducts({ limit: 4, keyword }));

    return () => {
      dispatch({ type: PRODUCT_LIST_RESET });
    };
  }, [dispatch, keyword]);
  return (
    <>
      <BannerSlider />
      <div className='sec-pad2 top-product'>
        <div className='all'>
          <div className='top-product-wrap'>
            <div className='top-product__left'>
              <div className='tprodinfo__left'>
                <div className='img'>
                  <img src='/images/product-home-img.png' alt='' />
                </div>
              </div>
              <div className='tprodinfo__right'>
                <div className='tprod-content'>
                  <div className='ct-row'>
                    <p className='p-desc'>Alpha Arbutin &amp; herbs</p>
                    <h4 className='title'>Whitening &amp; Reborn cells</h4>
                  </div>
                  <div className='ct-row'>
                    <p className='p-desc'>Price:</p>
                    <h4 className='sub-title'>1,200,000 VNĐ</h4>
                  </div>
                  <div className='ct-row'>
                    But today, the use and influence of illustrations is growing
                    right along. An illustration
                  </div>
                  <Link to='/products/' className='mn-btn btn-1'>
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
            <div className='top-product__right'>
              <Link to='/products/'>
                <div
                  className='tp-slide-img'
                  style={{
                    backgroundImage: 'url(/images/top-product-slide-img.jpg)',
                  }}
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='feature-product'>
        <div className='all'>
          <div className='sec-title'>
            <h2 className='hd'>
              <span className='hl'>SkinShop</span> Feature
            </h2>
          </div>
          <div className='feat-prd-intro'>
            But today, the use and influence of illustrations is growing right
            along. An illustration, image or picture that does not express a
            distinct idea is a poor illustration. It should be clearly drawn
            with an abundance of ideas to be conveyed in the fewest line
            possible. Originality cannot help flowing from the pencil of the
            good artist
          </div>
          <div className='feat-prd-total clear'>
            <div className='feat-prd-img'>
              <img src='./images/features-product-img.png' alt='' />
            </div>
            <ul className='list-feat-prd feat-prd__left'>
              <li>
                <span className='title'>Se khít lỗ chân lông</span>
              </li>
              <li>
                <span className='title'>
                  Cấp ẩm, nuôi dưỡng quá trình tái tạo da
                </span>
              </li>
              <li>
                <span className='title'>
                  Cung cấp collagen giúp da đều màu, mịn màng
                </span>
              </li>
            </ul>
            <ul className='list-feat-prd feat-prd__right'>
              <li>
                <span className='title'>
                  Không chứa Petroteum hoạt độn trên bề mặt da
                </span>
              </li>
              <li>
                <span className='title'>Không chứa dầu khoáng</span>
              </li>
              <li>
                <span className='title'>Không chứa Metyl Paraben</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='sec-pad2 category-product'>
        <div className='all'>
          <div className='category-prd-nav'>
            <ToggleCategory setKeyword={setKeyword} />
          </div>
          <div className='category-prd-ct'>
            {loadingList ? (
              <Loader />
            ) : errorList ? (
              <Message variant='danger'>{errorList}</Message>
            ) : (
              <ProductList products={products} />
            )}
            <div className='text-center' style={{ paddingTop: '15px' }}>
              <Link to='/products/' className='text-btn'>
                Xem thêm
              </Link>
            </div>
          </div>
        </div>
      </div>
      <GetInfo />
    </>
  );
};

export default HomeScreen;
