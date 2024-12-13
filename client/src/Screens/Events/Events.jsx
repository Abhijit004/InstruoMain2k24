import React from 'react'
import "./Events.css"
import EventsHero from './EventsHero'
import DayLeft from './DayLeft'
import DayRight from './DayRight'

const Events = () => {
  return (
    <div className="events-page">
        <EventsHero />
        <DayLeft day={'one'} />
        <DayRight />
        <DayLeft day={'three'} />
    </div>
  )
}

export default Events