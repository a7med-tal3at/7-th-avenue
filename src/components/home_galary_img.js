import React, { useEffect, useState } from "react";

export function HomeGalaryImg(props) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="m-1 h-i-load" style={props.stl}>
      {loading ? (
        <div
          className="load"
          style={{
            width: `${props.w}px`,
            height: `${props.h}px`,
          }}
        ></div>
      ) : (
        ""
      )}

      <img
        src={props.img}
        className={`comp_gal_img shadow rounded ${loading ? "d-none" : ""}`}
        alt="comp_gal_img1"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
