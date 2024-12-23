import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../../services/api";
import "./GoogleLogin.css";
import { GoogleOutlined } from "@ant-design/icons";
import { message } from "antd";

message.config({
    top: 64
})

export default (props) => {
    const responseGoogle = async (authResult) => {
        try {
            if (authResult["code"]) {
                console.log(`AUTH RESULT CODE: ${authResult.code}`);
                const result = await googleAuth(authResult.code);
                props.setUser(result.data.data.user);
                message.success("Successfully logged in as "+result.data.data.user.name, 5)
            } else {
                console.log(`Auth result:  ${authResult}`);
                throw new Error(authResult);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });

    return (
        <button 
            onClick={googleLogin} 
            className="google-button">
            <GoogleOutlined style={{ fontSize: "1.3rem" }} />

            Sign in with Google
        </button>
    );
};
