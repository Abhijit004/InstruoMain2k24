import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section left">
            <div className="logo">
              <Link to="/">
                <img
                  src="/assets/instruo 1.svg"
                  alt="Instruo Logo"
                  className="logo-icon"
                />
              </Link>
              <Link to="/">
                <h1>INSTRUO</h1>
              </Link>
            </div>
            <p>
              The largest technical fest of
              <br />
              Kolkata. Some more spicy lines
              <br />
              instead of lorem.
            </p>
          </div>

          <div className="footer-section middle">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/sponsors">Sponsors</Link>
                </li>
              </ul>
            </div>

            <div className="contact">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <span className="phone-icon">
                    <img src="/assets/Phone.svg" alt="phone-icon" />
                  </span>
                  <span>+91 1234234534</span>
                </li>
                <li>
                  <span className="phone-icon">
                    <img src="/assets/Phone.svg" alt="phone-icon" />
                  </span>
                  <span>+91 1234234534</span>
                </li>
                <li>
                  <span className="phone-icon">
                    <img src="/assets/Phone.svg" alt="phone-icon" />
                  </span>
                  <span>+91 1234234534</span>
                </li>
                <li>
                  <span className="phone-icon">
                    <img src="/assets/Phone.svg" alt="phone-icon" />
                  </span>
                  <span>+91 1234234534</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-section right">
            <h3>Socials</h3>

            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src="/assets/Email.svg" alt="Email" />
              </a>
              <a href="#" className="social-icon">
                <img src="/assets/Facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/instruo_iiests?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="social-icon"
              >
                <img src="/assets/Instagram.svg" alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src="/assets/YouTube.svg" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>copyright 2024 - All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;