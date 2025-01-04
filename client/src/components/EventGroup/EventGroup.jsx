import React, { useState } from "react";
import "./EventGroup.css";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import formatTimestamp from "../../services/FormatTime";
import ButtonGroup from "antd/es/button/button-group";

const backdrop = (src) => {
    return {
        background: `url("${src}")`,
        backgroundSize: "50rem",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
};

const Card = ({ rank, eventData, open, changeFocus }) => {
    // console.log(formatTimestamp(eventData.startTime));

    // console.log("event doc: ", eventData.rulesDoc);

    var src = eventData.images[0].url;
    const srcSep = src.split('/')
    srcSep.splice(6, 0, 'q_01,f_auto')
    src = srcSep.join('/')
    src = src.slice(0, src.lastIndexOf('.'))
    // console.log(src);
    
    return (
        <div onClick={() => changeFocus(rank)} className={`eventcard ${open ? "open" : ""}`}>
            <div style={backdrop(src)} className="background"></div>
            <div className="heading">{eventData.name}</div>
            <div className="body">
                <div className="head">{eventData.name}</div>
                <div className="text">{eventData.description}</div>
                <ButtonGroup
                    style={{
                        // gap: "10px",
                        paddingTop: "1rem",
                    }}
                >
                    {/* <Link to={`/events/${eventData._id}`}> */}
                    <CustomButton href={`/events/${eventData._id}`} text={"Know more"} />
                    {/* </Link> */}

                    <CustomButton
                        variant={"secondary"}
                        style={{ fontWeight: 600 }}
                        text={"Register"}
                        href={eventData ? eventData.registrationUrl : "#"}
                    />
                </ButtonGroup>
                <div className="rating">
                    {formatTimestamp(eventData.startTime)}
                    <br />
                    to {formatTimestamp(eventData.endTime)}
                </div>
            </div>
        </div>
    );
};

const EventGroup = ({ events }) => {
    const [cardNumber, setCardNumber] = useState(0);
    const changeFocus = (num) => {
        setCardNumber(() => num);
    };
    // console.log(events);

    return (
        <div className="eventbox-wrapper">
            {events &&
                events.length > 0 &&
                events.map((val, idx) => (
                    <Card key={idx} rank={idx} eventData={val} open={cardNumber === idx} changeFocus={changeFocus} />
                ))}
        </div>
    );
};

export default EventGroup;
