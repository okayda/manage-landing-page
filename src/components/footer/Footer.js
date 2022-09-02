import style from "./Footer.module.css";

import Button from "../Button/Button";

import FooterLinksList from "./FooterLinksList";
import LinkListOne from "./LinkListOne";
import LinkListTwo from "./LinkListTwo";

import FooterLinksIcons from "./FooterLinksIcons";
import logo from "../../images/logo.svg";

const Footer = function () {
  return (
    <div className={style.footer}>
      <div className={style.footer__box}>
        <div className={style.footer__form_container}>
          <form className={style.footer__form}>
            <input type="text" placeholder="Updates in your inbox..." />
            <Button>GO</Button>
          </form>
        </div>

        <div className={style.footer__list_container}>
          <FooterLinksList footer__link_list={style.footer__link_list}>
            <LinkListOne />
          </FooterLinksList>

          <FooterLinksList footer__link_list={style.footer__link_list}>
            <LinkListTwo />
          </FooterLinksList>
        </div>

        <div className={style.footer__icons_container}>
          <FooterLinksIcons footer__link_icon={style.footer__link_icon} />
        </div>

        <a href="#/" className={style.footer__logo}>
          <img src={logo} alt="Logo" />
        </a>

        <p className={style.footer__copyright}>
          Copyright 2022. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
