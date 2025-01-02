import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleEvent.css";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { getEventByID } from "../../services/api";
import formatTimestamp from "../../services/FormatTime";
import CustomButton from "../../components/CustomButton/CustomButton";
import Mesh from "../../components/Mesh/Mesh";

const SingleEvent = () => {
    const { eventID } = useParams();
    const [bg, setBg] = useState(0);
    const [eventDetail, setEventDetail] = useState(null);
    const [bglist, setBglist] = useState([]);
    const [poster, setPoster] = useState("");

    useEffect(() => {
        if (eventDetail) {
            const bgtemp = ["/assets/groupfie.webp"];
            eventDetail.images.forEach((image) => {
                if (image.type === "poster") setPoster(image.url);
                else bgtemp.push(image.url);
            });

            setBglist(bgtemp);
        }
    }, [eventDetail]);

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
                    <CalendarOutlined />{" "}
                    {eventDetail && formatTimestamp(eventDetail.startTime)} to{" "}
                    {eventDetail && formatTimestamp(eventDetail.endTime)}
                </div>
                <div className="venue">
                    <EnvironmentOutlined /> {eventDetail?.venue}
                </div>
                <a href="#event-container">
                    <img
                        style={{
                            width: "2rem",
                            margin: "2rem",
                        }}
                        src="/assets/SingleEvent/Double Down.svg"
                        alt=""
                    />
                </a>
            </div>
            <section className="event-container" id="event-container">
                <div className="image-container">
                    <img src={poster} alt="" />
                </div>
                <div className="event-text">
                    <Mesh style={{}} />
                    <p>{eventDetail?.description}</p>
                    <div className="button-group">
                        <CustomButton
                            href={
                                eventDetail ? eventDetail.registrationUrl : "#"
                            }
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
                            href={eventDetail?.rulesDoc}
                        />
                    </div>
                </div>
            </section>

            <div className="info-container">
                <div className="time">
                    <h1>Time and Place</h1>
                    <p>
                        {eventDetail && formatTimestamp(eventDetail.startTime)}{" "}
                        to {eventDetail && formatTimestamp(eventDetail.endTime)}
                    </p>
                    <p>{eventDetail?.venue}</p>
                </div>
                {/* <div className="POC">
                    <h1>POC</h1>
                    <p>Rishab Dugar (+91 1234567890 )</p>
                    <p>Rishab Dugar (+91 1234567890 )</p>
                </div> */}
            </div>
        </div>
    );
};

export default SingleEvent;
