import { Link } from "react-router-dom";
import "./footer.css";
import logo from "/assets/Footer/logo.svg";
import phone from "/assets/Footer/Phone.svg";

const phoneNumbers = [
  "+91 1234234534",
  "+91 1234234534",
  "+91 1234234534",
  "+91 1234234534",
];

const quickLinks = [
  { path: "/events", label: "Events" },
  { path: "/team", label: "Our Team" },
  { path: "/sponsors", label: "Sponsors" },
];

const socials = [
  { url: "#", src: "/assets/Footer/Email.svg", alt: "Email" },
  { url: "#", src: "/assets/Footer/Facebook.svg", alt: "Facebook" },
  {
    url: "https://www.instagram.com/instruo_iiests?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    src: "/assets/Footer/Instagram.svg",
    alt: "Instagram",
  },
  { url: "#", src: "/assets/Footer/YouTube.svg", alt: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="footer">
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

          <div className="contact">
            <h3>Get in touch</h3>
            <ul>
              {phoneNumbers.map((number, index) => (
                <li key={index}>
                  <span className="phone-icon">
                    <img src={phone} alt="phone-icon" />
                  </span>
                  <span>{number}</span>
                </li>
              ))}
            </ul>
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
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Instruo. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
