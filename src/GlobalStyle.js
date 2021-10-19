import { createGlobalStyle } from "styled-components";

let twitterColor = "#50b7f5";
let twitterBakcground = "#e6ecf0";

export const GlobalStyle = createGlobalStyle`
*{
 margin: 0;
 padding: 0;
}

body{
  background-color: ${twitterBakcground};
}


`;
