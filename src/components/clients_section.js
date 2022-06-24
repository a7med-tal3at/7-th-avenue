import React from "react";
import { Client_Image } from "./client_image";

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
import cli_img13 from "../assets/images/logos/Clients Logo-13.png";
import cli_img14 from "../assets/images/logos/Clients Logo-14.png";

export function Clients_Section() {
  return (
    <>
      <div className="left-blocks grid-container">
        <Client_Image is_op={true} img={cli_img1} />
        <Client_Image img={cli_img2} />
        <Client_Image img={cli_img3} />
        <Client_Image is_op={true} img={""} />
        <Client_Image is_op={true} img={""} />
        <Client_Image is_op={true} img={""} />
        <Client_Image img={cli_img7} />
        <Client_Image img={cli_img8} />
        <Client_Image is_op={true} img={cli_img9} />
        <Client_Image is_op={true} img={""} />
        <Client_Image is_op={true} img={cli_img11} />
        <Client_Image is_op={true} img={cli_img12} />
      </div>
      <div className="gap"></div>
      <div className="right-blocks grid-container">
        <Client_Image img={cli_img13} />
        <Client_Image img={cli_img14} />
        <Client_Image is_op={true} img={cli_img1} />
        <Client_Image is_op={true} img={""} />
        <Client_Image is_op={true} img={""} />
        <Client_Image is_op={true} img={""} />
        <Client_Image is_op={true} img={cli_img5} />

        <Client_Image img={cli_img6} />
        <Client_Image img={cli_img4} />
        <Client_Image is_op={true} img={cli_img8} />
        <Client_Image is_op={true} img={cli_img9} />
        <Client_Image is_op={true} img={""} />
      </div>
    </>
  );
}
