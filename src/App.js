import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cat from './pages/Cat';
import Dog from './pages/Dog';
import Fish from './pages/Fish';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
      {/* Add any additional components or routes here */}
    </div>
  );
}

export default App;
