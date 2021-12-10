import { useEffect, useState } from "react";
import { Header, Nav, Project, Footer } from "components";
import { Table } from "styles/GlobalStyle";
import * as S from "./styles";
import { apiProjeto } from "services/data";
import { IProjectData } from "interface/project.interface";

const Home = () => {
  const [projects, setProjects] = useState<IProjectData[]>();

  useEffect(() => {
    async function fetchData() {
      const response = await apiProjeto.index();
      setProjects(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <S.Main>
        {projects &&
          projects.map((item) => (
            <Project key={item.id}>
              <h4>{item.user.email}</h4>
              <p>{item.projeto}</p>
            </Project>
          ))}
      </S.Main>
      <Table></Table>
      <Footer />
    </>
  );
};

export default Home;
