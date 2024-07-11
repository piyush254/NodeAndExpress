import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Nav.css";
function Footer() {
  return (
    <>
      <footer>
        <div>
          <ul>
            <li>
            <CgFacebook  />

            </li>
            <li>
            <FaFacebookMessenger />

            </li>
            <li>
            <FaLinkedin />

            </li>
            <li>
            <FaWhatsapp />
            </li>
          </ul>
          
            
        </div>
      </footer>
    </>
  );
}

export default Footer;
