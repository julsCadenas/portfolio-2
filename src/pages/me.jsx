import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Contact from '../components/contact';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Me = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const originalText = "whoami";

  useEffect(() => {
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

    const cursorIntervalId = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, []);

  return (
    <main className="bg-black font-poppins min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <motion.div className="min-w-full flex items-center justify-center py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
      >
        <section className="text-customWhite flex flex-col justify-center max-w-5xl px-10 gap-10">

          {/* whoami title */}
          <section className="font-semibold text-3xl md:text-5xl border-b-2 border-customGray pb-3 w-full">
            $ {displayText}
            <span className={`cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
          </section>

          {/* About Me Section */}
          <section className="flex flex-col gap-8 text-justify">

            {/* Introduction */}
            <div className="text-lg ">
              <p>Hi! I'm an aspiring <strong>Software & ML Engineer</strong> from FEU Institute of Technology. 🔰</p>
              <p>Currently, I work as a <strong>Full Stack Developer Intern</strong> at <strong>Spiralytics Inc.</strong>, where we use <strong>React, Vue, Laravel, MySQL</strong>, and <strong>Google Analytics/Ads</strong> as part of our tech stack.</p>
            </div>

            {/* Tech Stack */}
            <div className="bg-customGray p-5 rounded-lg">
              <h3 className="text-2xl font-semibold text-customWhite border-b-2 border-customWhite pb-2">💻 My Preferred Tech Stack</h3>
              <ul className="list-disc pl-6  pt-2">
                <li><strong>Frameworks:</strong> React, Next.js, Tailwind CSS</li>
                <li><strong>Back-end:</strong> Node.js, Express.js, Flask</li>
                <li><strong>Databases:</strong> MySQL, MongoDB</li>
                <li><strong>Scripting:</strong> Python</li>
                <li><strong>AI/ML:</strong> Python, TensorFlow, PyTorch, OpenCV</li>
              </ul>
            </div>

            {/* Career Goals */}
            <div>
              <h3 className="text-2xl font-semibold text-customWhite border-b-2 border-customWhite pb-2">🎯 Career Goals</h3>
              <p className="pt-2">
                I am determined to pursue a career in <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>.  
                Currently, I’m actively studying <strong>Python</strong> along with frameworks like <strong>PyTorch</strong> and <strong>TensorFlow</strong> to deepen my understanding of AI/ML and Data Science.
              </p>
            </div>

            {/* Project Experience */}
            <div className="bg-customGray p-5 rounded-lg">
              <h3 className="text-2xl font-semibold text-customWhite border-b-2 border-customWhite pb-2">🚀 Project Experience</h3>
              <p className='pt-2'>My interests lie in:</p>
              <ul className="list-disc pl-6 ">
                <li><strong>Model Development</strong> – Experimenting with ML models</li>
                <li><strong>Data Analysis</strong> – Exploring insights with Python</li>
                <li><strong>Computer Vision</strong> - Image/Video processing</li>
              </ul>
              <p className="pt-3">Some of my AI/ML projects include:</p>
              <ul className="list-disc pl-6 ">
                <li><strong>BART-Large-CNN Summarization Model</strong> – Fine-tuned on Reddit posts</li>
                <li><strong>PoultryGuard</strong> – AI-powered heat stress monitoring for poultry</li>
                <li><strong>AI-CLI</strong> – Integrating LLMs into your terminal</li>
              </ul>
            </div>

            {/* Final Note */}
            <div className="text-lg ">
              <p>
                My goal is to integrate AI/ML into full-stack development to build intelligent applications.  
                I'm constantly learning and improving. Let’s connect and build something amazing! 🚀
              </p>
            </div>

          </section>

        </section>
      </motion.div>

      <Contact />
    </main>
  );
}

export default Me;
