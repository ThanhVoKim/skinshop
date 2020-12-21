import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProductDetails, listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ChildPageHead from '../components/ChildPageHead';
import Strength from '../components/Strength';
import GetInfosChild from '../components/GetInfosChild';
import { PRODUCT_LIST_RESET } from '../constants/productConstants';
import ProductList from '../components/ProductList';
import ProductDetailsSlider from '../components/ProductDetailsSlider';
import { addToCart } from '../actions/cartActions';

const ProductDetailsScreen = ({ match }) => {
  const nav = [
    { url: '/', name: 'Home' },
    { url: '/products', name: 'Products' },
  ];
  const productId = match.params.id;
  const dispatch = useDispatch();

  const [numQty, setNumQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  const productList = useSelector((state) => state.productList);
  const { errorList, loadingList, products } = productList;

  const titlePage =
    product.name && product.name.length > 20
      ? `${product.name.substring(0, 20)}...`
      : product.name;
  useEffect(() => {
    dispatch(listProductDetails(productId));
    dispatch(listProducts({ limit: 4 }));
    return () => {
      dispatch({ type: 'PRODUCT_DETAILS_RESET' });
      dispatch({ type: PRODUCT_LIST_RESET });
    };
  }, [dispatch, productId]);

  const addCartHandler = () => {
    dispatch(addToCart(productId, numQty));
    setNumQty(1);
  };

  const buyHandler = () => {
    dispatch(addToCart(productId, numQty));
    return true;
  };

  return (
    <>
      <ChildPageHead title={`${titlePage}`} nav={nav} />
      <div className='sec-pad2 product-detail'>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <div className='all'>
            <div className='product-dt-wrap'>
              <ProductDetailsSlider images={product.images} />
              <div className='prod-dt-content'>
                <div className='field-ct'>
                  <h2 className='title'>{`${product.name}`}</h2>
                </div>
                <div className='field-ct'>
                  <p className='hl'>${`${product.price}`}</p>
                </div>
                <div className='field-ct'>
                  <p>
                    But today, the use and influence of illustrations is growing
                    right along. An illustration, image or picture that does not
                    express a distinct idea is a poor illustration. It should be
                    clearly drawn with an abundance of ideas to be conveyed in
                    the fewest line possible. Originality cannot help flowing
                    from the pencil of the good artist
                  </p>
                  <div className='prod-oper f-setQty'>
                    <button
                      className='mn-btn icon inver'
                      onClick={(e) =>
                        product.qty > 1 &&
                        numQty - 1 > 0 &&
                        setNumQty(numQty - 1)
                      }
                    >
                      <i className='fa fa-minus'></i>
                    </button>
                    <input
                      type='number'
                      value={numQty}
                      onChange={(e) =>
                        Number(e.target.value) <= product.numQty &&
                        setNumQty(Number(e.target.value))
                      }
                      className='f-control text-center'
                      style={{ width: '60px' }}
                    />
                    <button
                      className='mn-btn icon inver'
                      onClick={(e) =>
                        numQty + 1 <= product.qty && setNumQty(numQty + 1)
                      }
                    >
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                  <div className='prod-oper'>
                    <Link
                      to='/cart'
                      onClick={buyHandler}
                      className='mn-btn btn-1'
                    >
                      Buy now
                    </Link>
                    <button
                      type='button'
                      className='mn-btn btn-2 inver'
                      onClick={addCartHandler}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
              <img src={`${product.images[0]}`} alt='' />
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
      <div className='sec-pad2 product-info'>
        <div className='all'>
          <div className='prod-info-2col'>
            <div className='prodinfo-left'>
              <div className='img'>
                <img src={`${product.images[0]}`} alt='' />
              </div>
            </div>
            <div className='prodinfo-right'>
              <div className='sec-title2 st-left'>
                <h3 className='hd'>Giới thiệu</h3>
              </div>
              <div className='mn-content'>
                <div className='text-column'>
                  <p className='fw500'>
                    The beauty of astronomy is that anybody can do it. From the
                    tiniest baby to the most advanced astrophysicist, there is
                    something for anyone who wants to enjoy astronomy.
                  </p>
                  <p>
                    In fact, it is a science that is so accessible that
                    virtually anybody can do it virtually anywhere they are. All
                    they have to know how to do is to look up.
                  </p>
                  <p>
                    It really is amazing when you think about it that just by
                    looking up on any given night,
                  </p>
                  <p>
                    The beauty of astronomy is that anybody can do it. From the
                    tiniest baby to the most advanced astrophysicist, there is
                    something for anyone who wants to enjoy astronomy.
                  </p>
                  <p>
                    In fact, it is a science that is so accessible that
                    virtually anybody can do it virtually anywhere they are. All
                    they have to know how to do is to look up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='sec-pad2 product-relate'
        style={{ paddingBottom: '30px' }}
      >
        <div className='all'>
          <div className='sec-title2'>
            <h2 className='hd'>Sản phẩm liên quan</h2>
          </div>
          {loadingList ? (
            <Loader />
          ) : errorList ? (
            <Message variant='danger'>${errorList}</Message>
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
      <Strength />
      <GetInfosChild />
    </>
  );
};

export default ProductDetailsScreen;
