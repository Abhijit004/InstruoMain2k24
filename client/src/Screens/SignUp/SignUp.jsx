import React from "react";
import { Form, Button, Card, Typography, ConfigProvider, theme } from "antd";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const google_client_id = `paste_ID_here_@tejas`;

const SignUp = () => {
    const navigate = useNavigate();
    

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
                <Card style={{ width: "min(400px, 80%)", padding: 20 }}>
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
                    <Form layout="vertical">
                        <Form.Item>
                            <Button type="primary" block href="http://localhost:5000/auth/google">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </ConfigProvider>
    );
};

export default SignUp;
