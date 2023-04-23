import React from 'react'
import { Layout } from 'antd';

const Footer = () => {
  const { Footer } = Layout

  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  return <Footer style={{ textAlign: 'center' }}>Flaquitos 2.0 <b>@{getCurrentYear()}</b></Footer>
}

export default Footer;


