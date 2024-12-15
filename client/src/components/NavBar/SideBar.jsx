import React, { useState } from "react";
import { Drawer, Menu, ConfigProvider, theme, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
import Icon, {
  ToolOutlined,
  CalendarOutlined,
  DollarOutlined,
  TeamOutlined,
  MenuOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

const DrawerSidebar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const selectedKey = location.pathname;

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontSize: 16,
          borderRadius: 5,
        },
      }}
    >
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1000,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.48)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Icon
            className="menu-open-button"
            component={MenuOutlined}
            onClick={showDrawer}
            style={{
              position: "fixed",
              zIndex: 1000,
            }}
          />
          <Link to="/">
            <div
              className=""
              style={{
                float: "left",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                marginRight: "1rem",
              }}
            >
              Instruo 2k25
            </div>
          </Link>
        </Header>
      </Layout>
      <Drawer
        title="Instruo 2k25"
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/" onClick={closeDrawer}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/events" icon={<ToolOutlined />}>
            <Link to="/events" onClick={closeDrawer}>
              Events
            </Link>
          </Menu.Item>
          <Menu.Item key="/about" icon={<CalendarOutlined />}>
            <Link to="/about" onClick={closeDrawer}>
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item key="/sponsor" icon={<DollarOutlined />}>
            <Link to="/sponsors" onClick={closeDrawer}>
              Sponsors
            </Link>
          </Menu.Item>
          <Menu.Item key="/team" icon={<TeamOutlined />}>
            <Link to="/team" onClick={closeDrawer}>
              Our Team
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </ConfigProvider>
  );
};

export default DrawerSidebar;
