import React, {useState, useEffect} from "react";
import { Space, Avatar, Dropdown, ConfigProvider, theme, Button, Divider } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import axios from "axios";

const { useToken } = theme;
const itemsLogin = [
    {
        type: "divider",
    },
    {
        label: (
            <a href="https://instruo-backend.onrender.com/auth/google">
                Login
            </a>
        ),
        key: "0",
        icon: <LoginOutlined />,
    }
];
const itemsLogout = [
    {
        type: "divider",
    },
    {
        label: (
            <a href="https://instruo-backend.onrender.com/auth/logout">
                Logout
            </a>
        ),
        key: "0",
        icon: <LoginOutlined />,
    }
];

const ProfileDropdown = () => {
    const token = useToken();
    const contentStyle = {
        backgroundColor: "#1f1f1f",
        borderRadius: "5px",
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle = {
        boxShadow: "none",
    };

    const [isLoggedIn, setIsLoggedIn] = useState(null);
    // useEffect(() => {
    //         fetch("https://instruo-backend.onrender.com/auth/status", {
    //             credentials: "include",
    //         })
    //         .then((res)=>res.json())
    //         .then((data) => {
    //             console.log("I have got some status!!");

    //             console.log(JSON.stringify(data, null, 2));

    //             setIsLoggedIn(data.loggedIn);
    //             if (data.loggedIn) {
    //                 console.log(data.user);
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching login status:", error);
    //             setIsLoggedIn(false);
    //         });
    // }, []);

    return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Dropdown
                menu={{
                    items: isLoggedIn?itemsLogout:itemsLogin,
                }}
                trigger={["click"]}
                dropdownRender={(menu) => (
                    <div style={contentStyle}>
                        <Space
                            style={{
                                padding: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                                gap: "0",
                            }}
                        >
                            <h2>User name</h2>
                            <span style={{ opacity: "0.7" }}>email@gmail.com</span>
                        </Space>
                        {React.cloneElement(menu, {
                            style: menuStyle,
                        })}
                    </div>
                )}
            >
                <Space>
                    <Avatar
                        size="large"
                        icon={<UserOutlined style={{ color: "#000" }} />}
                        style={{ cursor: "pointer", backgroundColor: "#fff" }}
                    />
                </Space>
            </Dropdown>
        </ConfigProvider>
    );
};

export default ProfileDropdown;
