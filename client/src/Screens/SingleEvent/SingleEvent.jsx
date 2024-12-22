import React from "react";
import { useParams } from "react-router-dom";

const SingleEvent = () => {
    const {eventID} = useParams();
    console.log(eventID);

    return <div className="single-event"></div>;
};

export default SingleEvent;
