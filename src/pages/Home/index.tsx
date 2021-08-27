import { Header, Nav, Project, Footer } from "components";
import { projects } from "services/data";
import * as S from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <S.Main>
        {projects.map((item) => (
          <Project key={item.id}>
            <h4>{item.autor}</h4>
            <p>{item.site}</p>
          </Project>
        ))}
      </S.Main>
      <Footer />
    </>
  );
};

export default Home;
