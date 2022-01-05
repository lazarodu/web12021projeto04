import { useAuth } from "hooks/auth";
import { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./styles";

const NavAdm = () => {
  const { signOut } = useAuth();
  const history = useHistory();

  const sair = useCallback(async () => {
    try {
      await signOut();
      toast.success("Até a próxima!!!");
      history.push("/");
    } catch (error) {
      toast.error("Falha ao sair!");
    }
  }, [history, signOut]);

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
          <Link to="/adm">Projeto</Link>
        </li>
        <li>
          <Link to="/adm/faq">Faq</Link>
        </li>
        <li>
          <Link to="/adm/curtidas">Curtidas</Link>
        </li>
      </ul>
      <S.LoginReg>
        <ul>
          <li>
            <button type="button" onClick={sair}>
              Sair
            </button>
          </li>
        </ul>
      </S.LoginReg>
    </S.Nav>
  );
};

export default NavAdm;
