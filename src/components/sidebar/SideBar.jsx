import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { PiHandWavingFill } from 'react-icons/pi';
import { Avatar } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const { Sider } = Layout;

const SideBarMenu = ({ title }) => {
  return (
    <>
      <Title level={5} style={{ padding: '10px 20px' }}>
        {title}
      </Title>
    </>
  );
};

const SideBar = ({ itms, subHeading }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div
          className='avtar_container'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '40px auto',
          }}
        >
          <Avatar shape='square' size={64}>
            <img
              src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMrHEuJI7Sbh1b5-m8EDk_3_XWeqEfrhkQs-UQ2x-A5z4P5jW0gEul7y7ZD1tID0OKwoPzj3xFxKOxgz-JEMGXCxgDeInk_imbDUNgSqhr_cnxSYCbSZo-8cq5KbWB7PBURIgnQsWNQPlvfpH9GEaH0KU9xSRYexpt0nJKBqPOF9COzT6o-g7blBmbarWW/s16000/af618f4501874a3c90f25bb1c2e0afba%20(1).png'
              alt='img'
              width={50}
              height={50}
              style={{ margin: '7px auto', borderRadius: '5px' }}
            />
          </Avatar>
          <div style={{ padding: '15px 10px', lineHeight: '0.1' }}>
            <p>
              Hello <PiHandWavingFill style={{ color: '#ffcb41' }} />
            </p>
            <h5>Jenifer Feroz</h5>
          </div>
        </div>
        <div className='demo-logo-vertical' />
        {subHeading && <SideBarMenu title={subHeading} />}

        <Menu mode='inline' defaultSelectedKeys={['1']} items={itms} />
      </Sider>
    </>
  );
};

export default SideBar;
