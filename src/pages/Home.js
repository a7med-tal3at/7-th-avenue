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
  return <h1> vals 1 </h1>;
}
