import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { ToolOutlined, CalendarOutlined, DollarOutlined, TeamOutlined, HomeOutlined } from '@ant-design/icons';
import DrawerSidebar from "./SideBar";
import "./NavBar.css";

const { Header } = Layout;

const Navbar = () => {
    const width = window.innerWidth;
    return (
        <>
            {width >= 700 ? (
                <Layout>
                    <Header
                        style={{
                            position: "fixed",
                            zIndex: 100000,
                            width: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.48)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <Link to="/">
                            <div
                                className="logo"
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
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["/"]}
                            style={{
                                fontSize: "1rem",
                                display: "flex",
                                justifyContent: "right",
                                backgroundColor: "transparent",
                            }}
                            className="instruo-navmenu"
                        >
                            <Menu.Item key="/" icon={<HomeOutlined />}>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="/events" icon={<CalendarOutlined />}>
                                <Link to="/events">Events</Link>
                            </Menu.Item>
                            <Menu.Item key="/sponsor" icon={<DollarOutlined />}>
                                <Link to="/sponsors">Sponsors</Link>
                            </Menu.Item>
                            <Menu.Item key="/register" icon={<TeamOutlined />}>
                                <Link to="/team">Our Team</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
            ) : (
                <DrawerSidebar />
            )}
        </>
    );
};

export default Navbar;
