import { useCallback, useEffect, useState } from "react";
import { Header, Footer, NavAdm } from "components";
import * as S from "./styles";
import { apiFaq } from "services/data";
import { IFaqData } from "interface/faq.interface";
import { Loading } from "components";
import Button from "styles/Button";
import { FcAddDatabase } from "react-icons/fc";
import { BsPencilSquare, BsTrash2 } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";

const AdmFaq = () => {
  const [faqs, setFaqs] = useState<IFaqData[]>();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const fetchData = useCallback(async () => {
    const response = await apiFaq.index();
    setFaqs(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(
    async (id: number) => {
      confirmAlert({
        title: "Atenção",
        message: "Tem certeza que deseja apagar o item selecionado?",
        buttons: [
          {
            label: "SIM",
            onClick: async () => {
              setIsLoading(true);
              await apiFaq.destroy(id);
              toast.success("Faq removido!");
              fetchData();
            },
          },
          {
            label: "Não",
            onClick: () => console.log("não"),
          },
        ],
      });
    },
    [fetchData]
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <NavAdm />
          <S.Main>
            <div>
              <Button type="button" onClick={() => history.push("/adm/faq/0")}>
                <FcAddDatabase />
              </Button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>E-mail</th>
                  <th>Pergunta</th>
                  <th>Resposta</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {faqs &&
                  faqs.map((item) => (
                    <tr key={item.id}>
                      <td>{item.user?.email}</td>
                      <td>{item.pergunta}</td>
                      <td>{item.resposta}</td>
                      <td>
                        <Button
                          type="button"
                          bgColor="edit"
                          onClick={() => history.push(`/adm/faq/${item.id}`)}
                        >
                          <BsPencilSquare />
                        </Button>
                      </td>
                      <td>
                        <Button
                          type="button"
                          bgColor="remove"
                          onClick={() => item.id && handleDelete(item.id)}
                        >
                          <BsTrash2 />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AdmFaq;
