import './styles/App.css'
import Index from './pages/index';
import SpecificProj from './pages/specificproj';
import AboutMe from './pages/aboutme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <Router>
        <Analytics />
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:id" element={<SpecificProj />} />
            <Route path="/about-me" element={<AboutMe />} />
        </Routes>
    </Router>
  )
}

export default App