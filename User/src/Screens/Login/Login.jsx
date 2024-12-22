// import React from "react";
// import { Form, Input, Button, ConfigProvider, theme } from "antd";
// import { MailOutlined, LockOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//     const [form] = Form.useForm();
//     const navigate = useNavigate();

//     const onFinish = (values) => {
//         console.log("Login Success:", values);
//         navigate("/uregister")
//     };

//     return (
//         <ConfigProvider
//             theme={{
//                 algorithm: theme.darkAlgorithm,
//                 token: {
//                     colorPrimary: "#722ed1",
//                     colorInfo: "#722ed1",
//                     fontSize: 16,
//                     borderRadius: 5,
//                 },
//             }}
//         >
//             <div className="register-page" style={{height: '100vh'}}>
//                 <div className="register-container" style={{maxWidth: 400}}>
//                     <h2 style={{width: '100%', textAlign: 'center'}}>Contestant Login</h2>
//                     <Form form={form} layout="vertical" onFinish={onFinish} size="large">
//                         {/* Email */}
//                         <Form.Item
//                             label=""
//                             name="email"
//                             rules={[{ required: true, message: "Please enter your email" }]}
//                         >
//                             <Input prefix={<MailOutlined />} placeholder="Enter email" />
//                         </Form.Item>

//                         {/* Password */}
//                         <Form.Item
//                             label=""
//                             name="password"
//                             rules={[{ required: true, message: "Please enter your password" }]}
//                         >
//                             <Input.Password prefix={<LockOutlined />} placeholder="Enter password" />
//                         </Form.Item>

//                         {/* Submit Button */}
//                         <Form.Item>
//                             <Button size="large" type="primary" htmlType="submit" style={{ width: "100%" }}>
//                                 Login
//                             </Button>
//                         </Form.Item>
//                         <div style={{ marginTop: "1rem" }}>
//                             Don't have an account? {" "}
//                             <a href="/register" style={{ color: "#9f64f1", fontWeight: 600, transition: 'all 0.2s ease' }}>
//                                 Register
//                             </a>
//                         </div>
//                     </Form>
//                 </div>
//             </div>
//         </ConfigProvider>
//     );
// };

import React from "react";
import { Form, Button, Card, Typography, ConfigProvider, theme } from "antd";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const { Title } = Typography;

const Login = () => {
    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Login Success:", credentialResponse);
        // You can send credentialResponse.credential to your backend for validation
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
                    <img
                        style={{
                            // position: "fixed",
                            transform: "scale(0.7)",
                            cursor: "pointer",
                        }}
                        src="/assets/favicon.svg"
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

export default Login;
