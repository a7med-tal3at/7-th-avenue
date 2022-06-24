import React from "react";

export function Client_Image(props) {
  return (
    <div
      className={`item d-flex justify-content-center align-items-center shadow ${
        props.is_op ? "opc" : ""
      }`}
      style={props.style}
    >
      <img src={props.img} alt="" />
    </div>
  );
}
