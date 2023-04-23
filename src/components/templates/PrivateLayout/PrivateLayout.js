import React from 'react'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer';


const PrivateLayout = ({ children }) => {
  // uso de colores del tema
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const { Header, Content, Sider } = Layout

  const navigate = useNavigate()

  const siderBarContent = [
    {
      key: String('students'),
      icon: React.createElement(UserOutlined),
      label: 'Students',
      onClick: () => { navigate('/students') }
    },
    {
      key: String('courses'),
      icon: React.createElement(VideoCameraOutlined),
      label: 'Courses',
      onClick: () => { navigate('/courses') }
    }
  ]


  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['students']}
            items={siderBarContent.map(
              (siderBarItem) => ({
                key: siderBarItem.key,
                icon: siderBarItem.icon,
                label: siderBarItem.label,
                onClick: siderBarItem.onClick
              })
            )}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: '79.1vh', background: colorBgContainer }}>{children}</div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  )
}

export default PrivateLayout;
