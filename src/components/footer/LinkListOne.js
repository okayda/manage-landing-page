const LinkListOne = function (prop) {
  return (
    <>
      <li>
        <a href={"#/"} className={prop.footer__link}>
          Home
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link}>
          Pricing
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link}>
          Products
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link}>
          About Us
        </a>
      </li>
    </>
  );
};

export default LinkListOne;
