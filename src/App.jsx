import './styles/App.css'
import Index from './pages/index'
import SpecificProj from './pages/specificproj';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:id" element={<SpecificProj />} />
        </Routes>
    </Router>
  )
}

export default App
