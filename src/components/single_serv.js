import React from "react";

export function Single_Serv(props) {
  return (
    <div className="single-serv d-flex ">
      <div className="serv-lbl-container">
        <label className="fs-13">{props.lbl}</label>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="serv-img br-15 shadow">
            <div className="over-lay br-15"></div>
            <img src={props.img} className="br-15" alt="" />
          </div>
          <div className="flip-card-back br-15 p-3">
            <label className="flip-card-lbl">{props.lbl}</label>
            <p className="fs-13 text-left">{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
