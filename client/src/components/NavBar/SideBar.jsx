import React, { useState } from "react";
import { Drawer, Menu, ConfigProvider, theme, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
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
                        display: "flex",
                        justifyContent: "space-between",
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
                    {/* <ProfileDropdown /> */}
                </Header>
            </Layout>
            <Drawer
                title="Instruo 2k25"
                placement="left"
                closable={true}
                onClose={closeDrawer}
                visible={visible}
                bodyStyle={{ padding: 0 }}
                width={"100vw"}
            >
                <Menu
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    style={{ 
                        height: "100%", 
                        background: `url("/assets/sidebar-banner.png")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <Menu.Item key="/" icon={<HomeOutlined />}>
                        <Link to="/" onClick={closeDrawer}>
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/events" icon={<CalendarOutlined />}>
                        <Link to="/events" onClick={closeDrawer}>
                            Events
                        </Link>
                    </Menu.Item>
                    {/* <Menu.Item key="/workshops" icon={<ToolOutlined />}>
                        <Link to="/workshops" onClick={closeDrawer}>
                            Workshops
                        </Link>
                    </Menu.Item> */}
                    <Menu.Item key="/sponsor" icon={<DollarOutlined />}>
                        <Link to="/sponsors" onClick={closeDrawer}>
                            Sponsors
                        </Link>
                    </Menu.Item>
                    {/* <Menu.Item key="/team" icon={<TeamOutlined />}>
                        <Link to="/team" onClick={closeDrawer}>
                            Our Team
                        </Link>
                    </Menu.Item> */}
                </Menu>
            </Drawer>
        </ConfigProvider>
    );
};

export default DrawerSidebar;
