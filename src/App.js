import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Aboutme from "./pages/Aboutme";
import Prueba from "./pages/Prueba";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/welcome">Welcome</Link>
              </li>
              <li>
                <Link className="link" to="/contact">Contacto</Link>
              </li>
              <li>
                <Link className="link" to="/about-me">About Me</Link>
              </li>
              <li>
                <Link className="link" to="/prueba">Prueba</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/welcome" element = {<Welcome name ="Roberto"/>} />
            <Route path="/contact" element = {<Contact/>}/>
            <Route path="/about-me" element = {<Aboutme />}/>
            <Route path="/prueba/:name" element ={<Prueba />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
