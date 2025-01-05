import "./Sponsorship.css";
import Carousel from "/src/components/Carousel/Carousel";
import CustomButton from "../../components/CustomButton/CustomButton";
import { DownloadOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Mesh from "../../components/Mesh/Mesh";
import lamp from "/assets/AboutUsLamp.webp";

const contacts = [
    { name: "Person 1", role: "Chairperson" },
    { name: "Person 2", role: "Joint Convenor" },
    { name: "Person 3", role: "Joint Convenor" },
    { name: "Person 4", role: "Treasurer" },
    { name: "Person 5", contact: "+91 95552 09179" },
    { name: "Person 6", contact: "+91 78909 38525" },
    { name: "Person 7", contact: "+91 84204 74705" },
];

const Sponsorship = () => {
    const fileDownload = () => {
        const pdfUrl = "./assets/SponsorshipBrochure_Instruo13.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Instruo13brochure.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="sponsors-container flex-center">
            {/* <img
                src="/assets/Sponsor/Ellipse 8.svg"
                className="ellipse ellipse-1"
                alt=""
            />
            <img
                src="/assets/Sponsor/Ellipse 9.svg"
                className="ellipse ellipse-2"
                alt=""
            />
            <img
                src="/assets/Sponsor/Ellipse 10.svg"
                className="ellipse ellipse-3"
                alt=""
            /> */}
            <div className="sponsors-primary flex-center">
                <img
                    src="/assets/Sponsor/sponsorship.webp"
                    alt="star"
                    className="backstar"
                />
                <h1 className="sponsors-title gradient-bw main-title">
                    Sponsor Us
                </h1>
                <p className="main-para">
                    Step into Kolkata&apos;s ultimate tech extravaganza! Dive
                    into innovation, challenge your limits in thrilling
                    competitions, and get hands-on with transformative
                    workshops. Ignite your ideas and be the spark that
                    revolutionizes the future!
                </p>

                <CustomButton
                    text={"Download Brochure"}
                    style={{ marginTop: "1rem", fontWeight: 900 }}
                    onClick={fileDownload}
                    icon={<DownloadOutlined />}
                />
            </div>
            <div className="sponsors-secondary flex-center">
                {/* <div className="checkered-bg"></div>// */}
                <Mesh />
                <h1 className="sponsors-title">Why Sponsor Us ?</h1>
                <p className="sponsor-para">
                    Sponsoring our college fest is a wonderful opportunity to
                    connect with a vibrant and enthusiastic audience while
                    supporting a celebration of creativity, talent, and
                    innovation. Your partnership will not only enhance the
                    event’s success but also leave a lasting impression on the
                    next generation of changemakers.
                </p>

                <div className="btn-group">
                    <a href="https://www.iiests.ac.in/">
                        <CustomButton
                            text={"Read More"}
                            style={{
                                marginTop: "2rem",
                                zIndex: 4,
                                fontWeight: 900,
                            }}
                            icon={<ArrowRightOutlined />}
                        />
                    </a>
                </div>
            </div>
            <div className="carousel-container flex-center">
                <div className="sponsor-lamp" style={{ top: "-3rem" }}>
                    <img src={lamp} alt="lamp" />
                </div>
                <h1 className="sponsors-title">Past Sponsors</h1>
                <Carousel />
            </div>

            {/* <div className="sponsors-cta flex-center">
                <h1 className="sponsors-title">Connect With Us</h1>

                <div className="contacts">
                    <div className="contact-grid">
                        {contacts.map((contact, index) => (
                            <div className="contact-card" key={index}>
                                <h1>{contact.name}</h1>
                                {contact.role ? (
                                    <div className="role">{contact.role}</div>
                                ) : (
                                    <div className="contact-info">
                                        <img
                                            src="https://img.icons8.com/material-outlined/24/ffffff/phone.png"
                                            alt="Phone"
                                        />
                                        <span>{contact.contact}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Sponsorship;
