import * as S from "./styles";
import instaFace from "assets/img/instaFace.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.Footer>
      <div>&copy; CopyLeft</div>
      <picture>
        <Link to="https://facebook.com" target="_blank">
          <img src={instaFace} alt="Instagram e Facebook" />
        </Link>
      </picture>
    </S.Footer>
  );
};

export default Footer;
