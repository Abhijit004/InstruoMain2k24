import React, { useState, useEffect } from "react";
import { Space, Avatar, Dropdown, ConfigProvider, theme, Button, Divider, message } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";
// import { AuthContext } from "./AuthContext";
import { googleLogout, googleStatus } from "../../services/api";

message.config({
    top: 64
})

const { useToken } = theme;

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

    const handleLogout = async() => {
        try {
            const res = await googleLogout();
            console.log("Logout successfully");
            message.success("Logout successful. Please wait.")
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        } catch (err) {
            console.log("Unable to call logout");
            console.log(err.message);
            message.error("Soem error occured in logout. Please try again later.")
        }
    };

    const handleLogin = ()=>{
        window.location.href="/auth"
    }

    const handleStatus = async()=>{
        try{
            const res = await googleStatus();
            setIsLoggedIn(res.data.loggedIn);
            if(res.data.loggedIn){
                setUser(res.data.user);
                // message.success("Logged in as "+res.data.user.name, 5)
            }
        }catch(err){
            console.log("Login failed:");
            console.log(err.message);
        }
    }

    const itemsLogin = [
        {
            type: "divider",
        },
        {
            label: <div onClick={handleLogin}>Login</div>,
            key: "0",
            icon: <LoginOutlined />,
        },
    ];
    const itemsLogout = [
        {
            label: <div onClick={handleLogout}>Logout</div>,
            key: "0",
            icon: <LoginOutlined />,
        },
    ];

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect( () => {
        handleStatus();
    }, []);

    return (
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
            <Dropdown
                menu={{
                    items: isLoggedIn ? itemsLogout : itemsLogin,
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
                            {isLoggedIn && (<h3>{user?.name}</h3>)}
                            <span style={{ opacity: "0.7" }}>{isLoggedIn ? user?.email : ""}</span>
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
                        src={isLoggedIn ? user?.image : ""}
                    />
                </Space>
            </Dropdown>
        </ConfigProvider>
    );
};

export default ProfileDropdown;
