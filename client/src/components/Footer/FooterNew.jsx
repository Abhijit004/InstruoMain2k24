import { Link } from "react-router-dom";
import "./FooterNew.css";
import logo from "/assets/Footer/logo.svg";
import phone from "/assets/Footer/Phone.svg";
import {
    PhoneFilled,
    MailFilled,
    FacebookFilled,
    LinkedinFilled,
    InstagramFilled,
} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";

const main = [
    { number: "+91-9135712063", name: "Rahul Kumar" },
    { number: "+91-9926091967", name: "Aniket Chanda" },
    { number: "+91-7803847434", name: "Raksha Pahariya" },
];
const sponsors = [
    { number: "+91-6394731738", name: "Vaishnavi Malviya" },
    { number: "+91-8788330638", name: "Ketan Mohan Masurkar" },
    { number: "+91-6296883037", name: "Krishnendu Mondal" },
];
const convenors = [
    {
        number: "+91-7003198150",
        name: "Dr. Shyamlendu Kandar",
        email: "shyamalenduk@it.iiests.ac.in",
    },
    {
        number: "+91-9986150962",
        name: "Dr. Indrajeet Mukherjee",
        email: "imukherjee@aero.iiests.ac.in",
    },
];
const people = [main, sponsors, convenors];
const groupNames = ["Main Coordinators", "Sponsorship", "Convenors"];
const socials = [
    {
        url: "mailto:sponsorship.instruo@gmail.com",
        src: MailFilled,
        alt: "mail",
    },
    {
        url: "https://www.facebook.com/instruo.iiests",
        src: FacebookFilled,
        alt: "Facebook",
    },
    {
        url: "https://www.instagram.com/instruo_iiests?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        src: InstagramFilled,
        alt: "Instagram",
    },
    {
        url: "https://www.linkedin.com/company/instruo-iiests/",
        src: LinkedinFilled,
        alt: "Linkedin",
    },
];

const PersonDetails = ({ name, phone, email }) => {
    return (
        <div className="person-name">
            <span>{name}</span>
            <span style={{ color: "hsla(218, 11%, 65%, 0.7)", fontSize: '0.8rem' }}>
                <PhoneFilled />
                {" "}
                {phone}
            </span>
            {email && (
                <span style={{ color: "hsla(218, 11%, 65%, 0.7)", fontSize: '0.8rem' }}>
                    <MailFilled />
                    {"  "}
                    {email}
                </span>
            )}
        </div>
    );
};

const FooterNew = () => {
    return (
        <footer className="nf">
            <div className="fcontent">
                <div className="about-instruo">
                    <div className="heading">
                        <img src={logo} alt="instruo logo" />
                        INSTRUO
                    </div>
                    <p>
                        Kolkata's largest tech festival, where innovation meets
                        excellence. Join us to experience the pinnacle of
                        technology, creativity, and learning!
                    </p>
                    <div style={{ marginTop: "1.5rem", fontSize: "1.2rem" }}>
                        Socials
                    </div>
                    <div className="social">
                        {socials.map((connect, i) => {
                            return (
                                <a href={connect.url} alt={connect.alt} key={i}>
                                    <connect.src
                                        style={{ fontSize: "1.3rem" }}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="people">
                    <div className="content">
                        {people.map((p, i) => {
                            return (
                                <div key={i} className="peoplebox">
                                    <span
                                        style={{
                                            fontSize: "1.2rem",
                                            color: "#9ca3af",
                                            display: "block",
                                            fontWeight: 600,
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {groupNames[i]}
                                    </span>
                                    {p.map((e, ii) => {
                                        return (
                                            <PersonDetails
                                                name={e.name}
                                                phone={e.number}
                                                key={10 * (i + 1) + (ii + 1)}
                                                email={e.email}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="nf-end">
                <p>Copyright © 2024 Instruo. All rights reserved</p>
            </div>
        </footer>
    );
};

export default FooterNew;
