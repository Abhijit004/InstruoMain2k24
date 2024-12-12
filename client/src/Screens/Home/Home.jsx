import React from 'react'
import Hype from './Hype'
import AboutUs from './AboutUs'
import './Home.css'

const Hero = () => {
    return (
        <div>Hero</div>
    )
}
// const Hype = () => {
//     return (
//         <div>Hype</div>
//     )
// }
// const AboutUs = () => {
//     return (
//         <div>AboutUs</div>
//     )
// }
const PreviousEditions = () => {
    return (
        <div>PreviousEditions</div>
    )
}

const Home = () => {
  return (
    <section 
        className='instruo-home'
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Hero />
        <Hype />
        <AboutUs />
        <PreviousEditions />
    </section>
  )
}

export default Home