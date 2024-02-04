import React from 'react';
import { Layout, theme } from 'antd';
import SideBar from '../sidebar/SideBar';
import NavBar from '../navbar/NavBar';
import { Outlet } from 'react-router-dom';
import { MenuItems } from '../Data';

const { Content } = Layout;

const Leyout = () => {
  //   const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <NavBar />
        <Layout>
          <SideBar itms={MenuItems} subHeading={'Admin'} />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              height: 'auto',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Leyout;
