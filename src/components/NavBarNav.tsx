import React from "react";
import Socials from "./Socials";
import { List } from "@phosphor-icons/react/dist/ssr";

const NavBarNav = () => {
  return (
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
      <List size={42} />
    </nav>
  );
};

export default NavBarNav;
