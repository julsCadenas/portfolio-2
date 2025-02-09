import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Juls = () => {
    const [displayText, setDisplayText] = useState('');
    const originalText = "Hi, I'm Julian";

    const startAnimation = () => {
        let index = 0;

    
        const intervalId = setInterval(() => {
            if (index <= originalText.length) {
                setDisplayText(originalText.substring(0, index));
                index++;
            }
    
            if (index > originalText.length && index > originalText.length) {
                clearInterval(intervalId);
            }
        }, 100); 
    
        return () => clearInterval(intervalId);
    };

    useEffect(() => {
        startAnimation();
    }, []);

    const handleReplayAnimation = () => {
        setDisplayText('');
        startAnimation();
    };

    return(
        <motion.main 
            className="text-customWhite flex justify-center items-center flex-col pb-20 pt-36 md:pt-28 h-96 " id='juls'
            initial="hidden"
            animate="visible"  
            variants={fadeInUp}
        >
            <section className="font-bold text-5xl md:text-7xl cursor-pointer hover:scale-110 transition-all"  onClick={handleReplayAnimation}>
                <p>{displayText}</p>
            </section>
            <section className="font-medium text-customGray text-xl md:text-3xl my-2" >
                <p>Aspiring ML Engineer</p>
            </section>
        </motion.main>
    )
};

export default Juls;