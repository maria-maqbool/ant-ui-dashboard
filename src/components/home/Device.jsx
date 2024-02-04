import React from 'react';
import { Card } from 'antd';

const Device = ({ key, btn, switchIcon, icon, deviceName }) => {
  return (
    <>
      <Card style={{ width: 160 }}>
        <div>
          <span style={{ marginRight: '40px' }}>{btn}</span>
          {switchIcon}
        </div>
        <span
          style={{
            margin: '15px',
            background: '#4096FF',
            color: 'white',
            fontSize: '20px',
            padding: '6px 8px',
            borderRadius: '8px',
          }}
        >
          {icon}
        </span>
        <p>{deviceName}</p>
      </Card>
    </>
  );
};

export default Device;
