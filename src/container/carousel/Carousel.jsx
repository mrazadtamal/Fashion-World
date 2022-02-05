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
          <div
            style={{
              height: "90vh",
              width: "100%",
              backgroundImage: `url(https://res.cloudinary.com/abidazad/image/upload/v1644085932/s-warley-venancio-2661536_1_1_g4luml.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundImage: `url(https://res.cloudinary.com/abidazad/image/upload/v1643950833/pexels-jack-winbow-1457983_uwstxl.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundImage: `url(https://res.cloudinary.com/abidazad/image/upload/v1644075613/pexels-pixabay-206434_1_se55tg.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
