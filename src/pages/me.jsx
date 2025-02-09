import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/header';
import Contact from '../components/contact';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Terminal = () => {
  const [commands, setCommands] = useState([]);
  const [input, setInput] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef(null);
  
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

  const commandResponses = {
    whoami: "Julian - Aspiring ML Engineer & Full Stack Developer.",
    skills: "Python, React, Vue, Node.js, Express, SQL, ML (TensorFlow, PyTorch, Scikit-Learn).",
    projects: "1. House Price Prediction (ML)\n2. Reddit Summarizer (NLP)\n3. POULTRYGUARD (AI for Poultry Monitoring).",
    contact: "Email: julian@example.com\nGitHub: github.com/julian\nLinkedIn: linkedin.com/in/julian",
    help: "Available commands: whoami, skills, projects, contact, clear",
  };

  const handleCommand = () => {
    if (input.trim() === "") return;

    if (input === "clear") {
      setCommands([]);
    } else {
      setCommands([...commands, { command: input, response: commandResponses[input] || "Command not found. Type 'help' for available commands." }]);
    }

    setInput('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [commands]);

  return (
    <main className="bg-black text-green-400 font-poppins min-h-screen flex flex-col">
      <Header />

      {/* Terminal Window */}
      <motion.div className="min-w-full flex items-center justify-center py-20 font-mono"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
      >
        <section className="bg-black p-5 max-w-5xl w-full border border-gray-600 rounded-lg shadow-lg">
          
          {/* whoami title */}
          <section className="font-semibold text-3xl md:text-5xl border-b-2 border-customGray pb-3 w-full text-white">
            $ {displayText}
            <span className={`cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
          </section>

          {/* Display Commands */}
          <div className="overflow-y-auto h-96 p-2 mt-4">
            {commands.map((cmd, index) => (
              <div key={index}>
                <p className="text-white">$ {cmd.command}</p>
                <p>{cmd.response}</p>
              </div>
            ))}
          </div>

          {/* Input Line */}
          <div className="flex mt-2">
            <span className="text-white">$</span>
            <input
              ref={inputRef}
              type="text"
              className="bg-black text-green-400 border-none outline-none flex-1 ml-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            />
          </div>
        </section>
      </motion.div>

      <Contact />
    </main>
  );
};

export default Terminal;
