import React from "react";
import { Form, Input, Button, ConfigProvider, theme } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
// import "./Login.css";

const Login = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Login Success:", values);
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: "#722ed1",
                    colorInfo: "#722ed1",
                    fontSize: 16,
                    borderRadius: 5,
                },
            }}
        >
            <div className="register-page">
                <div className="register-container" style={{maxWidth: 400}}>
                    <h2>Login</h2>
                    <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                        {/* Email */}
                        <Form.Item
                            label=""
                            name="email"
                            rules={[{ required: true, message: "Please enter your email" }]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Enter email" />
                        </Form.Item>

                        {/* Password */}
                        <Form.Item
                            label=""
                            name="password"
                            rules={[{ required: true, message: "Please enter your password" }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Enter password" />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit" style={{ width: "100%" }}>
                                Login
                            </Button>
                        </Form.Item>
                        <div style={{ marginTop: "1rem" }}>
                            Don't have an account? {" "}
                            <a href="/register" style={{ color: "#9f64f1", fontWeight: 600, transition: 'all 0.2s ease' }}>
                                Register
                            </a>
                        </div>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Login;
