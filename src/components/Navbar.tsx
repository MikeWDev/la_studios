import Image from "next/image";
import React from "react";
import logo from "../../public/LOGO.png";
import Socials from "./Socials";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-con">
        <Image alt="photographers logo" src={logo} />
      </div>
      <nav>
        <Socials />
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
