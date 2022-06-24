import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Single_Serv } from "./single_serv";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import our_services from "../data/services";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const handleDragStart = (e) => e.preventDefault();
SwiperCore.use([Autoplay, Pagination, Navigation]);
export function Gallery() {
  return (
    <div
      className="container mt-5"
      style={{
        height: "55vh",
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {our_services.map((sev, index) => (
          <SwiperSlide key={index}>
            <Single_Serv
              onDragStart={handleDragStart}
              role="presentation"
              lbl={sev.name}
              img={sev.imgs[0]}
              desc={sev.services[0]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
