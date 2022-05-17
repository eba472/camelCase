import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link, Route, Router, Routes } from "react-router-dom";
import Members from "./Members";

const { Header, Content, Sider } = Layout;
const items1 = ["Home", "Members", "Calendar", "Articles"].map(
  (menuItem, key) => ({
    key,
    label: menuItem,
    path: menuItem
  })
);

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      // children: new Array(4).fill(null).map((_, j) => {
      //   const subKey = index * 4 + j + 1;
      //   return {
      //     key: subKey,
      //     label: `option${subKey}`,
      //   };
      // }),
    };
  }
);

function MainMenu() {
  const [current, setCurrent] = React.useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onClick} 
          selectedKeys={[current]} 
          defaultSelectedKeys={["2"]}
          items={items1}
        ></Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Routes>
                <Route path="members" element={<Members />}></Route>
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainMenu;
