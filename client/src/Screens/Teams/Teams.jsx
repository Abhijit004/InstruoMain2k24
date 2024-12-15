import React from "react";
import "./Teams.css";
import teaminfo from "../../assets/Teams/teams.json";
import Member from "../../components/Member/Member";
import TeamsList from "../../components/TeamsList/TeamsList";
import { Collapse } from "antd";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";

const CustomExpandIcon = ({ isActive }) => {
    return isActive ? (
        <CaretDownOutlined className="accordion-icon" />
    ) : (
        <CaretRightOutlined className="accordion-icon" />
    );
};

const Teams = () => {
    const items = [];
    for (let team of teaminfo) {
        items.push({
            key: team.id,
            label: team.name,
            children: <TeamsList teamsData={team.members} />,
        });
    }
    return (
        <section className="instruo-team">
            <div className="heading">Meet our Supercharged Team</div>
            <div style={{
                position: 'relative',
                zIndex: '1',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
                
            }}>
                <img src="/assets/teamEllipse.webp" alt="team-ellipse" className="team-asset-1" />
                <img src="/assets/teamBeam.webp" alt="team-beam" className="team-asset-2" />
                <div className="heads">
                    <Member name={"Nafis Adnan Mondal"} position={"Professor"} src={"/assets/ProfilePic/profilepic.png"} />
                    <Member name={"Nafis Adnan Mondal"} position={"Professor"} src={"/assets/ProfilePic/profilepic.png"} />
                    <Member name={"Nafis Adnan Mondal"} position={"Professor"} src={"/assets/ProfilePic/profilepic.png"} />
                    <Member name={"Nafis Adnan Mondal"} position={"Professor"} src={"/assets/ProfilePic/profilepic.png"} />
                </div>
            </div>
            <Collapse
                accordion
                items={items}
                bordered={false}
                className="accordion"
                defaultActiveKey={1}
                size="large"
                expandIcon={({ isActive }) => <CustomExpandIcon isActive={isActive} />}
            />
        </section>
    );
};

export default Teams;
