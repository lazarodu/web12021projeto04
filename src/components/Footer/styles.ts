import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Footer = styled.footer`
  border: 0.5rem solid ${colors.blue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    width: 50%;
    text-align: center;
  }
  picture {
    width: 50%;
    display: flex;
    align-items: center;
    img {
      @media (max-width: 768px) {
        height: 60px;
      }
      @media (max-width: 425px) {
        height: 40px;
      }
    }
  }
`

export const A = styled.a`
  margin: 0 auto;
`;
