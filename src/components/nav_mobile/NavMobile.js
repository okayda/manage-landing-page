import style from "./NavMobile.module.css";

const NavMobile = function () {
  return (
    <div className={style.mobile_nav}>
      <div className={style.mobile_nav__box}>
        <ul className={style.mobile_nav__list}>
          <li>
            <a href="#/">Pricing</a>
          </li>
          <li>
            <a href="#/">Product</a>
          </li>
          <li>
            <a href="#/">About Us</a>
          </li>
          <li>
            <a href="#/">Carreers</a>
          </li>
          <li>
            <a href="#/">Community</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
