import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./carousel.css";

import { Navigation, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        rewind={true}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649346991/2022/young-man_ew0ar1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649346991/2022/ellow_uly0kw.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649346991/2022/okay-gesture_nnxraw.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649346990/2022/ng-stylish-young-man_1_hsmfw6.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649346991/2022/man-posing_z9kmdv.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
