import React from "react";
import strings from "../lang/langs";
import { HashLink as Link } from "react-router-hash-link";
export function SecondaryNav(props) {
  return (
    <div className="secondry-nav">
      <ul>
        <li>
          <Link className="text-secondary" to={props.link1}>
            {strings.events}
          </Link>
        </li>
        <li>
          <Link className="text-secondary" to={props.link2}>
            {strings.clients}
          </Link>
        </li>
        <li>
          <Link className="text-secondary" to={props.link3}>
            {strings.Services}
          </Link>
        </li>
        <li>
          <Link className="text-secondary" to={props.link4}>
            {strings.vision_mis}
          </Link>
        </li>
      </ul>
    </div>
  );
}
