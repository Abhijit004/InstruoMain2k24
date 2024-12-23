import React, { useState } from "react";
import { Form, Button, Card, Typography, ConfigProvider, theme } from "antd";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const { Title } = Typography;

const GOOGLE_CLIENT_ID = `1087823542920-ektv5k5fq64hj28rs5b8iak18ub525fg.apps.googleusercontent.com`;

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [user, setUser] = useState();

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
                    {user ? user.email : "No email"}
                    <br />
                    {user ? user.name : "No name"}
                </Card>
            </div>
            {/* </GoogleOAuthProvider> */}
        </ConfigProvider>
    );
};

export default SignUp;
