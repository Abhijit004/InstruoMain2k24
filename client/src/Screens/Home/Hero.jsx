import React from "react";
import "./Hero.css"
import CustomButton from "../../components/CustomButton/CustomButton";

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="content">
                <div className="headline gradient-bw">
                    Unleash your
                    Potential
                    at <span className="gradient-color">INSTRUO</span>
                </div>
                <div className="byline">
                    Step into Kolkata's ultimate tech extravaganza! Dive into innovation, challenge your limits in
                    thrilling competitions!
                </div>
                <div className="button-group">
                    <CustomButton
                        
                        style={{
                            width: "fit-content",
                            fontWeight: 800,
                        }}
                        text={"EVENTS"}
                    />
                    <CustomButton
                        variant={"secondary"}
                        style={{
                            width: "fit-content",
                            fontWeight: 800,
                        }}
                        text={"WORKSHOPS"}
                    />
                </div>
            </div>
            <div className="image">
                <img src="/assets/homepage-favimage.webp" />
            </div>
        </div>
    );
};

export default Hero;