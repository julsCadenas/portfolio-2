import React from 'react'
import Terminal from '../components/terminal'
import Header from '../components/header'
import Contact from '../components/contact'

const AboutMe = () => {
  return (
    <main className='flex items-center justify-center flex-col min-h-screen'>
        <Header />
        <Terminal />
        {/* <Contact /> */}
    </main>
  )
}

export default AboutMe