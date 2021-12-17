import { useEffect, useState } from "react";
import { Header, Nav, Project, Footer } from "components";
import * as S from "./styles";
import { apiProjeto } from "services/data";
import { IProjectData } from "interface/project.interface";
import { Loading } from "components";

const Home = () => {
  const [projects, setProjects] = useState<IProjectData[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await apiProjeto.index();
      setProjects(response.data);
      setIsLoading(false);
    }
    fetchData();
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
            {projects &&
              projects.map((item) => (
                <Project key={item.id}>
                  <h4>{item.user.email.split("@")[0]}</h4>
                  <p>{item.projeto}</p>
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
