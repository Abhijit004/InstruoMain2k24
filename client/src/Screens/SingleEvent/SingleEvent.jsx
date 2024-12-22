import React from "react";
import { useParams } from "react-router-dom";
import "./SingleEvent.css";

const SingleEvent = () => {
    const { eventID } = useParams();
    console.log(eventID);

    const back = "/assets/groupfie.webp"

    return (
        <div className="single-event">
            <div className="hero">
                <div style={{
                    background: `url("${back}")`
                }} className="banner"></div>
                <div className="heading gradient-bw">Cool event!</div>
                <div className="time">
                    10th Jan, 2025, 11:30 PM - 12th Jan, 2025, 11:45 PM
                </div>
                <div className="venue">
                    Cool venue
                </div>
                <div className="byline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora nam dolorem natus quo
                    consectetur velit. Nihil repellat laboriosam officiis.
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;
