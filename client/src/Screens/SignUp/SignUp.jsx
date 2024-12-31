import React, { useState, useEffect } from "react";
import { Form, Button, Card, Typography, ConfigProvider, theme, message } from "antd";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

message.config({
    top: 64
})

const { Title } = Typography;

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(user){
            console.log("User logged in!");
            message.success(`Logged in as ${user.name}.\nPlease wait`, 2)
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        };
    }, [user]);

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: "#722ed1",
                    colorInfo: "#a179d8",
                    fontSize: 16,
                    borderRadius: 5,
                },
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "100vh",
                    width: "100vw",
                }}
            >
                <img
                    style={{
                        // position: "fixed",
                        transform: "scale(0.7)",
                        cursor: "pointer",
                    }}
                    src="/favicon.svg"
                    onClick={() => {
                        window.open("http://instruo.tech", "_blank");
                    }}
                />
                <Typography.Title
                    level={1}
                    style={{
                        textAlign: "center",
                        paddingBottom: "2rem",
                    }}
                >
                    Sign in to{" "}
                    <Typography.Text
                        style={{
                            background: "linear-gradient(120deg, var(--pink), var(--sky))",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text !important",
                            color: "transparent",
                            fontWeight: "bold",
                            fontSize: "3rem",
                        }}
                    >
                        INSTRUO
                    </Typography.Text>
                </Typography.Title>
                <Card style={{ width: "min(400px, 80%)", padding: 20 }}>
                    <Form layout="vertical">
                        <Form.Item>
                            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                                <GoogleLogin setUser={setUser}></GoogleLogin>
                            </GoogleOAuthProvider>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
            {/* </GoogleOAuthProvider> */}
        </ConfigProvider>
    );
};

export default SignUp;
