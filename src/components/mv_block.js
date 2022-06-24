import React from "react";

function handelItemClass(props) {
  if (props.center) return "block shadow center mx-auto";
  if (props.ml) return "block shadow ml-auto";
  return "block shadow";
}

export function MV_Block(props) {
  return (
    <div className={handelItemClass(props)}>
      <div
        style={{
          transform: "translateY(-45px)",
        }}
      >
        <div className="ico-container">
          {props.img ? (
            <img src={props.img} alt="" />
          ) : (
            <i className={props.ico}></i>
          )}
        </div>
      </div>
      <label htmlFor="">{props.lbl}</label>
      <p className="fs-13 text-center">{props.desc}</p>
    </div>
  );
}
