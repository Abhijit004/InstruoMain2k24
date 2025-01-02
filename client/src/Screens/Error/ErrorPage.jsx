import React from "react";
import "./ErrorPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import { HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="instruo-error">
            <span className="errorh">Page Not Found</span>
            <span className="errordesc">
                The requested URL was not found on this server
            </span>
            <Link to="/">
                <CustomButton
                    text={"Go Back to Home"}
                    style={{
                        marginTop: "1rem",
                        zIndex: 4,
                        fontWeight: 900,
                    }}
                    icon={<HomeFilled />}
                />
            </Link>
        </section>
    );
};

export default ErrorPage;
