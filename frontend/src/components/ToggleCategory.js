import React, { useState } from 'react';

const dataNav = [
  {
    category: 'aurora',
    name: 'Aurora',
  },
  {
    category: 'enchanted',
    name: 'Enchanted',
  },
  {
    category: 'clean',
    name: 'Clean-protect',
  },
];

const ToggleCategory = ({ setKeyword }) => {
  const [selectCate, setSelectCate] = useState('aurora');

  const toggleHandler = (e) => {
    const active = e.target.getAttribute('data-cate');
    if (setKeyword) setKeyword(active);
    setSelectCate(active);
  };
  return (
    <ul className='list-cateprd-nav'>
      {dataNav.map((item) => (
        <li
          key={item.category}
          className={item.category === selectCate ? 'active' : ''}
        >
          <button
            type='button'
            onClick={toggleHandler}
            data-cate={item.category}
            className='tabswap-btn'
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToggleCategory;
