import React from "react";

const FooterNav = () => {
  return (
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
  );
};

export default FooterNav;
