import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  div {
    display: block;
    width: 3rem;
    margin: 0.5rem 0;
  }
  table {
    margin-bottom: 1rem;
    width: 100%;
    border-collapse: collapse;
    tr, td, th {
      border: 1px solid ${colors.black};
      padding: 0.5rem;
    }
  }
`