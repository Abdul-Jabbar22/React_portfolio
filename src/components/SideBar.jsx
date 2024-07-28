import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="leftSideBar sideBar top-1/4 left-0 fixed flex flex-col items-start justify-start gap-7 p-4">
      <div className="icon-container flex flex-col items-center justify-start cursor-pointer relative mt-2">
        <a
          href="https://github.com/Abdul-Jabbar22?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <span>Github</span>
        </a>
      </div>
      <div className="icon-container flex flex-col items-center justify-start cursor-pointer relative mt-2">
        <a
          href="https://www.linkedin.com/in/abdul-jabbar-b7b2b3249"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="icon-container flex flex-col items-center justify-start cursor-pointer relative mt-2">
        <a
          href="https://wa.me/+923017376974"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          <span>WhatsApp</span>
        </a>
      </div>
      <div className="icon-container flex flex-col items-center justify-start cursor-pointer relative mt-2">
        <a href="mailto:your-email@example.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
