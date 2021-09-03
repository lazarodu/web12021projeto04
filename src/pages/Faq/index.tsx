import { Header, Nav, Footer } from "components";
import { faqs } from "services/data";
import * as S from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Faq = () => {
  return (
    <>
      <Header />
      <Nav />
      <S.Main>
        <ol>
          {faqs.map((item) => (
            <li key={item.id}>
              <AnchorLink href={`#r${item.id}`}>{item.pergunta}</AnchorLink>
            </li>
          ))}
        </ol>
        {faqs.map((item) => (
          <S.Faq key={item.id}>
            <h4 id={`r${item.id}`}>Resposta {item.id}</h4>
            <p>{item.resposta}</p>
            <AnchorLink href="#topo">Voltar</AnchorLink>
          </S.Faq>
        ))}
      </S.Main>
      <Footer />
    </>
  );
};

export default Faq;
