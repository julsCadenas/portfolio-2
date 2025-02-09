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
            <div className='flex flex-col gap-2'>
              <p>
                Hi! I'm an aspiring <strong>software or ML engineer</strong> from FEU Institute of Technology! 
                Currently, I work as a <strong>Full Stack Developer Intern</strong> at <strong>Spiralytics Inc.</strong> where we use <strong>React, Vue, Laravel, MySQL, and Google Analytics/Ads</strong> as part of the company's tech stack. 
              </p>
              <p>
                Outside of work, I use <strong>Next.js</strong> or the <strong>MERN</strong> stack (MongoDB, Express.js, React.js, and Node.js) with <strong>Tailwind CSS</strong> as my preferred tech stack. I also use <strong>Python</strong> for writing scripts, developing applications, or rapid prototyping with <strong>Flask</strong>.
              </p>
              <p>
                Currently, I am determined to pursue a career in <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong> and am actively studying <strong>Python</strong> alongside the libraries and frameworks that accompany it such as <strong>PyTorch</strong> and <strong>Tensorflow</strong> to deepen my knowledge in AI/ML and Data Science.  
              </p>
              <p>
                My interests lie in <strong>model development</strong>, <strong>data analysis</strong>, and <strong>computer vision</strong>. I have experience working with <strong>OpenCV</strong> for image processing and have fine-tuned models like <strong>YOLOv8N</strong> and <strong>BART-Large-CNN</strong>.  
              </p>
              <p>
                In addition to my AI/ML projects, I am also involved in <strong>full-stack development</strong> and enjoy working on both front-end and back-end technologies. My goal is to integrate my development skills with AI to build intelligent applications.  
              </p>
            </div>
          </section>

        </section>
      </div>

      <Contact />
    </main>
  );
}

export default Me;
