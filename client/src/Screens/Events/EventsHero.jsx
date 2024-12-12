import React from "react";
import "./EventsHero.css";
import Mesh from "../../components/Mesh/Mesh";
import { DownOutlined } from "@ant-design/icons";

const EventsHero = () => {
    return (
        <div className="events-hero">
            <img className="pink-laser" src="/assets/pink-laser.webp" />
            <img className="skyblue-laser" src="/assets/skyblue-laser.webp" />
            <img className="ellipse-1" src="/assets/left-ellipse.webp" />

            <img className="ellipse-2" src="/assets/right-ellipse.webp" />

            <div className="hero-title gradient-color">Events</div>
            <div className="byline">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi reiciendis natus doloremque vel libero
                asperiores nisi ipsum aliquam placeat ratione. Dolores quasi laudantium tenetur fugit voluptatem
                veritatis consequatur. Maxime, omnis.
            </div>
            <DownOutlined style={{
                fontSize: "2rem",
                paddingTop: "1rem",
                animation: "bounce-down 3s ease infinite",
                animationDelay: 5,
                transition: "all ease 0.5s",
                cursor: "pointer"
            }} 
            onClick={()=>{
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                })
            }}/>
            <Mesh />
        </div>
    );
};

export default EventsHero;
