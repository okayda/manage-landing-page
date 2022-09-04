import style from "./Footer.module.css";

import Form from "./FooterForm";
import FooterLinksList from "./FooterLinksList";
import LinkListOne from "./LinkListOne";
import LinkListTwo from "./LinkListTwo";
import FooterLinksIcons from "./FooterLinksIcons";

import logo from "../../images/logo.svg";

const Footer = function () {
  return (
    <div className={style.footer}>
      <div className={style.footer__box}>
        <Form
          footer__form_container={style.footer__form_container}
          footer__form={style.footer__form}
        />

        <div className={style.footer__list_container}>
          <FooterLinksList footer__link_list={style.footer__link_list}>
            <LinkListOne footer__link={style.footer__link} />
          </FooterLinksList>

          <FooterLinksList footer__link_list={style.footer__link_list}>
            <LinkListTwo footer__link={style.footer__link} />
          </FooterLinksList>
        </div>

        <div className={style.footer__icons_container}>
          <FooterLinksIcons
            footer__link_icons={style.footer__link_icons}
            footer__link_icon={style.footer__link_icon}
          />
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
