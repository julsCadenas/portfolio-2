import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Contact from '../components/contact';
import newjeans from '../images/newjeans.jpg';

const Me = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const originalText = "whoami";

  const startAnimation = () => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= originalText.length) {
        setDisplayText(originalText.substring(0, index));
        index++;
      }

      if (index > originalText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    startAnimation();
    const cursorIntervalId = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorIntervalId);
  }, []);

  return (
    <main className='bg-black font-poppins min-h-screen'>
      <Header />
      
      <div className='min-w-full flex justify-center min-h-screen'>

        <section className='text-customWhite flex flex-col justify-center max-w-5xl px-10 gap-5'>
          
          <section className='font-semibold text-3xl md:text-5xl border-b-2 border-customGray pb-2 md:pb-3 w-full'>
            $ {displayText}
            <span className={`cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
          </section>

          <section className='flex flex-col gap-3 text-justify leading-7'>
            <div>
              <p>Hi! I'm an aspiring software developer from FEU Institute of Technology. 
                I am learning <strong>React</strong> for frontend development, <strong>NodeJS</strong> and <strong>ExpressJS</strong> for backend development.
              </p>
            </div>

            {/* <div>
              <p>My journey started when I took my OOP Java course in university where I fell in love with java and programming. I then joined a programming competition which <s>helped</s> forced 
              me to improve on my Data Structures and Algorithms. Today, I'm passionate about creating beautiful websites, like the ones you can find 
                <span><a href="https://www.darkmodedesign.com/" target='blank' rel='noreferrer' title='darkmodedesign.com' className='hover:text-customGray transition-colors' > <strong>here</strong></a></span>
              </p>
            </div> */}

            {/* plan is to create a bento grid of my interests and hobbies and the tech i use */}

          </section>
        </section>
      </div>

      <Contact />
    </main>
  );
}

export default Me;
