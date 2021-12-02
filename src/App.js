import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Footer from './components/Footer'
import Typo from './components/pages/projects/Typo';
import JournalAppDesign from './components/pages/projects/JournalAppDesign';
import ProtestPlatform from './components/pages/projects/ProtestPlatform';
import NoLikes from './components/pages/projects/NoLikes';
import ModernPotions from './components/pages/projects/ModernPotions';
import RobotPigeonAR from './components/pages/projects/RobotPigeonAR';
import PexelsBrowser from './components/pages/projects/PexelsBrowser';
import Blank from './components/pages/projects/Blank';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
            <Route path="/projects/typo" element={<Typo />}></Route>
            <Route path="/projects/journal-app-design" element={<JournalAppDesign />}></Route>
            <Route path="/projects/protest-platform" element={<ProtestPlatform />}></Route>

            <Route path="/projects/_blank" element={<Blank />}></Route>
            <Route path="/projects/no-likes" element={<NoLikes />}></Route>
            <Route path="/projects/pexels-browser" element={<PexelsBrowser />}></Route>

            <Route path="/projects/robot-pigeon-ar" element={<RobotPigeonAR />}></Route>
            <Route path="/projects/modern-potions" element={<ModernPotions />}></Route>
            
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>

      
    </>
  );
}

export default App;
