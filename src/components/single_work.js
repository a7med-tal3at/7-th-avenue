import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import strings from "../lang/langs";
export function Single_Work(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div className="singel-work">
      <div className={loading ? "skeleton shadow" : "d-none"}></div>

      <div className="work-img-cont br-15 d-flex justify-content-center align-items-center shadow">
        <div className="click-to-more text-center">
          <h5 className="mt-5">{props.lbl}</h5>
          <p className="fs-13">{strings.we_happy}</p>
          <NavLink
            className="btn bg-main text-white"
            onClick={() =>
              localStorage.setItem("curr_work", JSON.stringify(props.idx))
            }
            to={`/works`}
          >
            Show More
          </NavLink>
        </div>

        <img src={props.img} className={loading ? "d-none" : "shadow"} alt="" />
      </div>

      <span className="w-line"></span>
      <label>{props.lbl}</label>
    </div>
  );
}
