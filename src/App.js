import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import {Router} from './Router/Router'


const AppContainer = styled.body`
    width: 1200px;
    margin: 0 auto;
`
function App() {
  return (
    <AppContainer>
    <GlobalStyle/>
    <Router/>
    </AppContainer>
   
  );
}

export default App;
