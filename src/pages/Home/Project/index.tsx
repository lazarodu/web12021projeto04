import { useCallback, useEffect, useState } from "react";
import { Header, Nav, Project, Footer } from "components";
import * as S from "./styles";
import { apiCurtir, apiProjeto } from "services/data";
import { IProjectData } from "interface/project.interface";
import { Loading } from "components";
import { useAuth } from "hooks/auth";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { ICurtido } from "interface/curtir.interface";
import { toast } from "react-toastify";
import { parseISO, isAfter } from "date-fns";

const Home = () => {
  const [projects, setProjects] = useState<IProjectData[]>();
  const [isLoading, setIsLoading] = useState(true);
  const { user, expiresAt } = useAuth();

  const fetchData = useCallback(async () => {
    const response = await apiProjeto.index();
    const data = response.data.map((item) => ({
      id: item.id,
      nome: item.user?.email.split("@")[0],
      projeto: item.projeto,
      curtido:
        user && item.projetoCurtirs?.find((item) => item.user_id === user.id),
    }));
    setProjects(data);
    setIsLoading(false);
  }, [user]);

  const handleCurtir = useCallback(
    async (projeto: ICurtido, icon: string) => {
      try {
        try {
          setIsLoading(true);
          if (projeto.curtido === undefined) {
            await apiCurtir.store({ projeto_id: projeto.id, icone: icon });
            toast.success("Projeto Curtido!!!");
          } else if (projeto.curtido.icone === icon) {
            await apiCurtir.destroy(projeto.curtido.id);
            toast.error("Projeto Descurtido!!!");
          } else {
            await apiCurtir.update(projeto.curtido.id, {
              projeto_id: projeto.id,
              icone: icon,
            });
            toast.warning("Projeto Curtido Alterado!!!");
          }
          fetchData();
        } catch (error) {
          toast.error(`Falha ao curtir!!! ${error}`);
        } finally {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [fetchData]
  );

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
          <Nav />
          <S.Main>
            {projects &&
              projects.map((item) => (
                <Project key={item.id}>
                  <h4>{item.nome}</h4>
                  <p>{item.projeto}</p>
                  {user && isAfter(parseISO(expiresAt), new Date()) && (
                    <div>
                      <S.Button
                        type="button"
                        color={
                          item.curtido?.icone === "heart" ? "curtir" : "default"
                        }
                        onClick={() => {
                          return handleCurtir(item, "heart");
                        }}
                      >
                        {item.curtido?.icone === "heart" ? (
                          <BsFillSuitHeartFill />
                        ) : (
                          <BsSuitHeart />
                        )}
                      </S.Button>
                      <S.Button
                        type="button"
                        color={
                          item.curtido?.icone === "up" ? "curtir" : "default"
                        }
                        onClick={() => {
                          return handleCurtir(item, "up");
                        }}
                      >
                        {item.curtido?.icone === "up" ? (
                          <FaThumbsUp />
                        ) : (
                          <FaRegThumbsUp />
                        )}
                      </S.Button>
                      <S.Button
                        type="button"
                        color={
                          item.curtido?.icone === "down" ? "curtir" : "default"
                        }
                        onClick={() => {
                          return handleCurtir(item, "down");
                        }}
                      >
                        {item.curtido?.icone === "down" ? (
                          <FaThumbsDown />
                        ) : (
                          <FaRegThumbsDown />
                        )}
                      </S.Button>
                    </div>
                  )}
                </Project>
              ))}
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
