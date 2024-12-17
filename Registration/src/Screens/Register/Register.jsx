import React from "react";
import { Form, Input, Button, ConfigProvider, theme } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Registration Success:", values);
        navigate("/login");
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
                <div className="register-container" style={{ maxWidth: 400 }}>
                    <h2>Register</h2>
                    <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                        {/* Name */}
                        <Form.Item
                            // label="Name"
                            name="name"
                            rules={[{ required: true, message: "Please enter your name" }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Enter name" />
                        </Form.Item>

                        {/* Phone */}
                        <Form.Item
                            // label="Phone"
                            name="phone"
                            rules={[{ required: true, message: "Please enter your phone number" }]}
                        >
                            <Input prefix={<PhoneOutlined />} placeholder="Enter phone number" />
                        </Form.Item>

                        {/* Email */}
                        <Form.Item
                            // label="Email"
                            name="email"
                            rules={[{ required: true, message: "Please enter your email" }]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Enter email" />
                        </Form.Item>

                        {/* Password */}
                        <Form.Item
                            // label="Password"
                            name="password"
                            rules={[{ required: true, message: "Please enter your password" }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Enter password" />
                        </Form.Item>

                        {/* Confirm Password */}
                        <Form.Item
                            // label="Confirm Password"
                            name="confirmPassword"
                            dependencies={["password"]}
                            rules={[
                                { required: true, message: "Please confirm your password" },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error("The two passwords do not match!"));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Confirm password" />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit" style={{ width: "100%" }}>
                                Register
                            </Button>
                        </Form.Item>
                        <div style={{ marginTop: "1rem" }}>
                            Already have an account ?{" "}
                            <a href="/login" style={{ color: "#9f64f1", fontWeight: 600, transition: "all 0.2s ease" }}>
                                Sign in
                            </a>
                        </div>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Register;
