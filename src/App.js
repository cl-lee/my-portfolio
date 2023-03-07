import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router basename="my-portfolio">
      <div>
        <Header/>
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="project-gallery/*" element={<ProjectGallery />} />
          <Route path="contact" element={<Contact />} />
          {/* Define a route that will have descendant routes */}
          {/* <Route path="contact/*" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

