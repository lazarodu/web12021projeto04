import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('assets/fonts/Roboto.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }
`

export const colors = {
  blue: "#3c7196",
  green: "#50ba9e",
  bgGreen: "rgba(80, 183, 186, 0.42)",
  shadow: "rgba(0, 0, 0, 0.25)",
  white: "#ffffff",
  black: "#000000",
  gray: "#cccccc"
}