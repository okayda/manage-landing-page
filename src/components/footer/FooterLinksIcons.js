import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const FooterLinksIcons = function (prop) {
  return (
    <ul className={prop.footer__link_icons}>
      <li>
        <a href={"#/"} className={prop.footer__link_icon}>
          <FaFacebookSquare />
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link_icon}>
          <FaYoutubeSquare />
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link_icon}>
          <FaTwitterSquare />
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link_icon}>
          <FaPinterestSquare />
        </a>
      </li>
      <li>
        <a href={"#/"} className={prop.footer__link_icon}>
          <FaInstagramSquare />
        </a>
      </li>
    </ul>
  );
};

export default FooterLinksIcons;
