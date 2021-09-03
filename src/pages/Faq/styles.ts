import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  ol {
    margin: 1rem;
    li {
      margin: 2rem 0;
      a {
        text-decoration: none;
        color: ${colors.black};
      }
      &:hover {
        background-color: ${colors.gray};
      }
    }
  }
`
export const Faq = styled.div`
  height: 100vh;
  h4 {
    margin: 2rem 0;
  }
  a {
    display: block;
    text-decoration: none;
    color: ${colors.black};
    margin-top: 2rem;
    &:hover {
      background-color: ${colors.gray};
    }
  }
`