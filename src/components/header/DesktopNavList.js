const DesktopNavList = function (prop) {
  return (
    <ul className={prop.header__nav_list}>
      <li>
        <a href={"#/"} className={prop.header__nav_link}>
          Pricing
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.header__nav_link}>
          Product
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.header__nav_link}>
          About Us
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.header__nav_link}>
          Careers
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.header__nav_link}>
          Community
        </a>
      </li>
    </ul>
  );
};

export default DesktopNavList;
