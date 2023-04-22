import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./layout/Container";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home customClass="min-height" />} />
            <Route
              path="/company"
              element={
                <React.Fragment>
                  <Container />
                  <Company />
                </React.Fragment>
              }
            />
            <Route
              path="/contact"
              element={
                <React.Fragment>
                  <Container />
                  <Contact />
                </React.Fragment>
              }
            />
            <Route
              path="/newproject"
              element={
                <React.Fragment>
                  <Container />
                  <NewProject />
                </React.Fragment>
              }
            />

            <Route
              path="/projects"
              element={
                <React.Fragment>
                  <Container />
                  <Projects />
                </React.Fragment>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
