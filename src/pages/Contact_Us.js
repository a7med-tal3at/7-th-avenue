import React from "react";
import { Navbar } from "../components";
import svg_i from "../assets/images/sections/contactus/contact us.svg";
import strings from "../lang/langs";
import "../styles/contact_us/contact_us.css";

export function Contact_Us() {
  return (
    <div className="contact-us">
      <Navbar is_contact_us={true} />
      <div className="cross-section bg-main d-flex justify-content-center align-items-center">
        <div className="form-container shadow w-50 bg-white p-3 br-15 row justify-content-between">
          <div className="col-lg-6">
            <div className="container">
              <h2 className="sec-title">{strings.Contact_us}</h2>
              <p className="fs-13 text-secondary">{strings.contact_us_sm}</p>

              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={strings.emial}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={strings.address}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder={strings.subject}
                    rows="5"
                  ></textarea>
                </div>
                <button className="btn btn-block bg-main text-white fs-13 ">
                  {strings.send}
                </button>
              </form>
            </div>
          </div>
          <div className="form-svg col-lg-6">
            <img src={svg_i} alt="" />
            <ul>
              <li>
                <i className="ti-location-pin"></i>
                <p className="fs-13 text-secondary ml-2">
                  {strings.contact_us_sm}
                </p>
              </li>

              <li>
                <i className="ti-microphone-alt"></i>
                <p className="fs-13 text-secondary ml-2">
                  {strings.contact_us_sm}
                </p>
              </li>

              <li>
                <i className="ti-layout-placeholder"></i>
                <p className="fs-13 text-secondary ml-2">
                  {strings.contact_us_sm}
                </p>
              </li>
            </ul>
          </div>
          <div className="social-media bg-main text-white p-3">
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
        <div className="extra-stl ext-1 shadow"></div>
        <div className="extra-stl ext-2 shadow"></div>
        <div className="extra-stl ext-3 shadow"></div>
        <div className="extra-stl ext-4 shadow"></div>
      </div>
    </div>
  );
}
