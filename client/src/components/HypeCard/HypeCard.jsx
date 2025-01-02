import React, {useState} from "react";
import "./HypeCard.css";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const HypeCard = ({ Icon, count, subtitle, desc, color, suffix }) => {
    const [hasAnimated,setHasAnimated] = useState(false);
    return (
        <div className="wrapper">
            <div className="lighter" style={{ backgroundColor: color }}></div>
            <div className="hypecard">
                <div className="icon" style={{ color: color }}>
                    <Icon style={{ fontSize: "1.5rem", fill: color }} />
                </div>
                <motion.div
                    className="count"
                    style={{ color: color }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    onViewportEnter={() => setHasAnimated(true)}
                    onViewportLeave={() => setHasAnimated(false)}
                    viewport={{ once: false }}
                >
                    {hasAnimated?<CountUp end={count} suffix={suffix || "+"} />:"0"}
                </motion.div>
                <div className="subtitle">{subtitle}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
};

export default HypeCard;
