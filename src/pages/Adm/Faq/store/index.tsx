import { useCallback, useEffect, useState } from "react";
import { Header, Footer, NavAdm } from "components";
import * as S from "./styles";
import { Loading } from "components";
import Button from "styles/Button";
import { FcDatabase, FcUndo } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import { apiFaq } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IFaqData } from "interface/faq.interface";

const FaqStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [faqs, setFaqs] = useState<IFaqData>();
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleStore = useCallback(
    async (data: IFaqData) => {
      try {
        setIsLoading(true);
        if (Number(id) > 0 && faqs) {
          await apiFaq.update(Number(id), faqs);
          toast.warning("Faq atualizado com sucesso!");
        } else {
          await apiFaq.store(data);
          toast.success("Cadastro de faq realizado!");
        }
        history.push("/adm/faq");
      } catch (error) {
        const err = error as AxiosError;
        const msg = err.response?.data.errors.map((i: any) => i.message);
        toast.error(`Falha ao cadastrar o faz! ${msg.join(" ")}`);
      } finally {
        setIsLoading(false);
      }
    },
    [history, id, faqs]
  );

  const handleChange = useCallback(
    (e) => {
      setFaqs({ ...faqs, [e.target.name]: e.target.value });
    },
    [faqs]
  );

  useEffect(() => {
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiFaq.show(id);
          setFaqs(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(Number(id));
    }
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <NavAdm />
          <S.Main>
            <form method="POST" onSubmit={handleSubmit(handleStore)}>
              <Link to="/adm/faq">
                <FcUndo /> Voltar
              </Link>
              <div>
                <label htmlFor="perg">Pergunta: </label>
                <input
                  type="text"
                  id="perg"
                  placeholder="Escreva a pergunta"
                  required
                  {...register("pergunta")}
                  defaultValue={faqs?.pergunta}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="resp">Resposta: </label>
                <textarea
                  id="resp"
                  placeholder="Escreva a resposta"
                  required
                  {...register("resposta")}
                  value={faqs?.resposta}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit">
                Enviar <FcDatabase />
              </Button>
            </form>
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default FaqStore;
