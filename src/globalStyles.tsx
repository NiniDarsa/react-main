// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before {
    margin: 0;
    padding: 0;
  }

  #root{
    width: 100vw;
    height: 100vh;
    background-color: #1B1B1B;
    overflow-x:hidden ;
  }
  body{
    font-family: "Roboto", sans-serif;
  }
//Scrollbar
::-webkit-scrollbar-track {
background:#1B1B1B;
}


::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar:horizontal {
  display: none;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#151515, #fad24d, #151515);
  border-radius: 20px;
}
`;

export default GlobalStyle;
