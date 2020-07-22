import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/NavBar";
import Container from "./components/Container";
import Footer from "./components/Footbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Wrapper>
            <Container/>
          </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;