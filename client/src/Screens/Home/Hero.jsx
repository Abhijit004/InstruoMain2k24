import React, { useState, useEffect } from "react";
import "./Hero.css";
import CustomButton from "../../components/CustomButton/CustomButton";
// import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";
const Dynamic = () => {
    const [holder, setHolder] = useState(0);
    const [index, setIndex] = useState(0);
    let values = ["Potential", "Creativity", "Ingenuity"];
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < values[holder].length) {
                setTypedText((prevTypedText) => prevTypedText + values[holder][index]);

                setIndex(index + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setTypedText("");
                    setIndex(0);
                    setHolder((holder) => (holder + 1) % values.length);
                }, 2000); // Delay before starting typing the next string
            }
        }, 100); // Typing speed (adjust as needed)
        return () => clearInterval(interval);
    }, [holder, values]);

    return <div className="dynamic">{typedText}</div>;
};

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="content">
                <div className="headline gradient-bw">
                    <div>Unleash your</div>
                    <div>
                        <Dynamic />
                    </div>
                    <div>
                        at <span className="gradient-color">INSTRUO</span>
                    </div>
                </div>
                <div className="byline">
                    Step into Kolkata's ultimate tech extravaganza! Dive into innovation, challenge your limits in
                    thrilling competitions!
                </div>
                <div className="button-group">
                    <Link to="/events">
                        <CustomButton
                            style={{
                                width: "fit-content",
                                fontWeight: 800,
                            }}
                            text={"EVENTS"}
                        />
                    </Link>
                    {/* <CustomButton
            variant={"secondary"}
            style={{
              width: "fit-content",
              fontWeight: 800,
            }}
            text={"WORKSHOPS"}
          /> */}
                </div>
            </div>
            <div className="image">
                <img src="/assets/homepage-favimage.webp" />
            </div>
        </div>
    );
};

export default Hero;
