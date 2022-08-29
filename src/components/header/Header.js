import style from "./Header.module.css";

import logo from "../../images/logo.svg";
import menu from "../../images/icon-hamburger.svg";

import DesktopNavList from "./DesktopNavList";

const Nav = function () {
  return (
    <header className={style.header}>
      <a href={""} className={style.header__logo_link}>
        <img src={logo} alt="Logo" />
      </a>

      <nav className={style.header__nav_container}>
        <DesktopNavList
          header__nav_list={style.header__nav_list}
          header__nav_link={style.header__nav_link}
        />
      </nav>

      <button className={style.header__menu}>
        <img src={menu} />
      </button>
    </header>
  );
};

export default Nav;
