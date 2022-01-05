import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    background-color: ${colors.blue};
    padding: 0.4rem;
    border: 1rem solid ${colors.blue};
    border-radius: 1rem;
    span {
      display: block;
      text-align: center;
      color: ${colors.white};
    }
    div {
      display: flex;
      margin: 1rem 0;
      border: 0.2rem solid ${colors.white};
      border-radius: 0.5rem;
      input {
        padding: 0.4rem;
        border-radius: 0.5rem;
      }
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`