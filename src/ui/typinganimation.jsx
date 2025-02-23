import React, { useState, useEffect } from 'react'

const TypingAnimation = ({ children }) => {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    // const originalText = "whoami";

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
          if (index <= children.length) {
            setDisplayText(children.substring(0, index));
            index++;
          }
          if (index > children.length) {
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
      }, [children]);

  return (
    <main>
        <section className="font-semibold text-3xl md:text-5xl border-b-2 border-customGray pb-3 w-full text-white mb-3">
            $ {displayText}
            <span className={`cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
          </section>
    </main>
  )
}

export default TypingAnimation