import React from 'react';
import { Link } from 'react-router-dom';

const ChildPageHead = ({ title, nav = [{}] }) => {
  return (
    <div
      className='childpage-head'
      style={{ backgroundImage: `url("/images/childpage-head-bg.jpg")` }}
    >
      <div className='all'>
        <div className='childpage-title'>
          <h1 className='hd'>{title}</h1>
        </div>
        <div className='childpage-nav'>
          {nav.map((item) => (
            <span key={item.url}>
              <Link to={`${item.url}`}>{item.name}</Link> /{' '}
            </span>
          ))}
          <span
            className='active current'
            style={{ textTransform: 'capitalize' }}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChildPageHead;
