import React from 'react'
import Terminal from '../components/terminal'
import Header from '../components/header'

const AboutMe = () => {
  return (
    <main className='flex items-center justify-center flex-col min-h-screen'>
        <Header />
        <Terminal />
    </main>
  )
}

export default AboutMe