import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Sub_Nav from "../components/sub_nav";
import our_services from "../data/services";
import logo from "../assets/images/logos/7th_Avenue_Logo.png";
import strings from "../lang/langs";
import "../styles/services.css";

export function Services() {
  const [index, setIndex] = useState(0);
  useEffect(() => {}, [index]);

  function handelActiveElement(e) {
    e.preventDefault();
    let ele = document.querySelectorAll(".serv-info-item a");
    ele.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    setIndex(parseInt(e.target.getAttribute("data-index")));
  }
  return (
    <div className="services">
      <div className="row">
        <div className="col-lg-3 one p-0">
          <div className="container head-cont text-content-in-sec pr-0 shadow pb-5">
            <NavLink to="/" className="logo d-block mb-5 pl-5">
              <img src={logo} alt="" />
            </NavLink>
            <div className="d-flex sec-head-cont">
              <span id="sec-title-line" style={{ height: "35px" }}></span>
              <h2 className="sec-title ml-2 pt-0">{strings.serv_title}</h2>
            </div>
            <p className="fs-13 pl-2">{strings.serv_desc}</p>
            <ul className="our-services-list mt-4">
              {our_services.map((sev, index) => (
                <li className="serv-info-item" key={index}>
                  <a
                    href="#"
                    className="fs-13"
                    data-index={index}
                    onClick={handelActiveElement}
                  >
                    {sev.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="d-flex flex-column align-items-center">
              <select
                class="form-control d-none f-select w-50 my-5 mr-3"
                onChange={(e) => setIndex(e.target.value)}
              >
                {our_services.map((sev, index) => (
                  <option key={index} value={index}>
                    {sev.name}
                  </option>
                ))}
              </select>

              {/* <NavLink to="/" className="d-none back-home">
                <i className="ti-home" title={strings.back_home}></i>
              </NavLink> */}
            </div>

            <div className="our-sm-sec text-center">
              <a href="#">
                <i className="ti-facebook"></i>
              </a>
              <a href="#">
                <i className="ti-twitter-alt"></i>
              </a>
              <a href="#">
                <i className="ti-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 p-0 two"
          style={{
            overflow: "hidden",
          }}
        >
          <div className="over-lay"></div>
          <div className="img-in-center d-flex justify-content-center align-items-center">
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {our_services[index].imgs.map((serv, i) => (
                <SwiperSlide key={i}>
                  <img src={serv} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="col-lg-5 p-0 three">
          <div className="container pt-4 mb-5">
            <nav
              className={`navbar navbar-expand-lg navbar-light bg-white justify-content-between`}
            >
              <Sub_Nav />
            </nav>

            <h2 className="serv-info text-center my-5">
              {our_services[index].name}
            </h2>

            <ul className="serv-info-list mt-4 w-50 mx-auto">
              {our_services[index].services.map((sev, i) => (
                <li className="fs-13 mb-3" key={i}>
                  {sev}
                </li>
              ))}
            </ul>

            <div className="serv-controllers d-flex align-items-center">
              <div className="serv-controllers-btn">
                <i
                  className="ti-angle-left und-li"
                  onClick={() => {
                    if (index == 0) {
                      setIndex(6);
                    } else {
                      setIndex(index - 1);
                    }
                  }}
                ></i>
                <i
                  className="ti-angle-right"
                  onClick={() => setIndex((index + 1) % 6)}
                ></i>
              </div>
              <div className="navegator ml-4">
                0{index + 1}/0{our_services.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
