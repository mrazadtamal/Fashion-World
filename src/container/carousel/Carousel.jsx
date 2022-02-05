import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

import "./carousel.css";
SwiperCore.use([Autoplay]);
export default function Carousel() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643949669/pexels-genor-chiomento-1805866_1_1_obhpxr.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643950833/pexels-jack-winbow-1457983_uwstxl.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643949669/pexels-genor-chiomento-1805866_1_1_obhpxr.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643949669/pexels-genor-chiomento-1805866_1_1_obhpxr.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643949669/pexels-genor-chiomento-1805866_1_1_obhpxr.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643949669/pexels-genor-chiomento-1805866_1_1_obhpxr.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643949669/pexels-genor-chiomento-1805866_1_1_obhpxr.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643949669/pexels-genor-chiomento-1805866_1_1_obhpxr.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643949669/pexels-genor-chiomento-1805866_1_1_obhpxr.jpg"
            }
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
