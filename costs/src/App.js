
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

import Container from "./layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
        <li>Home</li>
        <li>Contato</li>
      </div>

      <Routes>
        <Route path="/" element={<Home customClass="min-height"/>} />
        <Route
          path="/company"
          element={
            <React.Fragment >
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
      </Routes>

      <p>Footer</p>
    </Router>
  );
}

export default App;
