import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Wrapper from "./components/Wrapper/wrapper"
import Home from "./components/Home/home"


function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} /> */}
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
