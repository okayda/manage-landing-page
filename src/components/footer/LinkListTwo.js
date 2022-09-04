const LinkListTwo = function (prop) {
  return (
    <>
      <li>
        <a href={"#/"} className={prop.footer__link}>
          Careers
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link}>
          Community
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link}>
          Privacy Policy
        </a>
      </li>
    </>
  );
};

export default LinkListTwo;
