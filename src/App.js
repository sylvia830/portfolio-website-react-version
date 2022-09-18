import React from "react";
import NavbarComp from "./NavbarComp";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";  
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarComp />
		  <Routes>
		    <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={ <About />} />
        <Route path="/experience" element={<Experience />}/>
		    <Route path="/projects" element={<Projects />}/>
		    <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
