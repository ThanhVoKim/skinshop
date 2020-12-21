import React from 'react';

const Message = ({ variant = 'primary', children }) => {
  return (
    <div className={'alert ' + (variant === 'danger' ? 'danger' : 'primary')}>
      {children}
    </div>
  );
};

export default Message;
