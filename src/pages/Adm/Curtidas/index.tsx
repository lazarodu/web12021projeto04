import { useCallback, useEffect, useState } from "react";
import { Header, Footer, NavAdm } from "components";
import * as S from "./styles";
import { apiCurtir } from "services/data";
import { ICurtirData } from "interface/curtir.interface";
import { Loading } from "components";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { format, parseISO } from "date-fns";

const AdmCurtir = () => {
  const [curtirs, setCurtirs] = useState<ICurtirData[]>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const response = await apiCurtir.index();
    setCurtirs(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <NavAdm />
          <S.Main>
            <table>
              <thead>
                <tr>
                  <th>E-mail</th>
                  <th>Projeto</th>
                  <th>Curtida</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {curtirs &&
                  curtirs.map((item) => (
                    <tr key={item.id}>
                      <td>{item.user?.email}</td>
                      <td>{item.projeto?.projeto}</td>
                      <td>
                        {item.icone === "heart" ? (
                          <BsFillSuitHeartFill />
                        ) : item.icone === "up" ? (
                          <FaThumbsUp />
                        ) : (
                          <FaThumbsDown />
                        )}
                      </td>
                      <td>
                        {item.updated_at &&
                          format(
                            parseISO(item.updated_at),
                            "dd/MM/yyyy HH:mm:ss"
                          )}
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

export default AdmCurtir;
