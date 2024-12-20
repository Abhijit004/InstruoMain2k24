import React, { useState } from "react";
import "./EventGroup.css";
import CustomButton from "../CustomButton/CustomButton";

const backdrop = (src) => {
    return {
        background: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
};

const Card = ({ rank, genre, open, changeFocus }) => {
    const src = `/assets/genres/${genre.toLowerCase()}`;
    return (
        <div onClick={() => changeFocus(rank)} className={`eventcard ${open ? "open" : ""}`}>
            <div style={backdrop("/assets/CP-bg.jpg")} className="background"></div>
            <div className="heading">{genre}</div>
            <div className="body">
                <div className="head">{genre}</div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates corrupti aperiam?
                    Alias fuga, velit exercitationem facere necessitatibus quae, delectus incidunt ipsam ipsum hic
                    temporibus?
                </div>
                <CustomButton variant="secondary" className="button" text={"Know more"} />
                <div className="rating">12k+ reads and 100+ orders</div>
            </div>
        </div>
    );
};

const genres = ["Fantasy", "Thriller", "Romance", "Comedy"];

const EventGroup = (events) => {
    const [cardNumber, setCardNumber] = useState(0);
    const changeFocus = (num) => {
        setCardNumber(() => num);
    };
    console.log(events);
    return (
        <div className="eventbox-wrapper">
            {events && events.length > 0 && events.map((val, idx) => (
                <Card key={idx} rank={idx} genre={val} open={cardNumber === idx} changeFocus={changeFocus} />
            ))}
        </div>
    );
};


export default EventGroup;
