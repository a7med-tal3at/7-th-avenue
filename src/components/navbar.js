import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Sub_Nav from "./sub_nav";
import logo from "../assets/images/logos/7th_Avenue_Logo.png";
import p_logo from "../assets/images/logos/Group 100.png";
import "../styles/App.css";
import "../styles/navbar.css";
import "../styles/join_us_form.css";
import { hideShowJoinUsForm } from "../utils/hideShowJoinUsForm";
import strings from "../lang/langs";

export function Navbar(props) {
  useEffect(() => {
    strings.setLanguage(localStorage.getItem("lang"));
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${
          props.is_contact_us ? "bg-main" : "bg-white"
        } justify-content-between`}
        style={{
          zIndex: "11",
        }}
      >
        <div className="container">
          <NavLink className="navbar-brand w-25 d-flex" to="/" exact="true">
            <img
              src={props.is_contact_us ? p_logo : logo}
              alt="7th-avenue-brand"
              style={
                props.is_contact_us
                  ? {
                      width: "95px",
                    }
                  : {}
              }
            />
            {props.is_contact_us ? (
              ""
            ) : (
              <p className="text-center pt-2 fs-13 text-secondary j-out ml-3">
                {strings.you_cont_cre}
                <a href="!#" onClick={hideShowJoinUsForm}>
                  {strings.join}
                </a>
              </p>
            )}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Sub_Nav with_line={true} />
        </div>
      </nav>

      <div className="join-us-form d-none">
        <div className="row">
          <div className="join-from-soc col-lg-6 bg-main text-white">
            <div className="container p-5">
              <div className="logo">
                <img src={p_logo} alt="" />
              </div>

              <div className="logo-2 text-center mt-5">
                <img src={p_logo} alt="" />
              </div>
            </div>

            <div className="text-center">
              <p className="fs-13">{strings.you_want}</p>
              <h4
                style={{
                  fontSize: "17px",
                }}
              >
                {strings.you_cont_cre}
              </h4>
              <div className="c-us d-flex justify-content-between w-75">
                <ul>
                  <li>
                    <i className="ti-location-pin"></i>
                    <p className="fs-13 ml-2">{strings.contact_us_sm}</p>
                  </li>

                  <li>
                    <i className="ti-microphone-alt"></i>
                    <p className="fs-13 ml-2">{strings.contact_us_sm}</p>
                  </li>

                  <li>
                    <i className="ti-layout-placeholder"></i>
                    <p className="fs-13 ml-2">{strings.contact_us_sm}</p>
                  </li>
                </ul>

                <ul>
                  <li className="my-2">
                    <i className="ti-facebook text-white"></i>
                  </li>
                  <li className="my-2">
                    <i className="ti-twitter-alt text-white"></i>
                  </li>
                  <li className="my-2">
                    <i className="ti-linkedin text-white"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6" style={{ height: "100vh" }}>
            <div className="container p-4">
              <i
                className="ti-close d-block text-right"
                onClick={hideShowJoinUsForm}
              ></i>
              <div className="text-center mb-5">
                <img
                  src={logo}
                  style={{ width: "50px", height: "50px" }}
                  className="juf-m mb-5 d-none mx-auto"
                />
                <h4 className="mb-3">{strings.you_cont_cre}</h4>
                <p>{strings.fill}</p>
              </div>
              <form>
                <div className="d-flex h-100">
                  <div className="form-group pr-3">
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      placeholder={strings.fanme}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inputText4"
                      placeholder={strings.lname}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputCV"
                    placeholder={strings.cv}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputSpecialtiy"
                    placeholder={strings.specialtiy}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group" style={{ paddingLeft: "5px" }}>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAge"
                      placeholder={strings.age}
                    />
                  </div>
                  <div className="rad-cont pl-4 pt-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="mail"
                      />
                      <label
                        className="form-check-label fs-13 text-secondary"
                        htmlFor="mail"
                      >
                        {strings.mail}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="femail"
                      />
                      <label
                        className="form-check-label fs-13 text-secondary"
                        htmlFor="femail"
                      >
                        {strings.femail}
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-block bg-main text-white fs-13"
                >
                  {strings.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
