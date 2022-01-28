import { useAuth } from "hooks/auth";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { isAfter, parseISO } from "date-fns";

const Nav = () => {
  const { token, expiresAt } = useAuth();
  return (
    <S.Nav>
      <input id="menu-toggle" type="checkbox" />
      <label htmlFor="menu-toggle">
        <div className="menu-hamburger">
          <span className="hamburger"></span>
        </div>
      </label>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <S.LoginReg>
        <ul>
          {token && expiresAt && isAfter(parseISO(expiresAt), new Date()) ? (
            <li>
              <Link to="/adm">Administrar</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/register">Registrar</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </S.LoginReg>
    </S.Nav>
  );
};

export default Nav;
