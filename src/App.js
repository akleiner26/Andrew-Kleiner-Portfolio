import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Wrapper from "./components/Wrapper/wrapper"
import Home from "./components/Home/home"
import Contact from "./components/Contact/contact"
import projectsJSON from "./projects.json"



function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} /> */}
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
