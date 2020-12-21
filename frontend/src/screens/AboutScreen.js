import React from 'react';
import ChildPageHead from '../components/ChildPageHead';
import GetInfo from '../components/GetInfo';

const AboutScreen = () => {
  const nav = [{ url: '/', name: 'Home' }];
  return (
    <>
      <ChildPageHead title='About' nav={nav} />
      <div
        className='about-us'
        style={{ backgroundImage: "url('/images/about-us-bg.png')" }}
      >
        <div className='sec-pad2 history'>
          <div className='all'>
            <div className='sec-title2'>
              <h2 className='hd'>branding history</h2>
            </div>
            <ul className='history-line slider-css' id='slider-4-col'>
              <li className='hline__item'>
                <div className='hline-card'>
                  <div className='icon'>
                    <span
                      className='line-dot'
                      style={{
                        backgroundImage: 'url("../images/border-line-br.png")',
                      }}
                    ></span>
                    <div
                      className='img'
                      style={{
                        backgroundImage:
                          'url("../images/features-product-number-bg.png")',
                      }}
                    >
                      <img src='/images/history-line-icon1.png' alt='' />
                    </div>
                  </div>
                  <div className='ct'>
                    <h4 className='hd'>2006</h4>
                    There is a moment in the life of any aspiring astronomer
                    that it is time to buy that first telescope.
                  </div>
                </div>
              </li>
              <li className='hline__item'>
                <div className='hline-card'>
                  <div className='icon'>
                    <span
                      className='line-dot'
                      style={{
                        backgroundImage: 'url("../images/border-line-br.png")',
                      }}
                    ></span>
                    <div
                      className='img'
                      style={{
                        backgroundImage:
                          'url("../images/features-product-number-bg.png")',
                      }}
                    >
                      <img src='/images/history-line-icon2.png' alt='' />
                    </div>
                  </div>
                  <div className='ct'>
                    <h4 className='hd'>2007</h4>
                    There is a moment in the life of any aspiring astronomer
                    that it is time to buy that first telescope.
                  </div>
                </div>
              </li>
              <li className='hline__item'>
                <div className='hline-card'>
                  <div className='icon'>
                    <span
                      className='line-dot'
                      style={{
                        backgroundImage: 'url("../images/border-line-br.png")',
                      }}
                    ></span>
                    <div
                      className='img'
                      style={{
                        backgroundImage:
                          'url("../images/features-product-number-bg.png")',
                      }}
                    >
                      <img src='/images/history-line-icon3.png' alt='' />
                    </div>
                  </div>
                  <div className='ct'>
                    <h4 className='hd'>2008</h4>
                    There is a moment in the life of any aspiring astronomer
                    that it is time to buy that first telescope.
                  </div>
                </div>
              </li>
              <li className='hline__item'>
                <div className='hline-card'>
                  <div className='icon'>
                    <span
                      className='line-dot'
                      style={{
                        backgroundImage: 'url("../images/border-line-br.png")',
                      }}
                    ></span>
                    <div
                      className='img'
                      style={{
                        backgroundImage:
                          'url("../images/features-product-number-bg.png")',
                      }}
                    >
                      <img src='/images/history-line-icon4.png' alt='' />
                    </div>
                  </div>
                  <div className='ct'>
                    <h4 className='hd'>2009</h4>
                    There is a moment in the life of any aspiring astronomer
                    that it is time to buy that first telescope.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='sec-pad1 vision'>
          <div className='all'>
            <div className='vision-wrap'>
              <span
                className='vision-bg'
                style={{ backgroundImage: 'url(./images/vision-bg.jpg)' }}
              ></span>
              <ul className='list-vision'>
                <li className='vision__item'>
                  <div className='front-back-card'>
                    <div className='front-card'>
                      <div className='img'>
                        <img src='/images/vision-icon-1.png' alt='' />
                      </div>
                      <h4 className='hd'>
                        BUsiness <br />
                        Philosophy
                      </h4>
                      <div className='card-ct'>
                        There is a moment in the life of any aspiring astronomer
                        that it is time to buy that
                      </div>
                    </div>
                    <div
                      className='back-card'
                      style={{
                        backgroundImage:
                          'url("./images/vision-backcard-bg.png")',
                      }}
                    >
                      <div className='img'>
                        <img src='/images/vision-icon-1.png' alt='' />
                      </div>
                      <h4 className='hd'>
                        BUsiness <br />
                        Philosophy
                      </h4>
                      <div className='card-ct'>
                        There is a moment in the life of any aspiring astronomer
                        that it is time to buy that
                      </div>
                    </div>
                  </div>
                </li>
                <li className='vision__item'>
                  <div className='front-back-card'>
                    <span
                      className='border-dot'
                      style={{
                        backgroundImage: 'url("./images/border-dot-right.png")',
                      }}
                    ></span>
                    <div className='front-card'>
                      <div className='img'>
                        <img src='/images/vision-icon-2.png' alt='' />
                      </div>
                      <h4 className='hd'>OUr mission</h4>
                      <div className='card-ct'>
                        There is a moment in the life of any aspiring astronomer
                        that it is time to buy that
                      </div>
                    </div>
                    <div
                      className='back-card'
                      style={{
                        backgroundImage:
                          'url("./images/vision-backcard-bg.png")',
                      }}
                    >
                      <div className='img'>
                        <img src='/images/vision-icon-2.png' alt='' />
                      </div>
                      <h4 className='hd'>OUr mission</h4>
                      <div className='card-ct'>
                        There is a moment in the life of any aspiring astronomer
                        that it is time to buy that
                      </div>
                    </div>
                  </div>
                </li>
                <li className='vision__item'>
                  <div className='front-back-card'>
                    <span
                      className='border-dot'
                      style={{
                        backgroundImage: 'url("./images/border-dot-right.png")',
                      }}
                    ></span>
                    <div className='front-card'>
                      <div className='img'>
                        <img src='/images/vision-icon-3.png' alt='' />
                      </div>
                      <h4 className='hd'>OUr Vission</h4>
                      <div className='card-ct'>
                        There is a moment in the life of any aspiring astronomer
                        that it is time to buy that
                      </div>
                    </div>
                    <div
                      className='back-card'
                      style={{
                        backgroundImage:
                          'url("./images/vision-backcard-bg.png")',
                      }}
                    >
                      <div className='img'>
                        <img src='/images/vision-icon-3.png' alt='' />
                      </div>
                      <h4 className='hd'>OUr Vission</h4>
                      <div className='card-ct'>
                        There is a moment in the life of any aspiring astronomer
                        that it is time to buy that
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <GetInfo />
    </>
  );
};

export default AboutScreen;
