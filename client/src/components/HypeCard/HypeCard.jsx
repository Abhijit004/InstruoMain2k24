import React from "react";
import "./HypeCard.css";

const HypeCard = ({ Icon, count, subtitle, desc, color }) => {
    return (
        <div className="wrapper">
            <div className="lighter" style={{backgroundColor: color}}></div>
            <div className="hypecard">
                <div className="icon" style={{color: color}}>
                    <Icon style={{ fontSize: "1.5rem", fill: color}}/>
                </div>
                <div className="count" style={{ color: color }}>
                    {count}
                </div>
                <div className="subtitle">{subtitle}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
};

export default HypeCard;
