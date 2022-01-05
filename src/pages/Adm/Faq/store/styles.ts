import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  form {
    margin: 1rem 0;
    padding: 0.4rem;
    a {
      background-color: ${colors.blue};
      border-radius: 0.3rem;
      color: ${colors.white};
      font-weight: bold;
      text-decoration: none;
      padding: 0.5rem;
      outline: 0.2rem outset ${colors.blue};
    }
    div {
      margin: 1rem 0;
      display: grid;
      grid-template-columns: 5rem auto;
      textarea {
        padding: 0.4rem;
        border-radius: 0.5rem;
        height: 10rem;
      }
      input {
        padding: 0.4rem;
        border-radius: 0.5rem;
      }
    }
  }
`