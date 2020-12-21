import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products = [] }) => {
  return (
    <ul className='col4-container'>
      {products.map((product) => (
        <li key={product._id} className='col4__item'>
          <div className='product-card'>
            <div className='img'>
              <Link to={`/products/${product._id}`}>
                <img src={`${product.images[0]}`} alt={`${product.name}`} />
              </Link>
            </div>
            <p>
              <Link to={`/products/${product._id}`}>{`${product.name}`}</Link>
            </p>
            <p className='price'>${`${product.price}`}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
