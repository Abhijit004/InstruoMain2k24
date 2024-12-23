import React, { useEffect, useState } from 'react'
import "./Events.css"
import EventsHero from './EventsHero'
import DayLeft from './DayLeft'
import DayRight from './DayRight'
import { createEvent } from '../../services/api'

const Events = () => {
  const [events, setEvents] = useState([]);

  // const getEventsData = async () => {
  //   try {
  //     const res = getEvents();
  //     setEvents(res.data);
  //   }
  //   catch (err) {
  //     console.log(err.message)
  //   }
  // }

  // useEffect(() => {
  //   getEventsData();
  // })


  return (
		<div className="events-page">
			<EventsHero />
			<DayLeft events={events} day={"one"} />
			<DayRight events={events} />
			<DayLeft events={events} day={"three"} />
		</div>
  );
}

export default Events