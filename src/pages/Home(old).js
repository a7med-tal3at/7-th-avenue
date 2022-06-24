import React from "react";
import { useEffect, useState } from "react";
import strings from "../lang/langs";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import $ from "jquery";

import {
  CuttedLine,
  HomeGalaryImg,
  MV_Block,
  SecondaryNav,
  Single_Work,
  Gallery,
  Clients_Section,
  Navbar,
  Client_Image,
} from "../components";

import logo from "../assets/images/logos/7th_Avenue_Logo.png";
import dio from "../assets/images/icons/diomend-icon.png";
import tar from "../assets/images/icons/target.png";
import hi from "../data/home_images";
import ep1 from "../assets/images/sections/event_planning/Group 46.png";
import ep2 from "../assets/images/sections/event_planning/Group 47.png";
import ep3 from "../assets/images/sections/event_planning/Group 55.png";
import ep4 from "../assets/images/sections/event_planning/Group 101.png";
import ep5 from "../assets/images/sections/event_planning/Group 102.png";
import our_works from "../data/our_works_images";

import cli_img1 from "../assets/images/logos/Clients Logo-01.png";
import cli_img2 from "../assets/images/logos/Clients Logo-02.png";
import cli_img3 from "../assets/images/logos/Clients Logo-03.png";
import cli_img4 from "../assets/images/logos/Clients Logo-04.png";
import cli_img5 from "../assets/images/logos/Clients Logo-05.png";
import cli_img6 from "../assets/images/logos/Clients Logo-06.png";
import cli_img7 from "../assets/images/logos/Clients Logo-07.png";
import cli_img8 from "../assets/images/logos/Clients Logo-08.png";
import cli_img9 from "../assets/images/logos/Clients Logo-09.png";
import cli_img10 from "../assets/images/logos/Clients Logo-10.png";
import cli_img11 from "../assets/images/logos/Clients Logo-11.png";
import cli_img12 from "../assets/images/logos/Clients Logo-12.png";

import "../styles/home/home.css";
import "../styles/home/mission_and_vission.css";
import "../styles/home/our_works.css";
import "../styles/home/our_services.css";
import "../styles/home/clients.css";
import "../styles/home/event_planning.css";

import home_sec_img_1_alt from "../assets/images/pages/services/jimmy-chang-ACt8ycSzpdE-unsplash.jpg";
import home_sec_img_2_alt from "../assets/images/pages/services/phil-desforges-ow1mML1sOi0-unsplash.jpg";
import home_sec_img_3_alt from "../assets/images/pages/services/aditya-chinchure-6terqWC_KCk-unsplash.jpg";

export function Home() {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [imgArr, setImgArr] = useState([]);
  const [loading, setLoding] = useState(true);
  const [smLoading, setSmLoading] = useState(true);

  const [currentImgContainer, setCurrentImgContainer] = useState();

  const imgContArr = [
    [img3, home_sec_img_1_alt],
    [img2, home_sec_img_2_alt],
    [img4, home_sec_img_3_alt],
  ];

  const eventPlanImgCont = [ep1, ep2, ep3, ep4, ep5];

  useEffect(() => {
    setImg1(hi.img1);
    setImg2(hi.img2);
    setImg3(hi.img3);
    setImg4(hi.img4);

    setImgArr([
      cli_img1,
      cli_img2,
      cli_img3,
      cli_img4,
      cli_img5,
      cli_img6,
      cli_img7,
      cli_img8,
      cli_img9,
      cli_img10,
      cli_img11,
      cli_img12,
    ]);

    setTimeout(() => {
      setLoding(false);
    }, 1000);
  }, [img1, img2, img3, img4, loading]);

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $(".row-anim").animate(
        {
          opacity: "1",
          transform: "translateY(-30px) !important",
        },
        "slow"
      );
    }
  });
  return (
    <>
      <Navbar />
      {loading ? (
        <div
          className={
            "loading-screen d-flex justify-content-center align-items-center"
          }
        >
          <div className="logo-loading "></div>
          <img src={logo} alt="" />
        </div>
      ) : (
        <>
          <div className="container p-0">
            <header className="mt-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex">
                    <SecondaryNav
                      link1="#ev-pl"
                      link2="#clients"
                      link3="#services"
                      link4="#mission"
                    />
                    <div className="who-we-are">
                      <span className="def text-secondary fs-13">
                        {strings.defin}
                      </span>
                      <div className="header-animate-area">
                        <div className="d-flex my-2">
                          <h2 className="sec-title ">{strings.who_title}</h2>
                        </div>
                        <p className="fs-13">{strings.who_desc}</p>
                      </div>
                      <div className="comp-word to-hide ml-auto">
                        <div className="d-flex justify-content-between">
                          <div className="sec-content">
                            <h3 className="comp-name">{strings.brand}</h3>
                            <h6 className="comp-slogan">{strings.slog}</h6>
                          </div>
                          <img src={img1} alt="comp-slogan" />
                        </div>

                        <CuttedLine
                          c1="cutted-line-contaier"
                          c2="cutted-line"
                          c3="cutted-line-sub-1"
                          c4="cutted-line-sub-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex">
                    <CuttedLine
                      c1="cutted-2-line-contaier"
                      c2="cutted-2-line"
                      c3="cutted-2-line-sub-1"
                      c4="cutted-2-line-sub-2"
                    />
                    <div>
                      <div className="home-galary">
                        <div className="imgs d-flex">
                          <div className="img-contaner">
                            <HomeGalaryImg img={img4} w={164.73} h={180.45} />

                            <HomeGalaryImg img={img2} w={164.73} h={151.45} />
                          </div>

                          <HomeGalaryImg
                            img={img3}
                            stl={{
                              flex: "1.2",
                            }}
                            w={207.27}
                            h={339.92}
                          />
                        </div>
                        <Link to="#ev-pl">
                          <i className="ti-arrow-down d-block text-dark text-right"></i>
                        </Link>
                      </div>
                      <div className="comp-word for-res w-100 mb-5 d-none">
                        <div className="d-flex justify-content-between">
                          <div className="sec-content">
                            <h3 className="comp-name">{strings.brand}</h3>
                            <h6 className="comp-slogan">{strings.slog}</h6>
                          </div>
                          <div>
                            {smLoading ? (
                              <div
                                className="load"
                                style={{
                                  width: `130px`,
                                  height: `130px`,
                                }}
                              ></div>
                            ) : (
                              ""
                            )}

                            <img
                              src={img1}
                              alt="comp-slogan"
                              onLoad={() => setSmLoading(false)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <section className="m-and-v" id="mission">
            <div className="container">
              <h2 className="mv-title sec-title">{strings.vision_title}</h2>
              <p className="mv-desc text-secondary fs-13">
                {strings.vision_desc}
              </p>
            </div>

            <div className="blocks mt-5 bg-white py-5">
              <div className="row row-anim">
                <div className="col-lg-4 d-flex justify-content-center">
                  <MV_Block
                    ico="ti-eye"
                    lbl={strings.vision_vis}
                    desc={strings.vision_vis_desc}
                  />
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <MV_Block
                    img={dio}
                    lbl={strings.vision_val}
                    desc={strings.vision_val_desc}
                    center="true"
                  />
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <MV_Block
                    img={tar}
                    lbl={strings.vision_mis}
                    desc={strings.vision_mis_desc}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="our-works">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-xs-6">
                  <div className="singel-work">
                    <div className="d-flex">
                      <span
                        id="sec-title-line"
                        style={{ height: "35px" }}
                      ></span>
                      <h2 className="sec-title ml-2 pt-0">
                        {strings.our_works_title}
                      </h2>
                    </div>
                    <p className="fs-13 my-4">{strings.our_works_desc}</p>
                    <NavLink to="/works" className="w-btn fs-13">
                      {strings.more}
                    </NavLink>
                  </div>
                </div>

                {our_works.map((obj, index) => (
                  <div className="col-lg-3 col-sm-6 col-xs-6" key={index}>
                    <Single_Work img={obj.img} lbl={obj.name} idx={index} />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="our-services py-5" id="services">
            <div className="container">
              <div className="d-flex">
                <span id="sec-title-line" style={{ height: "35px" }}></span>
                <h2 className="sec-title ml-2 pt-0">{strings.serv_title}</h2>
              </div>
              <p className="fs-13">{strings.serv_desc}</p>

              <NavLink to="/services" className="w-btn fs-13">
                {strings.more}
              </NavLink>
            </div>
            <Gallery />
          </section>
          <section className="clients py-5" id="clients">
            <div className="container">
              <div className="text-center">
                <h2 className="sec-title">{strings.clients_title}</h2>
                <p className="fs-13 mb-4 mt-2">{strings.clients_desc}</p>
                <img src={logo} className="cl-sec-logo" alt="" />
              </div>
              <div className="clients-blocks d-flex justify-content-center">
                <Clients_Section />
              </div>
              <div className="grid-container h">
                {imgArr.map((img, index) => (
                  <Client_Image img={img} key={index} />
                ))}
              </div>
            </div>
          </section>
          <section className="event-planning py-5" id="ev-pl">
            <div className="container text-white">
              <div className="row">
                <div className="col-lg-6">
                  <div className="text mt-5">
                    <div className="d-flex mb-4">
                      <span
                        id="sec-title-line"
                        style={{ height: "35px" }}
                      ></span>
                      <h2 className="sec-title ml-2 pt-0 ">
                        {strings.event_plan_title}
                      </h2>
                    </div>
                    <p className="event-sec-desc">{strings.event_plan_desc}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="photo-gallary text-right">
                    <Swiper
                      // spaceBetween={50}
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
                      {eventPlanImgCont.map((ep, i) => (
                        <SwiperSlide key={i}>
                          <img src={ep} alt="" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
