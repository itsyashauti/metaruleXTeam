import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './pages/Services';
import CustomCursor from './components/CustomCursor/CustomCursor';

function App() {
  return (
    <ReactLenis root>
      <Router>
        <div className="app-container">
          <CustomCursor />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Services />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
