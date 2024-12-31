import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleEvent.css";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { getEventByID } from "../../services/api";
import formatTimestamp from "../../services/FormatTime";

const SingleEvent = () => {
    const { eventID } = useParams();
    const [bg, setBg] = useState(0);
    const [eventDetail, setEventDetail] = useState(null);
    const [bglist, setBglist] = useState(["/assets/groupfie.webp"]);

    // useEffect(() => {
    //     const galleryInterval = setInterval(() => {
    //         setBg(bg=>(bg+1)%bglist.length);
    //     }, 5000);

    //     return () => {
    //         clearInterval(galleryInterval);
    //     };
    // }, []);

    const getEventDetails = async () => {
        try {
            const res = await getEventByID(eventID);
            setEventDetail(res.data)
            console.log(res.data);
            if(res){
                const tempBg = bglist;
                res.data.images.forEach((img)=>{
                    if(img.type==='gallery'){
                        tempBg.push(img.url);
                    }
                })
                setBglist(tempBg)
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getEventDetails();
    }, []);

    return (
        <div className="single-event">
            <div className="hero">
                <div
                    style={{
                        background: `url("${bglist[bg]}")`,
                        transition: "allease 0.4s"
                    }}
                    className="banner"
                ></div>
                <div className="heading gradient-bw">{eventDetail?.name}</div>
                <div className="time">
                    <CalendarOutlined /> {eventDetail && formatTimestamp(eventDetail.startTime)} to {eventDetail && formatTimestamp(eventDetail.endTime)}
                </div>
                <div className="venue">
                    <EnvironmentOutlined /> {eventDetail?.venue}
                </div>
            </div>

        </div>
    );
};

export default SingleEvent;
