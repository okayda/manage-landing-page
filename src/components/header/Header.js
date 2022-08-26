import style from "./Header.module.css";

import logo from "../../images/logo.svg";
import menu from "../../images/icon-hamburger.svg";

const Nav = function () {
  return (
    <header className={style.header}>
      <a href={""} className={style.header__logo_link}>
        <img src={logo} alt="Logo" />
      </a>
      <nav className={style.header__nav_container}>
        <ul className={style.header__nav_list}>
          <li>
            <a href={""} className={style.header__nav_link}>
              Pricing
            </a>
          </li>
          <li>
            <a href={""} className={style.header__nav_link}>
              Product
            </a>
          </li>
          <li>
            <a href={""} className={style.header__nav_link}>
              About Us
            </a>
          </li>
          <li>
            <a href={""} className={style.header__nav_link}>
              Careers
            </a>
          </li>
          <li>
            <a href={""} className={style.header__nav_link}>
              Community
            </a>
          </li>
        </ul>
      </nav>
      <button className={style.header__menu}>
        <img src={menu} />
      </button>
    </header>
  );
};

export default Nav;
