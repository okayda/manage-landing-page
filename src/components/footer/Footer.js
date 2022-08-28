import style from "./Footer.module.css";

import FooterLinks from "./FooterLinks";
import FooterLinksIcons from "./FooterLinksIcons";
import logo from "../../images/logo.svg";

const Footer = function () {
  return (
    <footer>
      <div>
        <form></form>
      </div>

      <div>
        <FooterLinks />
      </div>

      <div>
        <FooterLinksIcons />
      </div>

      <img src={logo} alt="Logo" />

      <p>Copyright 2022. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
