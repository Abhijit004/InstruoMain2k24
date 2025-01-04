import React from "react";
import "./DayRight.css";
import EventGroup from "../../components/EventGroup/EventGroup";
import PageHeading from "../../components/PageHeading/PageHeading";
import CustomButton from "../../components/CustomButton/CustomButton";
import Mesh from "../../components/Mesh/Mesh";
import { Link } from "react-router-dom";
const DayRight = ({ events }) => {
    return (
        <div className="dayright">
            <div className="content">
                <div className="scroll-enhancer">
                    <div className="left"></div>
                    <div className="event-scroll">
                        <EventGroup events={events} />
                    </div>
                    <div className="right"></div>
                </div>
                <div className="about-day">
                    <Mesh
                        style={{
                            left: 0,
                        }}
                    />
                    <PageHeading variant={"color"} text={"Day two"} />
                    <p>
                        With each passing moment, we evolve, learning to
                        navigate the unfamiliar. Growth isn't in leaps—it's in
                        the quiet realization that we've taken one step further.
                    </p>
                    {/* <CustomButton text={"Know more"} /> */}
                </div>
            </div>
        </div>
    );
};

export default DayRight;
