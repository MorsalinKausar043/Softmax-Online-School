import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Error from "./components/error/Error";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default App;