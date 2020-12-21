import React from 'react';
import ChildPageHead from '../components/ChildPageHead';

const MemberScreen = () => {
  return (
    <>
      <ChildPageHead title={'Member'} nav={[{ url: '/', name: 'Home' }]} />
      <div className='member'>
        <div className='all'>
          <div className='sec-pad2 member-wrap'>
            <div className='member-bg'>
              <img src='/images/member-bg.png' alt='' />
            </div>
            <div className='sec-title2 st-left'>
              <h2 className='hd'>
                QUYỀN LỢI KHI TRỞ THÀNH <br />
                hội viên của chúng tôi
              </h2>
            </div>
            <div className='member-content'>
              <div className='mn-content'>
                <div className='text-column'>
                  <p>
                    Successful businesses have many things in common, today
                    we’ll look at the big ‘R’of recognition and how a digital
                    advertising network may help.
                  </p>
                  <p>
                    Recognition can be illustrated by two individuals entering a
                    crowded room at a party. Both walk to the far side of the
                    room, one of them slips through the crowd easily and
                    unnoticed as they reach the far side. The second person
                    takes much longer to reach the far side because they are
                    engaged in conversations along the way as they continue to
                    meet acquaintances and friends during their path. Which type
                    of person would you like to model your business after?
                  </p>
                  <p>
                    Successful businesses have many things in common, today
                    we’ll look at the big ‘R’of recognition and how a digital
                    advertising network may help.
                  </p>
                  <p>
                    Recognition can be illustrated by two individuals entering a
                    crowded room at a party. Both walk to the far side of the
                    room, one of them slips through the crowd easily and
                    unnoticed as they reach the far side. The second person
                    takes much longer to reach the far side because they are
                    engaged in conversations along the way as they continue to
                    meet acquaintances
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec-pad2 register'>
        <div className='all'>
          <div className='sec-title2 st-left'>
            <h2 className='hd'>Register</h2>
          </div>
          <div className='register-form clear'>
            <form>
              <div className='reg-form-wrap clear'>
                <div className='form__child'>
                  <input
                    type='text'
                    className='f-control'
                    placeholder='Your name'
                  />
                </div>
                <div className='form__child'>
                  <input
                    type='text'
                    className='f-control'
                    placeholder='Email'
                  />
                </div>
                <div className='form__child'>
                  <input
                    type='text'
                    className='f-control'
                    placeholder='Phone number'
                  />
                </div>
                <div className='form__child'>
                  <input
                    type='text'
                    className='f-control'
                    placeholder='Country'
                  />
                </div>
                <div className='form__child'>
                  <input type='text' className='f-control' placeholder='City' />
                </div>
                <div className='form__child'>
                  <input
                    type='text'
                    className='f-control'
                    placeholder='Address'
                  />
                </div>
                <div className='form__child full'>
                  <textarea className='f-control' placeholder='Note'></textarea>
                </div>
              </div>
              <div className='submit-button'>
                <button type='submit' className='mn-btn btn-1'>
                  Sent
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberScreen;
