import {
  FaFacebookF,
  FaYoutube,
  FaTwitterSquare,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const FooterLinksIcons = function (prop) {
  return (
    <ul className={prop.footer__link_icon}>
      <li>
        <a href={""}>
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href={""}>
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href={""}>
          <FaTwitterSquare />
        </a>
      </li>
      <li>
        <a href={""}>
          <FaPinterest />
        </a>
      </li>
      <li>
        <a href={""}>
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default FooterLinksIcons;
