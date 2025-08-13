import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection.jsx";
import Work from "./components/work.jsx";
import RecentWork from "./components/RecentWork.jsx";
import AllWork from "./components/AllWork.jsx";
import AboutMe from "./components/AboutMe.jsx";
import WhatIDo from "./components/WhatIDo.jsx";
import Experience from "./components/Experience.jsx";
import ScrollVelocity from "./components/ScrollVelocity.jsx";
import Footer from "./components/Footer.jsx";

function Home() {
  return (
    <>
      <header className="App-header">
        <h1>Saurabh Rawat</h1>
        <ul className="navbar-links">
          <li>
            <a href="#recent-work">Recent Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li>
            <a href="#services">Services</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
      <HeroSection />
      <Work />
      <RecentWork />
      <AboutMe />
      <WhatIDo />
      <Experience />
      <ScrollVelocity
        texts={[
          "* Shopify Design and Development * Frontend Developer * Speed Optimization * Custom Theme Developer * Available for Freelance & Full-Time * Web Development * WordPress Design and Development * React Development * GoHighLevel Development",
          "* GoHighLevel Development * React Development * WordPress Design and Development * Web Development * Available for Freelance & Full-Time * Custom Theme Developer * Speed Optimization * Frontend Developer * Shopify Design and Development",
        ]}
        className="custom-scroll-text"
      />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/all-work"
            render={() => (
              <>
                <AllWork />
                <ScrollVelocity
                  texts={[
                    "Frontend Developer * Shopify Expert * UI/UX Enthusiast * Speed Optimization * Custom Theme Developer * Clean Code Advocate * Available for Freelance & Full-Time",
                    "Frontend Developer * Shopify Expert * UI/UX Enthusiast * Speed Optimization * Custom Theme Developer * Clean Code Advocate * Available for Freelance & Full-Time",
                  ]}
                  className="custom-scroll-text"
                />
                <Footer />
              </>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
