import React, { useState } from "react";
import {
    Form,
    Input,
    DatePicker,
    Upload,
    Button,
    ConfigProvider,
    theme,
    InputNumber,
    Select,
    message,
    Modal,
} from "antd";
import Icon, { UploadOutlined, MoneyCollectOutlined } from "@ant-design/icons";
// import "./EventRegistration.css";
import axios from "axios";

const openEventPage = () => {
    window.location.href = "https://instruo.tech/events";
};

const { TextArea } = Input;
const { RangePicker } = DatePicker;
const POST_URL = `https://instruo-backend.onrender.com/api/event/create`;
// http://localhost:5000/api/event/create
// https://instruo-backend.onrender.com/api/event/create
const RupeeFilled = ({ color }) => {
    return (
        <Icon style={{ scale: "1.3" }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect width="24" height="24" fill="transparent"></rect>{" "}
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C10.1243 2 8.54878 2.0992 7.25007 2.38782C5.94002 2.67897 4.85116 3.176 4.01358 4.01358C3.176 4.85116 2.67897 5.94002 2.38782 7.25007C2.0992 8.54878 2 10.1243 2 12C2 13.8757 2.0992 15.4512 2.38782 16.7499C2.67897 18.06 3.176 19.1488 4.01358 19.9864C4.85116 20.824 5.94002 21.321 7.25007 21.6122C8.54878 21.9008 10.1243 22 12 22C13.8757 22 15.4512 21.9008 16.7499 21.6122C18.06 21.321 19.1488 20.824 19.9864 19.9864C20.824 19.1488 21.321 18.06 21.6122 16.7499C21.9008 15.4512 22 13.8757 22 12C22 10.1243 21.9008 8.54878 21.6122 7.25007C21.321 5.94002 20.824 4.85116 19.9864 4.01358C19.1488 3.176 18.06 2.67897 16.7499 2.38782C15.4512 2.0992 13.8757 2 12 2ZM8 7C8 6.44772 8.44772 6 9 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H13.0108C13.3164 8.46303 13.5255 8.97391 13.6414 9.5H15C15.5523 9.5 16 9.94772 16 10.5C16 11.0523 15.5523 11.5 15 11.5H13.6414C13.4817 12.2254 13.1446 12.9214 12.6221 13.5034C12.1965 13.9776 11.6627 14.3596 11.0332 14.619L12.7071 16.2929C13.0976 16.6834 13.0976 17.3166 12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L8.41475 14.829C8.05891 14.4731 8.04079 13.9866 8.19245 13.6413C8.34028 13.3047 8.68316 13.013 9.14206 12.9976C10.0966 12.9656 10.7334 12.6135 11.1338 12.1675C11.3106 11.9705 11.451 11.7442 11.5529 11.5H9C8.44772 11.5 8 11.0523 8 10.5C8 9.94772 8.44772 9.5 9 9.5H11.5529C11.4396 9.22839 11.2786 8.97913 11.0729 8.76729C10.6533 8.33533 9.99038 8 9 8C8.44772 8 8 7.55228 8 7Z"
                        fill="white"
                    ></path>{" "}
                </g>
            </svg>
        </Icon>
    );
};

const EventRegistration = () => {
    const [form] = Form.useForm();
    const [eventType, setEventType] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalInstance, setModalInstance] = useState(null);
    // Template for body
    // const { name, email, phone, members, teamName, eventId } = req.body;

    const onFinish = async (values) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("startTime", values.time[0].$d);
        formData.append("endTime", values.time[1].$d);
        formData.append("venue", values.venue);
        formData.append("rules", values.rules);
        formData.append("rulesDoc", values.rulesDocUrl);
        formData.append("type", values.type);
        if (values.type !== "Single") {
            formData.append("maxSize", values.maxTeamSize);
            formData.append("minSize", values.minTeamSize);
        }
        formData.append("poster", values.posterImage.fileList[0].originFileObj);
        formData.append("registrationAmount", values.registrationAmount);

        values.galleryImages?.fileList.forEach((file) => {
            formData.append("gallery", file.originFileObj);
        });
        axios
            .post(POST_URL, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then((response) => {
                console.log("Event created successfully!");
                const { _id } = response.data; // Assuming MongoDB ID is returned as `_id`
                console.log("API Response:", response.data);
                setLoading(false);

                // start modal to redirect
                let countdownTime = 5;
                let secondsToGo = countdownTime;
                const instance = Modal.success({
                    title: "Event Added Successfully",
                    content: `Redirecting to events page in ${secondsToGo} seconds...`,
                    okButtonProps: { style: { display: "none" } }, // Hide the OK button
                    keyboard: false, // Prevent closing on Esc key press
                    maskClosable: false,
                });

                const timer = setInterval(() => {
                    secondsToGo -= 1;
                    instance.update({
                        content: `Redirecting to events page in ${secondsToGo} seconds...`,
                    });
                }, 1000);

                setModalInstance(instance);
                setTimeout(() => {
                    clearInterval(timer);
                    instance.destroy();
                    openEventPage();
                }, countdownTime * 1000);
                // end
            })
            .catch((err) => {
                setLoading(false);
                console.log("Error while adding the event");
                message.error(`${err.code}: ${err.message}`);
                console.log(err);
            });

        // console.log(values);
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: "#722ed1",
                    colorInfo: "#aa82e3",
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
                                accept="image/png, image/jpeg, image/jpg"
                                action={"/#"}
                            >
                                <Button icon={<UploadOutlined />}>Upload Poster</Button>
                            </Upload>
                        </Form.Item>

                        {/* Gallery Images */}
                        <Form.Item label="Gallery Images" name="galleryImages">
                            <Upload
                                multiple
                                listType="picture"
                                accept="image/png, image/jpeg, image/jpg"
                                beforeUpload={() => false}
                            >
                                <Button icon={<UploadOutlined />}>Upload Gallery Images</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item
                            name="type"
                            label="Event type"
                            rules={[{ required: true, message: "Please select an event type!" }]}
                        >
                            <Select placeholder="Select an option" onChange={(e) => setEventType(e)}>
                                <Option value="Single">Single</Option>
                                <Option value="Team">Team</Option>
                                <Option value="Combined">Combined</Option>
                            </Select>
                        </Form.Item>
                        {eventType !== "Single" && (
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
                                                    new Error(
                                                        "Minimum team size must be positive or <= maximum team size"
                                                    )
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
                                        {
                                            required: true,
                                            message: "Please enter the maximum team size!",
                                            type: "number",
                                        },
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
                        )}
                        <Form.Item
                            name="registrationAmount"
                            label="Registration Fee for Non-IIESTians (give 0 if not applicable)"
                            rules={[
                                { required: true, message: "Please provide event fee details" },
                                { pattern: /^[0-9]+$/, message: "Please enter a valid amount" },
                            ]}
                        >
                            <InputNumber
                                addonBefore={<RupeeFilled />}
                                placeholder="Enter Registration Fee"
                                type="number"
                                min={0}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit" loading={loading}>
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