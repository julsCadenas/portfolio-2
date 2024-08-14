import Amongus from "../ui/amongus";
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import resume from '../files/Julian-Sebastian-Cadenas-Resume.pdf';

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: '#1E1E1E',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#1E1E1E',
        color: '#F3F4E5', 
        fontSize: '16px', 
        borderRadius: '8px', 
        padding: '8px 16px', 
    },
}));

const Contact = () => {
    const [displayText, setDisplayText] = useState('');
    const originalText = "jscadenas12@gmail.com";

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

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(originalText).then(() => {
        }).catch((error) => {
            console.error('Failed to copy email: ', error);
        });
    };

    const handleNameClick = () => {
        startAnimation();
        copyEmailToClipboard();
    };
    return (
        <footer className="text-customWhite bg-black flex flex-col justify-center items-center py-32" id="contact">
            <section className='flex flex-col px-10'>
                <p className='font-bold text-2xl md:text-3xl'>Contact Me:</p>
                <p className='font-medium text-xl md:text-2xl text-customGray'>You can contact me using 
                <BootstrapTooltip title="Click to copy">
                    <span className="cursor-pointer hover:text-customWhite transition-colors" onClick={handleNameClick}><strong> {displayText || originalText}</strong></span>
                </BootstrapTooltip>
                </p>
            </section>
            <section className="flex flex-col items-center mt-5 space-y-4">
                <div className="text-customWhite flex gap-3 text-7xl">
                    <a title="my github" className="hover:scale-125 transition-transform" href="https://github.com/julsCadenas"><i className="devicon-github-original "></i></a>
                    <a title="my linkedin" className="hover:scale-125 transition-transform" href="https://www.linkedin.com/in/julian-cadenas/"><i className="devicon-linkedin-plain "></i></a>
                    <a title="my facebook" className="hover:scale-125 transition-transform" href="https://www.facebook.com/jscdns/"><i className="devicon-facebook-plain "></i></a>
                </div>
                <a href={resume} download='Julian-Sebastian-Cadenas-Resume.pdf'>
                    <Amongus />
                </a>
            </section>
        </footer>
    );
}

export default Contact;
