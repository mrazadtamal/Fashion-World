import React from "react";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">KA-200, Kuril, Progoti Shoroni, Dhaka</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 08:00 pm</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img
        style={{ width: "100%" }}
        src="https://res.cloudinary.com/abidazad/image/upload/v1649413714/2022/shopping-mall-3521181_640_a5oaha.jpg"
        alt="finus_img"
      />
    </div>
  </div>
);

export default FindUs;
