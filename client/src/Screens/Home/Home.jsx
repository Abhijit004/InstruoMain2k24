import React, {useState, useEffect} from "react";
import "./Home.css";
import { Button } from "antd";
import Hero from "./Hero";


const Hype = () => {
    return <div>Hype</div>;
};
const AboutUs = () => {
    return <div>AboutUs</div>;
};
const PreviousEditions = () => {
    return <div>PreviousEditions</div>;
};

const Home = () => {
    return (
        <section className="instruo-home">
            <Hero />
            <Hype />
            <AboutUs />
            <PreviousEditions />
        </section>
    );
};

export default Home;
