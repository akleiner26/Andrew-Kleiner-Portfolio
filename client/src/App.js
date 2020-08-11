import React, {useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Wrapper from "./components/Wrapper/wrapper"
import Home from "./components/Home/home"
import Contact from "./components/Contact/contact"
import Portfolio from "./components/Portfolio/portfolio"





function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
