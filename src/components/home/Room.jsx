import React from 'react';
import { Card } from 'antd';

const Room = ({ key, icon, room, devices }) => {
  return (
    <>
      <Card style={{ width: 160 }} id={key}>
        <span
          style={{
            color: 'blue',
            fontSize: '20px',
            padding: '6px 8px',
            background: '#cce6fb',
            borderRadius: '8px',
          }}
        >
          {icon}
        </span>
        <h5 style={{ lineHeight: 0.4 }}>{room}</h5>
        <p style={{ lineHeight: 0.4 }}>{devices}</p>
      </Card>
    </>
  );
};

export default Room;
