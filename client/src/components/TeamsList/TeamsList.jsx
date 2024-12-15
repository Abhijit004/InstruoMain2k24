import React from "react";
import "./TeamsList.css";
import Member from "../Member/Member";

const memberWidth = 192;

const TeamsList = ({ teamsData }) => {
    const width = Math.min(window.innerWidth - 32, 1000);
    const maxCell = [
        Math.floor(width / memberWidth),
        Math.max(Math.floor(width / memberWidth) - 1, 1),
    ];
    
    var k = 0,
        tlen = 0;
    const converted = [];
    var temp = [];
    for (let i = 0; i < teamsData.length; i++) {
        temp.push(teamsData[i]);
        tlen += 1;
        if (tlen == maxCell[k]) {
            converted.push(temp.slice());
            temp = [];
            k ^= 1;
            tlen = 0;
        }
    }
    if (temp.length > 0) {
        converted.push(temp);
    }
    if (converted && converted.length >= 2) {
        for (let i = converted.length - 1; i >= 1; i-=2) {
            if ((converted[i].length - converted[i - 1].length) % 2 == 0) {
                converted[i].push({
                    name: "",
                    position: "",
                    img: null,
                });
            }
        }
        if ((converted[0].length - converted[1].length) % 2 == 0) {
            converted[0].push({
                name: "",
                position: "",
                img: null,
            });
        }
    }
    
    let ukey = 1;
    return (
        <div className="team-section">
            {converted &&
                converted.map((row, k) => {
                    return (
                        <div className="row" key={k}>
                            {row.map((e) => {
                                return (
                                    <Member
                                        name={'Sample Name'}
                                        position={e.position}
                                        src={"/assets/ProfilePic/profilepic.png"}
                                        key={ukey++}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
        </div>
    );
};

export default TeamsList;
