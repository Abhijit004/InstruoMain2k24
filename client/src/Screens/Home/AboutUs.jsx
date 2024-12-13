import React from "react";
import "./AboutUs.css";
import lamp from "/assets/AboutUsLamp.webp";
import orb from "/assets/AboutUsOrb.webp";

const AboutUs = () => {
    return (
        <section className="instruo-about">
            <div className="lamp" style={{ top: 0 }}>
                <img src={lamp} alt="lamp" srcset="" />
            </div>
            <div className="heading">About Us</div>
            <section className="about-card-wrapper">
                <section className="about-card" about="instruo">
                    <div className="heading">Instruo@2k25</div>
                    <p>
                        Step into Kolkata's ultimate tech extravaganza! Dive into innovation, challenge your limits in
                        thrilling competitions! Step into Kolkata's ultimate tech extravaganza! Dive into innovation,
                        challenge your limits in thrilling competitions! Step into Kolkata's ultimate tech extravaganza!
                        Dive into innovation, challenge your limits in thrilling competitions! Step into Kolkata's
                        ultimate tech extravaganza! Dive into innovation, challenge your limits in thrilling
                        competitions! Step into Kolkata's ultimate tech extravaganza! Dive into innovation, challenge
                        your limits in thrilling competitions!
                    </p>
                </section>
                <section className="about-card" about="college">
                    <div className="heading">IIEST Shibpur</div>
                    <p>
                        Step into Kolkata's ultimate tech extravaganza! Dive into innovation, challenge your limits in
                        thrilling competitions! Step into Kolkata's ultimate tech extravaganza! Dive into innovation,
                        challenge your limits in thrilling competitions! Step into Kolkata's ultimate tech extravaganza!
                        Dive into innovation, challenge your limits in thrilling competitions! Step into Kolkata's
                        ultimate tech extravaganza! Dive into innovation, challenge your limits in thrilling
                        competitions! Step into Kolkata's ultimate tech extravaganza! Dive into innovation, challenge
                        your limits in thrilling competitions!
                    </p>
                </section>
                <img src={orb} alt="orb" />
            </section>
        </section>
    );
};

export default AboutUs;
