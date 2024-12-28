import React, { useState } from "react";
import "./EventGroup.css";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import formatTimestamp from "../../services/FormatTime";
import ButtonGroup from "antd/es/button/button-group";

const backdrop = (src) => {
    return {
        background: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
};

const Card = ({ rank, eventData, open, changeFocus }) => {
    console.log(formatTimestamp(eventData.startTime));

    console.log("event doc: ", eventData.rulesDoc)

    const src = eventData.images[0].url;
    return (
		<div
			onClick={() => changeFocus(rank)}
			className={`eventcard ${open ? "open" : ""}`}
		>
			<div style={backdrop(src)} className="background"></div>
			<div className="heading">{eventData.name}</div>
			<div className="body">
				<div className="head">{eventData.name}</div>
				<div className="text">{eventData.description}</div>
				<ButtonGroup
					style={{
						gap: "10px",
					}}
				>
					{eventData.rulesDoc && (
						<a href={eventData.rulesDoc}>
							<CustomButton
								style={{ fontWeight: 600 }}
								variant="secondary"
								className="button"
								text={"Rulebook"}
							/>
						</a>
					)}
					{eventData.registrationUrl && (
						<a href={eventData.registrationUrl}>
							<CustomButton
								style={{ fontWeight: 600 }}
								className="button"
								text={"Register"}
							/>
						</a>
					)}
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

const genres = ["Fantasy", "Thriller", "Romance", "Comedy"];

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
