import React from 'react';
import { Layout, Menu, theme } from 'antd';
import Footer from '../Footer/Footer';
const { Header, Content } = Layout;

const PublicLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
        />
      </Header>
      <Content
        style={{
          padding: 0
        }}
      >
        <div
          className="site-layout-content"
          style={{
            padding: 24,
            background: colorBgContainer,
            minHeight: '82.4vh'
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default PublicLayout;