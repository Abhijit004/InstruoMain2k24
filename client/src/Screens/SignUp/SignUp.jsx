import React from "react";
import { Form, Button, Card, Typography, ConfigProvider, theme } from "antd";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {useNavigate} from "react-router-dom"

const { Title } = Typography;

const SignUp = () => {
    const navigate = useNavigate();
    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Login Success:", credentialResponse);
        // You can send credentialResponse.credential to your backend for validation
        navigate("/");
    };

    const handleGoogleFailure = () => {
        console.error("Google Login Failed");
    };

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
            <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
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
                                "-webkit-background-clip": "text !important",
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
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={handleGoogleFailure}
                                    text="signin_with"
                                    theme="filled_blue"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" block>
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </GoogleOAuthProvider>
        </ConfigProvider>
    );
};

export default SignUp;
