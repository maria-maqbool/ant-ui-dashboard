import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { IoNotifications } from 'react-icons/io5';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const { Header } = Layout;

const items = [
  {
    label: <a href='https://www.antgroup.com'>1st menu item</a>,
    key: '0',
  },
  {
    label: <a href='https://www.aliyun.com'>2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const NavBar = () => {
  //   const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <img
            src='https://logowik.com/content/uploads/images/dashboard5777.jpg'
            alt='Logo'
            width={150}
            style={{ margin: '40px auto' }}
          />
        </div>

        <Button
          icon={<SearchOutlined />}
          style={{ padding: '0px 90px 5px 20px ' }}
        >
          Search
        </Button>

        <div>
          <span style={{ fontSize: '20px' }}>
            <IoNotifications />
          </span>

          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar
                  size='large'
                  icon={<UserOutlined />}
                  style={{ margin: '0 0.6rem' }}
                />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};

export default NavBar;
