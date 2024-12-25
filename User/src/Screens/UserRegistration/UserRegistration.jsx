import React, { useState, useEffect } from "react";
import {
    Form,
    Input,
    Button,
    Radio,
    ConfigProvider,
    theme,
    Card,
    Modal,
    Upload,
    message,
    notification,
    Typography,
    AutoComplete,
    Tag,
} from "antd";
import {
    PlusOutlined,
    CloseOutlined,
    UploadOutlined,
    UserOutlined,
    UserSwitchOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import "./UserRegistration.css";
import { registerEvent } from "../../Services/Api";
import { useParams } from "react-router-dom";

// Mock searchresults for 'tejas'
const apiFetched = [
    {
        _id: "6767f82afbf4b80b2fa9e18c",
        name: "Tejas Pawar",
        email: "tejaspawar62689@gmail.com",
    },
    {
        _id: "6768098cc80c12cb834a89e0",
        name: "Ayush Tejaswi",
        email: "tejaspawar70238@gmail.com",
    },
    {
        _id: "6768098cc80c12cb834a89e0",
        name: "A Very Long Name",
        email: "tejaspawar702238@gmail.com",
    },
    {
        _id: "6768098cc80c12cb834a89e0",
        name: "Rishab Dugar",
        email: "tejaspawar702318@gmail.com",
    },
    {
        _id: "6768098cc80c12cb834a89e0",
        name: "Nafis Adnan Mondal",
        email: "tejaspawar7023338@gmail.com",
    },
    {
        _id: "6768098cc80c12cb834a89e0",
        name: "Abhijit Karmakar",
        email: "tejaspawar7023458@gmail.com",
    },
];

// checking for IIESTians
const IIEST = "iiests.ac.in";
const allAreIIESTians = (array) => {
    if (!array) return true;

    for (let member of array) {
        if (!member.email.endsWith(IIEST)) return false;
    }
    return true;
};

const PaymentModal = ({ isVisible, onClose, formValues }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        message.success("Payment Received");
        message.success("Registration completed");
        formValues["paymentInfo"] = values;
        console.log(formValues);
        onClose();
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
            <Modal title="Payment" open={isVisible} onCancel={onClose} footer={null} width={400} style={{ top: 20 }}>
                <div className="register-container" style={{ maxWidth: 400 }}>
                    {" "}
                    <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                        <div style={{ fontSize: "1.05rem", marginBottom: "2rem" }}>
                            This event requires a registration fee for Non-IIESTian participants. Scan this QR code to
                            pay for this event and complete your registration process.
                        </div>
                        <div style={{ width: "100%", marginBottom: "1rem" }}>
                            <img src="/assets/QR.png" alt="QR" style={{ width: "min(100%, 200px)" }} />
                        </div>
                        <Form.Item
                            label="Upload Screenshot of Payment"
                            name="paymentScreenshot"
                            rules={[{ required: true, message: "Please upload screenshot of the payment" }]}
                        >
                            <Upload maxCount={1} listType="picture" accept="image/*" action={"/#"}>
                                <Button icon={<UploadOutlined />}>Upload Screenshot</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit" style={{ width: "100%" }}>
                                Finish
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </ConfigProvider>
    );
};

const searchAPI = `http://localhost:5000/user/search`;

const UserRegistration = ({ userInfo }) => {

    // Needed for curating the registration form
    // Will come from this API: /api/event/:id
    const [regType, setRegType] = useState(null);
    const [minTeamSize, setMinTeamSize] = useState(null);
    const [maxTeamSize, setMaxTeamSize] = useState(null);

    const { eventId } = useParams();
    const [form] = Form.useForm();
    const [regMode, SetRegMode] = useState("Individual");
    const [isPaymentRequired, setIsPaymentRequired] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formValues, setFormValues] = useState({});
    const options = [
        { label: "Individual", value: "Individual", disabled: false },
        { label: "Team", value: "Team", disabled: false },
    ];
    const [filtered, setFiltered] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const bestMatchList = [];
    const emailMapper = {};
    const selectedList = [];

    /*
    Require a useEffect to extract Event Information(maxsize, minsize, regType)
    id is captured from useParams(#133)
    */

    useEffect(() => {
        if (userInfo?.email) {
            form.setFieldsValue({ email: userInfo.email }); // Dynamically set the email field value
        }
    }, [userInfo, form]);


    // DO api fetch in useeffect for every change in input field
    // for (let user of apiFetched) {
    //     bestMatchList.push(user.email);
    //     emailMapper[user.email] = user.name;
    // }

    const onFinish = (values) => {
        console.log(values);
        console.log(eventId);

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("eventId", eventId);
        formData.append("members", selectedList);
        
        // Team size checking
        // if ((1+selectedMembers.length) < minTeamSize) {
        //     message.error(`Team size must be atleast ${minTeamSize}`)
        //     return
        // }

        // IIESTians checking
        // if (values.email.endsWith(IIEST) && allAreIIESTians(values.members)) {
        //     // Handle form submission without payment
        //     const formData = new FormData();
        //     formData.append("name", values.name);

        //     message.success("Registration completed");
        //     console.log("Form Submitted:", values);
        // } else {
        //     setIsPaymentRequired(true);
        //     setIsModalVisible(true);
        //     setFormValues(values);
        // }
        registerEvent(formData)
            .then((res) => {
                console.log(res.data);
                message.success("Successful registration");
            })
            .catch((err) => {
                console.log(err.message);
                message.warning("Registration Failed");
            });
    };

    const closePaymentModal = () => {
        setIsModalVisible(false);
    };

    const handleSearch = (value) => {
        setFiltered(
            !value
                ? []
                : bestMatchList
                      .filter((member) => member.toLowerCase().includes(value.toLowerCase()))
                      .map((member) => ({ value: member }))
        );
    };

    const handleSelect = (value) => {
        if (!selectedMembers.includes(value)) {
            if (selectedMembers.length < maxTeamSize) {
                setSelectedMembers([...selectedMembers, value]);
            } else {
                message.warning(`You can only add up to ${maxTeamSize} members.`);
            }
        }
        setInputValue("");
    };

    const handleInputChange = (e) => {
        setInputValue(e);
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
            <div
                className="register-page"
                style={{
                    display: "flex",
                    flexDirection: "column",
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
                <Typography.Title>Event Registration</Typography.Title>
                <div className="register-container">
                    <span style={{ fontSize: "1rem", color: "#fff", margin: "0.5rem 0" }}>Registration Mode</span>
                    <Radio.Group
                        size="large"
                        block
                        options={options}
                        defaultValue={regMode}
                        optionType="button"
                        buttonStyle="solid"
                        onChange={(e) => SetRegMode(e.target.value)}
                        style={{ marginBottom: "1rem", width: "10rem" }}
                    />
                    <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                        {/* Name */}
                        <Form.Item
                            label={`Name ${regMode === "team" ? "(Team Member 1)" : ""}`}
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
                            <Input
                                disabled // Makes the field unchangeable
                            />
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
                        {regMode === "Team" && (
                            <Form.Item
                                label="Team Name"
                                name="teamName"
                                rules={[{ required: true, message: "Please enter your team name" }]}
                            >
                                <Input placeholder="Enter your team name" />
                            </Form.Item>
                        )}
                        {/* Team Members */}

                        {regMode === "Team" && (
                            <div
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: "8px",
                                    padding: "0.4rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                <span style={{ fontSize: "1rem", color: "#fff", margin: "0.5rem 0", display: "block" }}>
                                    <TeamOutlined /> Add your team members
                                </span>
                                <AutoComplete
                                    options={filtered}
                                    style={{ width: "100%" }}
                                    onSearch={handleSearch}
                                    onSelect={handleSelect}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    filterOption
                                >
                                    <Input
                                        size="large"
                                        placeholder="Type member email"
                                        suffix={<PlusOutlined />}
                                        onPressEnter={() => handleSelect(inputValue)}
                                    />
                                </AutoComplete>
                                <div style={{ marginTop: 16 }}>
                                    {selectedMembers.map((member, index) => (
                                        <Card
                                            size="small"
                                            style={{ marginBottom: "1rem" }}
                                            title={`Team Member ${index + 2}`}
                                            key={index}
                                            extra={
                                                <CloseOutlined
                                                    onClick={(m) =>
                                                        setSelectedMembers(selectedMembers.filter((m) => m !== member))
                                                    }
                                                />
                                            }
                                        >
                                            <h3>
                                                {emailMapper[member]}
                                                <br />
                                            </h3>
                                            <span style={{ opacity: 0.6 }}>{member}</span>
                                        </Card>
                                    ))}
                                </div>
                            </div>
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
            {isPaymentRequired && (
                <PaymentModal isVisible={isModalVisible} onClose={closePaymentModal} formValues={formValues} />
            )}
        </ConfigProvider>
    );
};

export default UserRegistration;
