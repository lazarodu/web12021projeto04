import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  background-color: ${colors.green};
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: auto;
  }
`