import React, {useState, useEffect} from "react";
import { Space, Avatar, Dropdown, ConfigProvider, theme, Button, Divider } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import axios from "axios";

const { useToken } = theme;
const items = [
    {
        label: (
            <a href="" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: "0",
        icon: <SettingOutlined />,
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                2nd menu item
            </a>
        ),
        key: "1",
        icon: <SettingOutlined />,
    },
    {
        type: "divider",
    },
    {
        label: "Log Out",
        key: "3",
        icon: <LogoutOutlined />,
    },
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
    useEffect(() => {
        axios
            .get("https://instruo-backend.onrender.com/auth/status", {
                credentials: "include",
            })
            .then((res) => {
                console.log("I have got some status!!");

                console.log(JSON.stringify(res));

                setIsLoggedIn(res.loggedIn);
                if (res.loggedIn) {
                    console.log(res.user);
                }
            })
            .catch((error) => {
                console.error("Error fetching login status:", error);
                setIsLoggedIn(false);
            });
    }, []);

    return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Dropdown
                menu={{
                    items,
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
                        icon={<UserOutlined style={{ color: "#000000", fontSize: 16 }} />}
                        style={{ cursor: "pointer", backgroundColor: "#fff" }}
                    />
                </Space>
            </Dropdown>
        </ConfigProvider>
    );
};

export default ProfileDropdown;
