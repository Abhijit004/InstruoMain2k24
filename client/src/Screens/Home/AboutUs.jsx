import React from "react";
import "./AboutUs.css";
import lamp from "/assets/AboutUsLamp.webp";
import orb from "/assets/AboutUsOrb.webp";
import college from "/assets/college.jpg";

const AboutUs = () => {
    return (
        <section className="instruo-about">
            <div className="lamp" style={{ top: 0 }}>
                <img src={lamp} alt="lamp" />
            </div>
            <div className="heading">About Us</div>
            <section className="about-card-wrapper">
                <section className="about-card" about="instruo">
                    <div className="heading">Instruo@2k25</div>
                    <p>
                        INSTRUO, the Annual Technical Fest of IIEST, Shibpur, is all about “Driving Innovation.” From a
                        modest and humble beginning in 2009 to becoming the largest Tech-Fest of Kolkata and the second
                        largest in Eastern India, it has skyrocketed its way to being a signature event in Kolkata's "
                        technical " calendars. This year “INSTRUO 2025 - THE 13TH EDITION”. So, be ready to witness the
                        unique magnanimity of INSTRUO packed with a humongous number of events ranging from technical
                        and high-end Robowars to beautiful and surreal literary contests.
                    </p>
                    <div>
                        <h3>Mission</h3>
                        INSTRUO plans to achieve a new clean and clear concept of new innovations worldwide and give the
                        young minds a platform to showcase their learnings and teamwork through multiple technical
                        events and activities for this edition we will focus on new events of metaverse and artificial
                        intelligence
                    </div>
                    <div>
                        <h3>Objective</h3>
                        IIEST, Shibpur is to become one of the best Institutes in the world in providing the state
                        of-the art multi-disciplinary research ambience that will usher innovative world-class
                        technologies developed towards realizing the goal of developed India. INSTRUO caters the
                        creative and innovative minds of students to augument it into reality.
                    </div>
                    <div>
                        <h3>Vision</h3>
                        Since its inception, INSTRUO has always strived towards the goal of exploring ground breaking
                        innovations! The upcoming edition of INSTRUO will only reinforce this very ideology and maneuver
                        in bringing society closer in aspects of technology and innovation. The very crux of INSTRUO
                        2025 is to provide opportunities to learn and explore the vastness of science and to learn
                        technology and strive for a better tomorrow.
                    </div>
                </section>
                <section className="about-card" about="college">
                    <div className="heading">IIEST Shibpur</div>
                    <p>
                        Since its foundation in the mid-19th century, the Indian Institute of Engineering Science and
                        Technology, Shibpur, erstwhile The Bengal Engineering College, is the second oldest engineering
                        college across the Indian subcontinent and has ceaselessly striven hard to contribute to the
                        development of the nation. Acknowledged as an Institute of National Importance, ranked 49th in
                        the 2024 NIRF Rankings and 401 450 in the QS Asia Ranking 2023. IIEST has a rich history, and
                        its campus features stunning colonial architecture and verdant surroundings that reflect its
                        profound historical heritage.
                        <br />
                        <br />
                        The institute offers a plethora of festivals, seminars, and events that celebrate diversity,
                        creativity, and innovation. It has an immense alumni base furnishing not only the engineering
                        industry but also across the fields of science, culture, art, and politics. IIEST is recognized
                        for its academic excellence, cutting-edge research, and contributions to engineering and
                        technology. It is renowned for its research output and collaborations with leading industries
                        and academic institutions globally. Their contributions in various sectors foster lasting
                        relationships and drive innovation, strengthening the institute's legacy.
                    </p>
                    {/* <img src={college} alt="college" imgv="college" /> */}
                </section>
                <img src={orb} alt="orb" />
            </section>
        </section>
    );
};

export default AboutUs;
