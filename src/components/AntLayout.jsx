import LOGO from "../assets/images/logo.png";
import React, { act, useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  LoginOutlined,
  ProfileFilled,
  LogoutOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutModal from "./LogoutModal";

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children, isUser }) => {
  console.log("isUser:", isUser);
  // const [collapsed, setCollapsed] = useState(false);
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 576);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  let currentPath;
  if (location.pathname === "/") {
    currentPath = "/login";
  } else {
    currentPath = location.pathname;
  }
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical text-center"></div>
        <Menu
          onClick={(data) => {
            if (data.key === "/logoutmodal") {
              setModal2Open(true);
            } else {
              navigate(data.key);
            }
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={currentPath}
          selectedKeys={currentPath}
          items={[
            !isUser && {
              key: "/login",
              icon: <LoginOutlined />,
              label: "Login",
            },

            !isUser && {
              key: "/signup",
              icon: <UserOutlined />,
              label: "Signup",
            },
            isUser && {
              key: "/profile",
              icon: <ProfileFilled />,
              label: "Profile",
            },
            isUser && {
              key: "/logoutmodal",
              icon: <LogoutOutlined />,
              label: "Logout",
              onClick: () => setModal2Open(true),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "84vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
        <LogoutModal
          open={modal2Open}
          close={() => setModal2Open(false)}
        />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
