import React from "react";
import Socials from "./Socials";
import TextLine from "./TextLine";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container footer">
        <div className="content-con">
          <div className="socials-con">
            <Socials />
          </div>
          <div className="logo-con">
            <TextLine />
            <Image
              src="/logo.png"
              alt="Photographers logo"
              width={100}
              height={30}
            />
            <TextLine />
          </div>
          <nav>
            <ul>
              <li className="footer-link">
                home <span>|</span>
              </li>

              <li className="footer-link">
                gallery <span>|</span>
              </li>

              <li className="footer-link">
                blog <span>|</span>
              </li>

              <li className="footer-link">
                contact
                <span>|</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="copyright-con">
          <p>Copyright © 2024 Lanre Ailegbe. All rights reserved</p>
          <p>Designed and coded by Michal Kocik | Kdev</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
