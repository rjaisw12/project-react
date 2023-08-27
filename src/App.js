import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import LearnChinese from './components/projects/LearnChinese';


function ScrollToTop() {
  let location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({behavior: "smooth"});
      }
    } else {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
  }, [location]);

  return null; // Ce composant ne renvoie rien pour le rendu
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ajoutez cette ligne */}
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={
            <React.Fragment>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
            </React.Fragment>
          } />
          <Route path='/learn-chinese' element={<LearnChinese />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
