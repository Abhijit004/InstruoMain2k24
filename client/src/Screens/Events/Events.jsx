import React, { useEffect, useState } from "react";
import "./Events.css";
import EventsHero from "./EventsHero";
import DayLeft from "./DayLeft";
import DayRight from "./DayRight";
import { getEvents } from "../../services/api";
import formatTimestamp from "../../services/FormatTime";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [dayOne, setDayOne] = useState([]);
  const [dayTwo, setDayTwo] = useState([]);
  const [dayThree, setDayThree] = useState([]);

  const getEventsData = async () => {
    try {
      const res = await getEvents();
      console.log("I got events data: ");
      console.log(res.data);
      setEvents(res.data);

      if (res.data) {
        const dayOneTemp = [];
        const dayTwoTemp = [];
        const dayThreeTemp = [];

        res.data.forEach((e) => {
          const time = formatTimestamp(e.startTime);
          console.log(e);

          // Based on hour, push to the appropriate day
          const hour = parseInt(time.slice(0, 2));

          if (hour === 10) {
            dayOneTemp.push(e);
          } else if (hour === 11) {
            dayTwoTemp.push(e);
          } else if (hour === 12) {
            dayThreeTemp.push(e);
          } else {
            // Push events to default dayOne for now
            dayOneTemp.push(e);
          }
        });

        // Set states after processing events
        setDayOne(dayOneTemp);
        setDayTwo(dayTwoTemp);
        setDayThree(dayThreeTemp);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getEventsData();
  }, []);

  return (
    <div className="events-page">
      <EventsHero />
      <DayLeft
        events={dayOne}
        day={"one"}
        para={
          "The dawn of every journey begins with curiosity, a spark that ignites endless possibilities. Embrace the unknown, for today is the start of something extraordinary."
        }
      />
      <DayRight events={dayTwo} />
      <DayLeft
        events={dayThree}
        day={"three"}
        para={
          "Looking back, we see how far we've come. Ahead lies a path uncharted, waiting for footprints to tell a story only we can create."
        }
      />
    </div>
  );
};

export default Events;
