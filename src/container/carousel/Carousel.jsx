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
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1643950833/pexels-jack-winbow-1457983_uwstxl.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1644075613/pexels-pixabay-206434_1_se55tg.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1644075618/pexels-noelle-otto-906002_1_llisea.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1644075613/pexels-andrea-piacquadio-839011_3_smjft9.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1644075610/pexels-andrea-piacquadio-972995_1_vduf5t.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1644075609/pexels-pixabay-372042_1_v1a6ar.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://res.cloudinary.com/abidazad/image/upload/v1644075608/pexels-manjeet-singh-yadav-1162983_1_h3mff3.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
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
