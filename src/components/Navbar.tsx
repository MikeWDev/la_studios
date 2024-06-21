import Image from "next/image";
import React from "react";
import logo from "../../public/LOGO.png";

import NavBarNav from "./NavBarNav";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-con">
        <Image alt="photographers logo" src={logo} />
      </div>
      <NavBarNav />
    </div>
  );
};

export default Navbar;
