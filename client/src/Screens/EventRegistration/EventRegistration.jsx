import React, { useState } from "react";
import { Form, Input, DatePicker, Upload, Button, ConfigProvider, theme, InputNumber, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./EventRegistration.css";
import axios from "axios";

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const EventRegistration = () => {
    const [form] = Form.useForm();
    // Template for body
    // const { name, email, phone, members, teamName, eventId } = req.body;

    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("startTime", values.time[0].$d);
        formData.append("endTime", values.time[1].$d);
        formData.append("venue", values.venue);
        formData.append("rules", values.rules);
        formData.append("rulesDoc", values.rulesDocUrl);
        formData.append("type", values.type);
        formData.append("maxSize", values.maxTeamSize);
        formData.append("minSize", values.minTeamSize);
        formData.append("poster", values.posterImage.fileList[0].originFileObj);
        values.galleryImages.fileList.forEach((file) => {
            formData.append("gallery", file.originFileObj);
        });
        try {
            // POST request to create event
            const response = await axios.post("/api/event/create", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Event created successfully!");
            const { _id } = response.data; // Assuming MongoDB ID is returned as `_id`
            console.log("API Response:", response.data);
        } catch (error) {
           console.log("Error occurred while creating event.");
            console.error("Error:", error.response?.data || error.message);
        }
        console.log(values);
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
                            <Upload
                                beforeUpload={() => false}
                                maxCount={1}
                                listType="picture"
                                accept="image/*"
                                action={"/#"}
                            >
                                <Button icon={<UploadOutlined />}>Upload Poster</Button>
                            </Upload>
                        </Form.Item>

                        {/* Gallery Images */}
                        <Form.Item label="Gallery Images" name="galleryImages">
                            <Upload multiple listType="picture" accept="image/*" beforeUpload={() => false}>
                                <Button icon={<UploadOutlined />}>Upload Gallery Images</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item
                            name="type"
                            label="Event type"
                            rules={[{ required: true, message: "Please select an event type!" }]}
                        >
                            <Select placeholder="Select an option">
                                <Option value="Single">Single</Option>
                                <Option value="Team">Team</Option>
                                <Option value="Combined">Combined</Option>
                            </Select>
                        </Form.Item>
                        <div
                            style={{
                                display: "flex",
                                JustifyContent: "center",
                                alignItems: "left",
                                gap: "1rem",
                            }}
                        >
                            <Form.Item
                                name="minTeamSize"
                                label="Min team size"
                                rules={[
                                    { required: true, message: "Please enter minimum team size!", type: "integer" },
                                    () => ({
                                        validator(_, value) {
                                            const maxNum = form.getFieldValue("maxTeamSize");
                                            if (
                                                value === undefined ||
                                                maxNum === undefined ||
                                                (value <= maxNum && value >= 1)
                                            ) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error("Minimum team size must be positive or <= maximum team size")
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <InputNumber placeholder="Enter Minimum team size" style={{ width: "100%" }} />
                            </Form.Item>

                            <Form.Item
                                name="maxTeamSize"
                                label="Max team size"
                                rules={[
                                    { required: true, message: "Please enter the maximum team size!", type: "number" },
                                    () => ({
                                        validator(_, value) {
                                            const minNum = form.getFieldValue("minTeamSize");
                                            if (
                                                value === undefined ||
                                                minNum === undefined ||
                                                (value >= minNum && value >= 0)
                                            ) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error(
                                                    "Maximum team size must be positive or >= the minimum team size!"
                                                )
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <InputNumber style={{ width: "100%" }} placeholder="Enter maximum number" />
                            </Form.Item>
                            {/* Submit Button */}
                        </div>
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
