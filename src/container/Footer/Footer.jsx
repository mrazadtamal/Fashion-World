import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">CONTACT US</h1>
        <p className="p__opensans">Dhaka, Bangladesh</p>
        <p className="p__opensans">01757355100</p>
      </div>

      <div className="app__footer-links_logo">
        <img
          style={{ width: "40px" }}
          src="https://res.cloudinary.com/abidazad/image/upload/v1633197929/LOGO_1_d3bfdm.svg"
          alt="footer_logo"
        />
        <p className="p__opensans">
          &quot;Find us on any of these platforms&quot;
        </p>

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiGithub />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">HELP & INFORMATION</h1>
        <p className="p__opensans">Help</p>
        <p className="p__opensans">Track order</p>
        <p className="p__opensans">Delivery & returns</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Copyright © 2022 : Abid Azad Tamal</p>
    </div>
  </div>
);

export default Footer;
