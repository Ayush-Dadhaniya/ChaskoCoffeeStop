import React from "react";
import footImage from "../resource/fotter_image.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Footer() {
  return (
    <div className="footerDiv">
      <img className="footerImg" src={footImage} alt="foot" />
      <div className="footer-brown-rectangle">
        <div className="completeContentDiv">
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-around",
            }}
          >
            <div className="footerContent">
              <div className="logoNameDetail">
                <h2 className="footNameHead">ChaskoCoffeeStop</h2>
                <p className="footNameContent">
                  At Chasko Coffee Stop, we believe that every cup of coffee is
                  a moment worth savoring. Our passion for quality and flavor
                  drives us to source the finest beans from around the world,
                  ensuring each sip brings warmth and joy. Whether you're
                  starting your day or taking a well-deserved break, we invite
                  you to relax in our cozy atmosphere and enjoy the perfect brew
                  crafted just for you. Join us in celebrating the art of
                  coffee, one delightful cup at a time!
                </p>
                <div className="social-media-icons">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div clasname="About">
              <ul className="nav-list">
                <li>
                  <a href="#about">
                    <h2 className="Abouthead">About</h2>
                  </a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#news">News & Blogs</a>
                </li>
                <li>
                  <a href="#help">Help & Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-around",
            }}
          >
            <div clasname="Company">
              <ul className="nav-list">
                <li>
                  <a href="#company">
                    <h2 className="Companyhead">Company</h2>
                  </a>
                </li>
                <li>
                  <a href="#terms">Terms and Services</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#howwework">How we work</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="contact-us">
              <h2>Contact Us</h2>
              <ul className="contact-list">
                <li>
                  <strong>Address:</strong>
                  <br />
                  Akshya Nagar 1st Block 1st Cross,
                  <br />
                  Rammurthy Nagar,
                  <br />
                  Ahmedabad-382415
                </li>
                <li>
                  <strong>Phone:</strong>
                  <a href="+91 123456789"> +91 1234567890</a>
                </li>
                <li>
                  <strong>Email:</strong>
                  <a href="mailto:chaskocoffeestop@mail.com">
                    {" "}
                    chaskocoffeestop@mail.com
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>
                  <a
                    href="https://chasko-coffee-stop.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    chasko-coffee-stop.vercel.app
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
