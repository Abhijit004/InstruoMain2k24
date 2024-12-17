import React, { useState } from "react";
import { Form, Input, DatePicker, Upload, Button, ConfigProvider, theme } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import "./EventRegistration.css";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const EventRegistration = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form values:", values);
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
                <div className="register-container">
                    <h2>Event Registration</h2>
                    <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                        {/* Name */}
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Please enter the event name" }]}
                        >
                            <Input placeholder="Enter event name" />
                        </Form.Item>

                        {/* Description */}
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: "Please enter a description" }]}
                        >
                            <TextArea rows={4} placeholder="Enter event description" />
                        </Form.Item>

                        {/* Start Time and End Time */}
                        <Form.Item
                            label="Start and End Time"
                            name="time"
                            rules={[{ required: true, message: "Please select start and end time" }]}
                        >
                            <RangePicker showTime />
                        </Form.Item>

                        {/* Venue */}
                        <Form.Item
                            label="Venue"
                            name="venue"
                            rules={[{ required: true, message: "Please enter the venue" }]}
                        >
                            <Input placeholder="Enter event venue" />
                        </Form.Item>

                        {/* Rules */}
                        <Form.Item
                            label="Rules"
                            name="rules"
                            rules={[{ required: true, message: "Please specify the rules" }]}
                        >
                            <TextArea rows={3} placeholder="Enter event rules" />
                        </Form.Item>

                        {/* Rules Document URL */}
                        <Form.Item
                            label="Rules Document URL"
                            name="rulesDocUrl"
                            rules={[
                                {
                                    required: true,
                                    type: "url",
                                    message: "Please enter a valid URL for the rules document",
                                },
                            ]}
                        >
                            <Input placeholder="Enter URL" />
                        </Form.Item>

                        {/* Poster Image */}
                        <Form.Item
                            label="Poster Image"
                            name="posterImage"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Upload maxCount={1} listType="picture" accept="image/*" action={"/#"}>
                                <Button icon={<UploadOutlined />}>Upload Poster</Button>
                            </Upload>
                        </Form.Item>

                        {/* Gallery Images */}
                        <Form.Item label="Gallery Images" name="galleryImages">
                            <Upload multiple listType="picture" accept="image/*">
                                <Button icon={<UploadOutlined />}>Upload Gallery Images</Button>
                            </Upload>
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit">
                                Register Event
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default EventRegistration;
