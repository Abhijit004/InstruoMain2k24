import React from "react";
import { Form, Input, Button, ConfigProvider, theme, Upload } from "antd";
import { MailOutlined, LockOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import "./Login.css";

const Payment = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Payment done:", values);
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
            <div className="register-page" style={{ height: "max-content" }}>
                <div className="register-container" style={{ maxWidth: 400 }}>
                    <h2 style={{ width: "100%", textAlign: "center" }}>Payment</h2>
                    <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                        <div style={{fontSize: '1.05rem', marginBottom: '2rem'}}>This event requires a registration fee for Non-IIESTian participants. Scan this QR code to pay for this event and complete your registration process.</div>
						<div style={{width: '100%'}}>
							<img src="/assets/QR.png" alt="QR" style={{width: '100%'}}/>
						</div>
                        <Form.Item
                            label="Upload Screenshot of Payment"
                            name="paymentScreenshot"
                            rules={[
                                {
                                    required: true,
									message: "Please upload screenshot of the payment"
                                },
                            ]}
                        >
                            <Upload maxCount={1} listType="picture" accept="image/*" action={"/#"}>
                                <Button icon={<UploadOutlined />}>Upload Screenshot</Button>
                            </Upload>
                        </Form.Item>
						{/* Submit Button */}
                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit" style={{ width: "100%" }}>
                                Finish
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Payment;
