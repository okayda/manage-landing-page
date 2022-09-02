import { useState } from "react";
import ReactDOM from "react-dom";
import style from "./Header.module.css";

import logo from "../../images/logo.svg";
import menu from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

import Overlay from "../overlay/Overlay";
import NavMobile from "../nav_mobile/NavMobile";

import DesktopNavList from "./DesktopNavList";

const Nav = function () {
  const url = "";

  const [activeNav, setNav] = useState(false);

  const closeNavMobile = function () {
    setNav(true);
    document.body.classList.add("active-nav");
  };

  const menuNavMobile = function () {
    setNav(false);
    document.body.classList.remove("active-nav");
  };

  const navMenuToggle = function () {
    if (activeNav)
      return (
        <button className={style.header__menu} onClick={menuNavMobile}>
          <img src={close} alt="" />
        </button>
      );

    return (
      <button className={style.header__menu} onClick={closeNavMobile}>
        <img src={menu} alt="" />
      </button>
    );
  };

  return (
    <div className={style.header}>
      <a href={url} className={style.header__logo_link}>
        <img src={logo} alt="Logo" />
      </a>
      <nav className={style.header__nav_container}>
        <DesktopNavList
          header__nav_list={style.header__nav_list}
          header__nav_link={style.header__nav_link}
        />
      </nav>

      {navMenuToggle()}

      {activeNav &&
        ReactDOM.createPortal(
          <Overlay />,
          document.querySelector(".overlay-container")
        )}
      {activeNav &&
        ReactDOM.createPortal(
          <NavMobile />,
          document.querySelector(".nav_mobile-container")
        )}
    </div>
  );
};

export default Nav;
