import { Header, Nav, Footer, Loading } from "components";
import * as S from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { apiFaq } from "services/data";
import { useState, useEffect } from "react";
import { IFaqData } from "interface/faq.interface";

const Faq = () => {
  const [faqs, setFaqs] = useState<IFaqData[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await apiFaq.index();
      setFaqs(response.data);
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
            <ol>
              {faqs &&
                faqs.map((item) => (
                  <li key={item.id}>
                    <AnchorLink href={`#r${item.id}`}>
                      {item.pergunta}
                    </AnchorLink>
                  </li>
                ))}
            </ol>
            {faqs &&
              faqs.map((item, index) => (
                <S.Faq key={item.id}>
                  <h4 id={`r${item.id}`}>Resposta {index + 1}</h4>
                  <p>{item.resposta}</p>
                  <AnchorLink href="#topo">Voltar</AnchorLink>
                </S.Faq>
              ))}
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Faq;
