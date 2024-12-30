import React from "react";
import { useParams } from "react-router-dom";
import "./SingleEvent.css";
import CustomButton from "../../components/CustomButton/CustomButton";
const SingleEvent = () => {
  const { eventID } = useParams();
  console.log(eventID);

  const back = "/assets/groupfie.webp";

  return (
    <div className="single-event">
      <div className="hero">
        <div className="banner"></div>
        <div className="heading gradient-bw">The Arena</div>
        <div className="time">10th jan, 11:50PM - 12th Jan, 9:00AM</div>
        {/* <div className="venue">Alumni Seminar Hall, Main Building</div> */}
        <div className="byline">
          Welcome to the Events section of Instruo, where passion meets purpose,
          and creativity knows no bounds.
          {/* Here, you'll find a carefully curated
          lineup of experiences designed to challenge your skills, ignite your
          imagination, and connect you with like-minded visionaries. Let’s make
          every moment unforgettable." */}
        </div>
        <a href="#event-container">
          <img
            src="/assets/SingleEvent/Double Down.svg"
            alt=""
            className="hero-image"
          />
        </a>
      </div>
      <div className="event-container" id="event-container">
        <div className="image-container">
          <img src="/assets/SingleEvent/image.png" alt="" className="image" />
        </div>
        <div className="event-text">
          <p>
            Some cheesy lines to talk about what the event is about. I hope this
            text is legible enough to read, but incase its not. Damn you wasted
            time to read it we have a better description below.
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
