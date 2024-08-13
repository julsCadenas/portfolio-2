import './App.css'
import Header from './components/header'
import Juls from './components/juls'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {

  return (
    <main className='bg-black h-screen font-poppins'>
      <Header />
      <Juls />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
