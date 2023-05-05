import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import ProjectGallery from "./components/pages/ProjectGallery";
import Contact from "./components/pages/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div id="container">
      <Router basename="my-portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project-gallery/*" element={<ProjectGallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

/* <Footer/> */

export default App;
