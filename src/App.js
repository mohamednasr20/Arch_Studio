import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/home/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Container className="p-0 ">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Container>

        <Footer />
      </Router>
    </>
  );
};

export default App;
