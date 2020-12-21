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
];

const NewsDetailsScreen = () => {
  const nav = [{ url: '/', name: 'Home' }];
  return (
    <>
      <ChildPageHead title='News' nav={nav} />
      <div className='sec-pad2 news'>
        <div className='all'>
          <div className='row100'>
            <div className='col65 left'>
              <div className='news-detail news-content'>
                <h3 className='black'>
                  5 REASONS TO PURCHASE DESKTOP COMPUTERS
                </h3>
                <p className='meta'>3 minutes ago</p>
                <p>
                  Strep throat is inflammation of the throat, tonsils and lymph
                  nodes due to infection with group A streptococcus bacteria.
                  Strep throat is very common during the flu seasons and it can
                  be preceded by mild symptoms such as runny nose, sneezing or
                  cough. The incubation period of strep throat is around 3-5
                  days and most symptoms occur within this period of time.
                  Common symptoms of strep throat are: throat inflammation and
                  swelling, difficult swallowing, difficult breathing,
                  mucus-producing cough, fatigue, body weakness, headache,
                  nausea, poor appetite, enlargement of the lymph nodes and
                  tonsils, excessive sweating and fever.
                </p>
                <p>
                  Strep throat is very contagious and the bacteria responsible
                  for causing the illness can be easily transmitted from a
                  person to another by direct touch, sneezing or coughing. In
                  order to prevent infection with streptococcus bacteria, it is
                  very important to maintain proper personal hygiene and to
                  avoid entering in contact with infected people.
                </p>
                <div className='img'>
                  <img src='/images/news-detail.jpg' alt='' />
                </div>
                <p>
                  Strep throat is inflammation of the throat, tonsils and lymph
                  nodes due to infection with group A streptococcus bacteria.
                  Strep throat is very common during the flu seasons and it can
                  be preceded by mild symptoms such as runny nose, sneezing or
                  cough. The incubation period of strep throat is around 3-5
                  days and most symptoms occur within this period of time.
                  Common symptoms of strep throat are: throat inflammation and
                  swelling, difficult swallowing, difficult breathing,
                  mucus-producing cough, fatigue, body weakness, headache,
                  nausea, poor appetite, enlargement of the lymph nodes and
                  tonsils, excessive sweating and fever.
                </p>
                <p>
                  Strep throat is very contagious and the bacteria responsible
                  for causing the illness can be easily transmitted from a
                  person to another by direct touch, sneezing or coughing. In
                  order to prevent infection with streptococcus bacteria, it is
                  very important to maintain proper personal hygiene and to
                  avoid entering in contact with infected people.
                </p>
                <div
                  className='line-break'
                  style={{ backgroundImage: 'url(/images/border-line-br.png)' }}
                ></div>
              </div>
              <div className='share-media'>
                <div className='title'>Share</div>
                <a
                  href='https://facebook.com/'
                  className='btn-icon'
                  style={{ background: '#0054a6' }}
                >
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
                <a
                  href='https://twitter.com/'
                  className='btn-icon'
                  style={{ background: '#00aeef' }}
                >
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>
                <a
                  href='https://linkedin.com/'
                  className='btn-icon'
                  style={{ background: '#005b7f' }}
                >
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>
              </div>
            </div>
            <div className='col35 right'>
              <div className='sec-title2 st-left'>
                <h2 className='hd'>Các tin khác</h2>
              </div>
              <div className='aside-list'>
                <NewsList data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInfosChild />
    </>
  );
};

export default NewsDetailsScreen;
