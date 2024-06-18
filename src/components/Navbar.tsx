import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import logo from "../../public/LOGO.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-con">
        <Image alt="photographers logo" src={logo} />
      </div>
      <nav>
        <div className="socials">
          <InstagramLogo size={32} />
          <FacebookLogo size={32} />
        </div>
        <ul>
          <li>home</li>
          <li>about me</li>
          <li>services</li>
          <li>blog</li>
        </ul>
        <div className="contact-me-btn">
          <span>Contact me</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
