import React from "react";

import { data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="service">
      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant">Our Service</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img
          src="https://res.cloudinary.com/abidazad/image/upload/v1649356931/2022/fashion-1844722_1920_yv18nt.jpg"
          alt="laurels_img"
        />
      </div>
    </div>
  );
};

export default Laurels;
