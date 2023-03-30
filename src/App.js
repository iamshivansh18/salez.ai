import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar"
import  Router  from "./router/Router";

function App() {
  return (
    <Div>
      <Sidebar/>
      <Router />
    </Div>
  );
}

export default App;
const Div = styled.div `
display: flex;
flex-direction: column;
`
