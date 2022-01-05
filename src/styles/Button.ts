import { ButtonProps } from "interface/style.interface";
import styled, { css } from "styled-components";
import { colors } from "./GlobalStyle";

const colorVariations = {
  default: css`
    background-color: ${colors.blue};
    outline: 0.2rem outset ${colors.blue};
  `,
  edit: css`
    background-color: ${colors.green};
    outline: 0.2rem outset ${colors.green};
  `,
  remove: css`
    background-color: ${colors.red};
    outline: 0.2rem outset ${colors.red};
  `
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  margin: auto;
  border: 0;
  border-radius: 0.3rem;
  color: ${colors.white};
  font-weight: bold;
  padding: 0.3rem;
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;
  }

  ${(props) => colorVariations[props.bgColor || "default"]}
`

export default Button;