import React from "react";
import "./Header.css";
import SubHeading from "./../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Fashion World" />
      <h1 className="app__header-h1">Fashion design is the art</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos similique
        quis nesciunt praesentium saepe facilis nihil reprehenderit quisquam
      </p>
      <button type="button" className="custom__button">
        Explore More
      </button>
    </div>

    <div className="app__wrapper_img">
      <img
        src={
          "https://res.cloudinary.com/abidazad/image/upload/v1643912585/pexels-yuri-manei-2690323_1_gdm5k8.jpg"
        }
        alt="header_img"
      />
    </div>
  </div>
);

export default Header;
