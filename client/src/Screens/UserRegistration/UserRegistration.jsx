import React, { useState } from "react";
import { Form, Input, Button, Radio, ConfigProvider, theme, Card } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

const UserRegistration = ({ regType, maxTeamSize, minTeamSize }) => {
    const [form] = Form.useForm();
    const [regMode, SetRegMode] = useState(regType != 'combined' ? regType : 'individual');
    const options = [
        { label: "Individual", value: "individual", disabled: (regType === 'team') },
        { label: "Team", value: "team", disabled: (regType === 'individual') },
    ];
    maxTeamSize -= 1;

    const onFinish = (values) => {
        console.log("Form values:", values);
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
            <div className="register-page">
                <div className="register-container">
                    <h2>User Registration</h2>

                    <span style={{ fontSize: "1rem", color: "#fff", margin: "0.5rem 0" }}>Registration Mode</span>
                    <Radio.Group
                        size="large"
                        block
                        options={options}
                        defaultValue={regType}
                        optionType="button"
                        buttonStyle="solid"
                        onChange={(e) => SetRegMode(e.target.value)}
                        style={{marginBottom: '1rem', width: '10rem'}}
                        
                    />
                    <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                        {/* Name */}
                        <Form.Item
                            label={`Name ${regMode === 'team' ? '(Team Member 1)' : ''}`}
                            name="name"
                            rules={[{ required: true, message: "Please enter your name" }]}
                        >
                            <Input placeholder="Enter your name" />
                        </Form.Item>

                        {/* Email */}
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your email" },
                                { type: "email", message: "Please enter a valid email" },
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        {/* Phone */}
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[
                                { required: true, message: "Please enter your phone number" },
                                {
                                    pattern: /^\d{10}$/,
                                    message: "Please enter a valid 10-digit phone number",
                                },
                            ]}
                        >
                            <Input placeholder="Enter your phone number" />
                        </Form.Item>

                        {/* Team Name */}
                        {regMode === "team" && (
                            <Form.Item
                                label="Team Name"
                                name="teamName"
                                rules={[{ required: true, message: "Please enter your team name" }]}
                            >
                                <Input placeholder="Enter your team name" />
                            </Form.Item>
                        )}
                        {/* Team Members */}
                        {regMode === "team" && (
                            <Form.List
                                name="teamMembers"
                                rules={[
                                    {
                                        validator: async (_, teamMembers) => {
                                            if (!teamMembers || teamMembers.length < minTeamSize) {
                                                return Promise.reject(new Error(`At least ${minTeamSize} members`));
                                            }
                                            if (teamMembers.length > maxTeamSize) {
                                                return Promise.reject(new Error(`No more than ${maxTeamSize} members`));
                                            }
                                        },
                                    },
                                ]}
                            >
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Card
                                                size="small"
                                                style={{ marginBottom: "1rem" }}
                                                title={`Team Member ${name + 2}`}
                                                key={key}
                                                extra={
                                                    <CloseOutlined
                                                        onClick={() => {
                                                            remove(name);
                                                        }}
                                                    />
                                                }
                                            >
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "name"]}
                                                    rules={[{ required: true, message: "Missing name" }]}
                                                >
                                                    <Input placeholder="Name" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "email"]}
                                                    rules={[
                                                        { required: true, message: "Please enter your email" },
                                                        { type: "email", message: "Please enter a valid email" },
                                                    ]}
                                                >
                                                    <Input placeholder="Email"/>
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "phone"]}
                                                    rules={[
                                                        { required: true, message: "Please enter your phone number" },
                                                        {
                                                            pattern: /^\d{10}$/,
                                                            message: "Please enter a valid 10-digit phone number",
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Phone" />
                                                </Form.Item>
                                            </Card>
                                        ))}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                icon={<PlusOutlined />}
                                                disabled={fields.length >= maxTeamSize}
                                            >
                                                Add Team Member
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        )}
                        {/* Submit Button */}
                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default UserRegistration;
