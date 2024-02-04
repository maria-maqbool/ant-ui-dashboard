import React from 'react';
import { Typography } from 'antd';
import { GoDotFill } from 'react-icons/go';

const { Text } = Typography;

const HistoryItem = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          //   alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ color: 'green', margin: '5px 0px 0px 10px' }}>
          <GoDotFill />
        </div>
        <div>
          <Text strong>Air Conditioner</Text>
          <br />
          <Text type='secondary'>Turned on</Text>
        </div>
        <div>
          <Text strong>03:20</Text>
        </div>
      </div>
    </>
  );
};

export default HistoryItem;
