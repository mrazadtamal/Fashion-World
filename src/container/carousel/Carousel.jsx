import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={[true]}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649395255/2022/venancio-2661536_brepmj.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649356931/2022/people-3334896_1920_qzwclq.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649351432/2022/man-1283231_1280_o5v3vn.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649356447/2022/man-2178721_1920_feawuj.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649395976/2022/girl-442606_1280_zn6so3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649395977/2022/young-woman-803347_1280_ctlcdx.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649395977/2022/young-woman-803154_1920_umc0qd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649395975/2022/moody-719227_1920_ft9beq.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/abidazad/image/upload/v1649356930/2022/stylish-916502_1280_zm7vqc.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
