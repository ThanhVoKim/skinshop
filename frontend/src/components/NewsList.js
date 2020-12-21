import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = ({ columns = false, data = [] }) => {
  const isColumns = columns;
  return (
    <>
      <ul className={isColumns && 'col3-container'}>
        {data.map((item) => (
          <li key={`${item._id}`} className={isColumns ? 'col3__item' : ''}>
            <div className='info-card glareEffect'>
              <div className='img'>
                <Link to={`/news/${item._id}`}>
                  <img src={`${item.image}`} alt={`${item.title}`} />
                </Link>
              </div>
              <div className='ct'>
                <h4 className='hd'>
                  <Link to={`/news/${item._id}`}>{`${item.title}`}</Link>
                </h4>
                <p>{`${item.description}`}</p>
                <Link to={`/news/${item._id}`} className='text-btn'>
                  View more
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsList;
