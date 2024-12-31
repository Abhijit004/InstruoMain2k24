import { Link } from "react-router-dom";
import "./footer.css";
import logo from "/assets/Footer/logo.svg";
import phone from "/assets/Footer/Phone.svg";

const mainCoordinators = [
  { number: "+91-9135712063", name: "Rahul Kumar" },
  { number: "+91-9926091967", name: "Aniket Chanda" },
  { number: "+91-7803847434", name: "Raksha Pahariya" },
];

const sponsorCoordinators = [
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

const quickLinks = [
  { path: "/workshops", label: "Workshops" },
  { path: "/events", label: "Events" },
  { path: "/sponsors", label: "Sponsors" },
  { path: "/team", label: "Our Team" },
];

const socials = [
  {
    url: "mailto:sponsorship.instruo@gmail.com",
    src: "/assets/Footer/Email.svg",
    alt: "Website",
  },
  {
    url: "https://www.facebook.com/instruo.iiests",
    src: "/assets/Footer/Facebook.svg",
    alt: "Facebook",
  },
  {
    url: "https://www.instagram.com/instruo_iiests?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    src: "/assets/Footer/Instagram.svg",
    alt: "Instagram",
  },
  {
    url: "https://www.linkedin.com/company/instruo-iiests/",
    src: "/assets/Footer/LinkedIn.svg",
    alt: "YouTube",
  },
];

const Footer = () => {
  return (
    <footer className="footer flex-center">
      <div className="footer-content">
        <div className="footer-section left">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Instruo Logo" className="logo-icon" />
            </Link>
            <Link to="/">
              <h1>INSTRUO</h1>
            </Link>
          </div>
          <p>
            Kolkata's largest tech festival, where innovation meets excellence.
            Join us to experience the pinnacle of technology, creativity, and
            learning!
          </p>
        </div>

        <div className="footer-section middle">
          <h3 className="main-head">Get in touch</h3>
          <div className="coordinators">
            <div className="main-coordinators">
              <h3>Main Coordinators</h3>
              <ul>
                {mainCoordinators.map(({ number, name }, index) => (
                  <>
                    <li>
                      <span className="contacts-name">{name}</span>
                    </li>
                    <li key={index}>
                      <span className="phone-icons">
                        <img src={phone} alt="phone-icon" />
                        <span>{number}</span>
                      </span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="main-coordinators ">
              <h3>Sponsorship Coordinators</h3>
              <ul>
                {sponsorCoordinators.map(({ number, name }, index) => (
                  <>
                    <li>
                      <span className="contacts-name">{name}</span>
                    </li>
                    <li key={index}>
                      <span className="phone-icons">
                        <img src={phone} alt="phone-icon" />
                        <span>{number}</span>
                      </span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="main-coordinators">
              <h3>Convenors</h3>
              <ul>
                {convenors.map(({ number, name, email }, index) => (
                  <>
                    <li key={index}>
                      <span className="contacts-name">{name}</span>
                    </li>
                    <li key={index}>
                      <span className="phone-icons">
                        <img src={phone} alt="phone-icon" />
                        <span>{number}</span>
                      </span>
                    </li>
                    <li>
                      <span className="phone-icons">
                        <img
                          src="/assets/Footer/Email.svg"
                          alt="phone-icon"
                          className="mail-icon"
                        />
                        <span>{email}</span>
                      </span>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-section right">
          <h3>Socials</h3>
          <div className="social-icons">
            {socials.map(({ url, src, alt }, index) => (
              <a href={url} className="social-icon" key={index}>
                <img src={src} alt={alt} />
              </a>
            ))}
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map(({ path, label }, index) => (
                <li key={index}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom flex-center">
        <p>Copyright © 2024 Instruo. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
