import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { hideShowJoinUsForm } from "../utils/hideShowJoinUsForm";
import strings from "../lang/langs";
import tr from "../assets/images/icons/translate-language-translator-512.webp";
import so from "../assets/images/flags/download.png";
import br from "../assets/images/flags/download (1).png";

export default function Sub_Nav(props) {
  useEffect(() => {
    strings.setLanguage(localStorage.getItem("lang"));
  }, []);
  return (
    <div className={props.with_line ? "w-75" : "w-100"}>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className={
            props.with_line
              ? "navbar-nav m-auto"
              : "navbar-nav w-100 justify-content-between"
          }
        >
          {props.with_line ? (
            <li className="nav-item">
              <span className="line"></span>
            </li>
          ) : (
            ""
          )}
          <li className="nav-item ">
            <NavLink
              className={`nav-link ${props.with_line ? "px-3" : ""} fs-13`}
              to="/"
            >
              {strings.Home}
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              className={`nav-link ${props.with_line ? "px-3" : ""} fs-13`}
              to="/services"
            >
              {strings.Services}
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              className={`nav-link ${props.with_line ? "px-3" : ""} fs-13`}
              to="/works"
            >
              {strings.Works}
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              className={`nav-link ${props.with_line ? "px-3" : ""} fs-13`}
              to="/contact_us"
            >
              {strings.Contact_us}
            </NavLink>
          </li>

          <li>
            <div className="flag p-2">
              <h5 className="p-0 fs-13" style={{
                marginTop:"2px"
              }}>{localStorage.getItem("lang").toUpperCase()}</h5>
              <div className="flags">
                <div
                  className="one-flag"
                  onClick={() => {
                    localStorage.setItem("lang", "ar");
                    window.location.reload();
                  }}
                >
                  <img src={so} alt="" />
                  <p>العربية</p>
                </div>
                <div
                  className="one-flag"
                  onClick={() => {
                    localStorage.setItem("lang", "en");
                    window.location.reload();
                  }}
                >
                  <img src={br} alt="" />
                  <p>English</p>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item ser-par py-2 ml-auto">
            <i className="ti-search" id="search-ico"></i>
          </li>

          <li className="nav-item j-in">
            <p className="pt-2 fs-13 text-secondary">
              {strings.you_cont_cre}
              <a href="!#" onClick={hideShowJoinUsForm}>
                {strings.join}
              </a>
            </p>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
    <input
      className="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button
      className="btn btn-outline-success my-2 my-sm-0"
      type="submit"
    >
      Search
    </button>
  </form> */}
      </div>
    </div>
  );
}
