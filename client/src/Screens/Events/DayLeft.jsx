import React from "react";
import "./DayLeft.css";
import EventGroup from "../../components/EventGroup/EventGroup";
import PageHeading from "../../components/PageHeading/PageHeading";
import CustomButton from "../../components/CustomButton/CustomButton";
import Mesh from "../../components/Mesh/Mesh";

const DayLeft = ({day, events}) => {
    return (
        <div className="dayleft">
            <div className="content">
                <div className="about-day">
                    <Mesh />
                    <PageHeading variant={"color"} text={`Day ${day}`} />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione excepturi minima animi
                        odit, vitae dignissimos nisi expedita obcaecati commodi at sunt nostrum corporis tenetur amet
                        iusto. Est, nam totam.
                    </p>
                    <CustomButton text={"Know more"} />
                </div>
                <EventGroup events={events} />
            </div>
        </div>
    );
};

export default DayLeft;
