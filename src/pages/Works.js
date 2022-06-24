import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navbar } from "../components";
import our_works from "../data/our_works_images";
import strings from "../lang/langs";
import "../styles/works/works.css";
import "swiper/css";

export function Works() {
  const [ele, setEle] = useState(null);
  const [selectedNow, setSelectedNow] = useState(our_works[0]);

  useEffect(() => {
    setEle(document.querySelector(".work-details"));
  }, [selectedNow]);

  const toggelSection = () => {
    ele.classList.toggle("show");
    document.querySelectorAll(".works-card").forEach((i) => {
      i.classList.toggle("d-none");
    });
  };

  return (
    <>
      <Navbar />
      <div className="py-5 our-works-cont">
        <header className="text-center mb-5">
          <h2 className="sec-title">{strings.our_works_title}</h2>
          <p className="fs-13 w-50 mx-auto mt-3">{strings.our_works_desc}</p>
        </header>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          onClick={toggelSection}
          className="h-45vh swip-cust-cls"
        >
          {our_works.map((cust, index) => (
            <SwiperSlide
              onClick={() => {
                setSelectedNow(cust);
              }}
              key={index}
            >
              <div className="works-card shadow rounded">
                <img src={cust.img} className="rounded" alt="" />
                <label className="py-3">{cust.name}</label>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slid-page-cont d-flex justify-content-center align-items-center">
          <div className="slide-page"></div>
          <div className="slide-page dis-color "></div>
          <div className="slide-page dis-color "></div>
        </div>
        <div className="works-col d-none">
          {our_works.map((cust, index) => (
            <div
              onClick={() => {
                toggelSection();
                setSelectedNow(cust);
              }}
              key={index}
            >
              <div className="works-card w-75 mx-auto mb-3 shadow rounded">
                <img src={cust.img} className="rounded" alt="" />
                <label className="py-3">{cust.name}</label>
              </div>
            </div>
          ))}
        </div>
        <div
          className="work-details d-none"
          onLoad={() => {
            let w = localStorage.getItem("curr_work");
            if (w) {
              console.log(w);
              toggelSection();
              setSelectedNow(our_works[w]);
            }
          }}
        >
          <div className="over-cont">
            <div className="over-lay p-5"></div>
          </div>
          <div className="bg-white pb-5">
            <div className="row p-4 details">
              <div className="col-lg-5">
                <div className="text-content">
                  <i
                    className="ico ti-angle-down"
                    onClick={() => {
                      toggelSection();
                      setSelectedNow({ ...selectedNow, sub_img: [] });
                      localStorage.removeItem("curr_work");
                    }}
                  ></i>
                  <h2 className="sec-title">{selectedNow.name}</h2>
                  <p className="fs-13 text-secondary">{strings.we_happy}</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img-cont shadow">
                  <img src={selectedNow.img} alt="" />
                </div>
              </div>
            </div>
            <div className="row px-4 justify-content-end">
              {selectedNow.sub_img.map((img, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <img src={img} className="img-in-det shadow w-100" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
