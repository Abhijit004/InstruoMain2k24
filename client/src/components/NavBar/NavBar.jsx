import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Layout, Menu, Space, Avatar, Dropdown, ConfigProvider, theme, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import {
    ToolOutlined,
    CalendarOutlined,
    DollarOutlined,
    TeamOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import DrawerSidebar from "./SideBar";
import ProfileDropdown from "./ProfileDropdown";
import "./NavBar.css";
import CustomButton from "../../components/CustomButton/CustomButton";

const { Header } = Layout;

const Navbar = ({ user, login, logout }) => {
    const width = window.innerWidth;
    const [selectedKey, setSelectedKey] = useState([""]);

    return (
        <>
            {width >= 810 ? (
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
                        <Link to="/" onClick={() => setSelectedKey([])}>
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
                            selectedKeys={selectedKey}
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[]}
                            style={{
                                fontSize: "1rem",
                                display: "flex",
                                justifyContent: "right",
                                backgroundColor: "transparent",
                            }}
                            className="instruo-navmenu"
                        >
                            <Menu.Item key="/" icon={<HomeOutlined />} onClick={() => setSelectedKey(["/"])}>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            {/* <Menu.Item
                                key="/workshops"
                                icon={<ToolOutlined />}
                                onClick={() => setSelectedKey(["/workshops"])}
                            >
                                <Link to={"/workshops"}>About Us</Link>
                            </Menu.Item> */}
                            <Menu.Item
                                key="/events"
                                icon={<CalendarOutlined />}
                                onClick={() => setSelectedKey(["/events"])}
                            >
                                <Link to="/events">Events</Link>
                            </Menu.Item>
                            <Menu.Item
                                key="/sponsor"
                                icon={<DollarOutlined />}
                                onClick={() => setSelectedKey(["/sponsor"])}
                            >
                                <Link to="/sponsors">Sponsors</Link>
                            </Menu.Item>
                            {/* <Menu.Item
                                key="/team"
                                icon={<TeamOutlined />}
                                onClick={() => setSelectedKey(["/team"])}
                            >
                                <Link to="/team">Our Team</Link>
                            </Menu.Item> */}
                            {/* <Menu.Item>
                                {user ? (
                                    <ProfileDropdown />
                                ) : (
                                    <Link to="/auth">
                                        <CustomButton
                                            style={{
                                                width: "fit-content",
                                                fontWeight: 800,
                                            }}
                                            text={"Login"}
                                        />
                                    </Link>
                                )}
                            </Menu.Item> */}
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
