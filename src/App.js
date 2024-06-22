import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import About from './components/About';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Footer from './components/Footer';
import Company from './components/Company';
import Press from './components/Press';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavTabs />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
