import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cat from './pages/Cat';
import Dog from './pages/Dog';
import Fish from './pages/Fish';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/d279-prototype" element={<Home />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      
      {/* Add any additional components or routes here */}
    </div>
  );
}

export default App;
