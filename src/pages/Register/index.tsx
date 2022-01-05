import { useCallback, useEffect, useState } from "react";
import { FcFeedback, FcLock, FcRotateToPortrait } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Header, Nav, Footer } from "components";
import * as S from "./styles";
import { Loading } from "components";
import Button from "styles/Button";
import { apiUser } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleRegister = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        await apiUser.register(data);
        toast.success("Cadastro realizado com sucesso!");
        history.push("/login");
      } catch (error) {
        const err = error as AxiosError;
        const msg = err.response?.data.errors.map((i: any) => i.message);
        toast.error(`Falha ao cadastrar! ${msg.join(" ")}`);
      } finally {
        setIsLoading(false);
      }
    },
    [history]
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
            <form method="POST" onSubmit={handleSubmit(handleRegister)}>
              <span>Registre-se</span>
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

export default Register;
