import React, {useState, useEffect} from "react";
import { Space, Avatar, Dropdown, ConfigProvider, theme, Button, Divider } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "./AuthContext";

const { useToken } = theme;
const itemsLogin = [
    {
        type: "divider",
    },
    {
        label: (
            <Link href="/auth/login">
                Login
            </Link>
        ),
        key: "0",
        icon: <LoginOutlined />,
    }
];
const itemsLogout = [
    {
        label: (
            <a href="http://localhost:5000/auth/logout">
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

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
            axios
            .get("http://localhost:5000/user/status", {
                withCredentials: true,
            })
            .then((res) => {
                console.log("Status fetch successful.");

                console.log("Login status: "+res.data.loggedIn);

                setIsLoggedIn(res.data.loggedIn);
                if (res.data.loggedIn) {
                    setUser(res.data.user)
                }
            })
            .catch((error) => {
                console.log("Error fetching login status:", error);
            });
    }, []);

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
                            <h3>{isLoggedIn?user?.name:"No user"}</h3>
                            <span style={{ opacity: "0.7" }}>{isLoggedIn?user?.email:""}</span>
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
                        icon={!isLoggedIn ? <UserOutlined style={{ color: "#000", fontSize: 16 }} /> : null}
                        style={{ cursor: "pointer", backgroundColor: "#fff" }}
                        src={isLoggedIn?user?.image:""}
                    />
                </Space>
            </Dropdown>
        </ConfigProvider>
    );
};

export default ProfileDropdown;
