import React from "react";
import "./DayRight.css";
import EventGroup from "../../components/EventGroup/EventGroup";
import PageHeading from "../../components/PageHeading/PageHeading";
import CustomButton from "../../components/CustomButton/CustomButton";
import Mesh from "../../components/Mesh/Mesh";

const DayRight = (events) => {
	return (
		<div className="dayright">
			<div className="content">
				<EventGroup events={events} />
				<div className="about-day">
					<Mesh />
					<PageHeading variant={"color"} text={"Day two"} />
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Itaque ratione excepturi minima animi odit, vitae
						dignissimos nisi expedita obcaecati commodi at sunt
						nostrum corporis tenetur amet iusto. Est, nam totam.
					</p>
					<CustomButton text={"Know more"} />
				</div>
			</div>
		</div>
	);
};

export default DayRight;
