import { useCallback, useEffect, useState } from "react";
import { FcFeedback, FcLock, FcRotateToPortrait } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Header, Nav, Footer } from "components";
import * as S from "./styles";
import { Loading } from "components";
import Button from "styles/Button";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useAuth } from "hooks/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();
  const history = useHistory();

  const handleLogin = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        await signIn(data);
        toast.success("Login realizado com sucesso!");
        history.push("/");
      } catch (error) {
        const err = error as AxiosError;
        const msg = err.response?.data;
        toast.error(`Falha ao fazer o login! ${msg}`);
      } finally {
        setIsLoading(false);
      }
    },
    [signIn, history]
  );

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Nav />
          <S.Main>
            <form method="POST" onSubmit={handleSubmit(handleLogin)}>
              <span>Login</span>
              <div>
                <FcFeedback />
                <input
                  type="email"
                  placeholder="e-mail"
                  required
                  {...register("email")}
                />
              </div>
              <div>
                <FcLock />
                <input
                  type="password"
                  placeholder="senha"
                  required
                  {...register("password")}
                />
              </div>
              <Button type="submit">
                Enviar <FcRotateToPortrait />
              </Button>
            </form>
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Login;
