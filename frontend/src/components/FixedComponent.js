import React, { useEffect, useState } from 'react';

const FixedComponent = () => {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    function scrollTopHandler() {
      if (this.scrollY > this.outerHeight / 2) {
        !showScroll && setShowScroll(true);
      } else {
        showScroll && setShowScroll(false);
      }
    }
    window.addEventListener('scroll', scrollTopHandler);
  }, [showScroll]);

  const scrollTopHandler = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return false;
  };

  return (
    <>
      <button
        className={
          showScroll ? 'scroll-top-link showScroll' : 'scroll-top-link'
        }
        onClick={scrollTopHandler}
        id='scroll-top'
      >
        <i className='fa fa-angle-up'></i>
      </button>
    </>
  );
};

export default FixedComponent;
