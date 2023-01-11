import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
body {
    font-family: Helvetica;
  }
  :root {
    --primary: #0000ff;
    --secondary: #5efc8d;
    --light-gray: #cccccc;
  }
      
  h3 {
    margin: 0;
    padding: 0;
  }
  
`

function App() {

  return <>
          <Global/>
          <Shop />;
  </>

}

render(<App />, document.querySelector("#root"));