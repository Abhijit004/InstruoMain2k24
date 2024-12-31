import React from "react";
import "./DayLeft.css";
import EventGroup from "../../components/EventGroup/EventGroup";
import PageHeading from "../../components/PageHeading/PageHeading";
import CustomButton from "../../components/CustomButton/CustomButton";
import Mesh from "../../components/Mesh/Mesh";

const DayLeft = ({ day, events, para }) => {
  return (
    <div className="dayleft">
      <div className="content">
        <div className="about-day">
          <Mesh
            style={{
              right: 0,
            }}
          />
          <PageHeading variant={"color"} text={`Day ${day}`} />
          <p>{para}</p>
          {/* <CustomButton text={"Know more"} /> */}
        </div>
        <div className="event-scroll">
          <EventGroup events={events} />
        </div>
      </div>
    </div>
  );
};

export default DayLeft;
