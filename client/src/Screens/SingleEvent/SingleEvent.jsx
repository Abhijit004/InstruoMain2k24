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
            setEventDetail(res.data);
            console.log(res.data);
            if (res) {
                const tempBg = bglist;
                res.data.images.forEach((img) => {
                    if (img.type === "gallery") {
                        tempBg.push(img.url);
                    }
                });
                setBglist(tempBg);
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
                        transition: "allease 0.4s",
                    }}
                    className="banner"
                ></div>
                <div className="heading gradient-bw">{eventDetail?.name}</div>
                <div className="time">
                    <CalendarOutlined /> {eventDetail && formatTimestamp(eventDetail.startTime)} to{" "}
                    {eventDetail && formatTimestamp(eventDetail.endTime)}
                </div>
                <div className="venue">
                    <EnvironmentOutlined /> {eventDetail?.venue}
                </div>
            </div>
            <a href="#event-container">
                <img src="/assets/SingleEvent/Double Down.svg" alt="" className="hero-image" />
            </a>
            <div className="event-container" id="event-container">
                <div className="image-container">
                    <img src="/assets/SingleEvent/image.png" alt="" className="image" />
                </div>
                <div className="event-text">
                    <p>
                        Some cheesy lines to talk about what the event is about. I hope this text is legible enough to
                        read, but incase its not. Damn you wasted time to read it we have a better description below.
                    </p>
                    <div className="button-group">
                        <CustomButton
                            style={{
                                width: "fit-content",
                                fontWeight: 800,
                            }}
                            text={"REGISTER NOW"}
                        />
                        <CustomButton
                            variant={"secondary"}
                            style={{
                                width: "fit-content",
                                fontWeight: 800,
                            }}
                            text={"EVENT RULES"}
                        />
                    </div>
                </div>
            </div>

            <div className="info-container">
                <div className="time">
                    <h1>Time and Place</h1>
                    <p>10th jan, 11:50PM - 12th Jan, 9:00AM</p>
                    <p>Alumni Seminar Hall, Main building</p>
                </div>
                <div className="POC">
                    <h1>POC</h1>
                    <p>Rishab Dugar (+91 1234567890 )</p>
                    <p>Rishab Dugar (+91 1234567890 )</p>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;
