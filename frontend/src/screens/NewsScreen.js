import React from 'react';
import ChildPageHead from '../components/ChildPageHead';
import GetInfosChild from '../components/GetInfosChild';
import NewsList from '../components/NewsList';

const data = [
  {
    image: '/images/info-card-img1.jpg',
    title: 'Kook 2 Directory Add Url Free',
    description: 'There is a moment in the life of any aspiring astronomer',
    _id: '1',
  },
  {
    image: '/images/info-card-img2.jpg',
    title: 'Effective Advertising Pointers',
    description: 'There is a moment in the life of any aspiring astronomer',
    _id: '2',
  },
  {
    image: '/images/info-card-img3.jpg',
    title: 'Advertise No Matter If You Are Big Or Small',
    description: 'There is a moment in the life of any aspiring astronomer',
    _id: '3',
  },
  {
    image: '/images/info-card-img4.jpg',
    title: 'Promotional Advertising',
    description: 'There is a moment in the life of any aspiring astronomer',
    _id: '4',
  },
  {
    image: '/images/info-card-img1.jpg',
    title: 'Kook 2 Directory Add Url Free',
    description: 'There is a moment in the life of any aspiring astronomer',
    _id: '5',
  },
  {
    image: '/images/info-card-img2.jpg',
    title: 'Effective Advertising Pointers',
    description: 'There is a moment in the life of any aspiring astronomer',
    _id: '6',
  },
  {
    image: '/images/info-card-img3.jpg',
    title: 'Advertise No Matter If You Are Big Or Small',
    description: 'There is a moment in the life of any aspiring astronomer',
    _id: '7',
  },
  {
    image: '/images/info-card-img4.jpg',
    title: 'Promotional Advertising',
    description: 'There is a moment in the life of any aspiring astronomer',
    _id: '8',
  },
];

const NewsScreen = () => {
  const nav = [{ url: '/', name: 'Home' }];
  return (
    <>
      <ChildPageHead title='News' nav={nav} />
      <div className='sec-pad2 news'>
        <div className='all'>
          <NewsList data={data} columns={true} />
        </div>
      </div>
      <GetInfosChild />
    </>
  );
};

export default NewsScreen;
