import './styles/App.css'
import Index from './pages/index';
import SpecificProj from './pages/SpecificProj';
import AboutMe from './pages/AboutMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:id" element={<SpecificProj />} />
            <Route path="/about-me" element={<AboutMe />} />
        </Routes>
    </Router>
  )
}

export default App
