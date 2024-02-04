import React from 'react';
import { Avatar } from 'antd';

const Member = ({ userName, userAccess }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '5px 0',
        }}
      >
        <Avatar size={40}>USER</Avatar>
        <div style={{ lineHeight: '0.1', marginLeft: '8px' }}>
          <h4>{userName}</h4>
          <p>{userAccess}</p>
        </div>
      </div>
    </>
  );
};

export default Member;
