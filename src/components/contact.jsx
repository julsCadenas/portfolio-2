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
        <footer className="text-customWhite bg-black flex flex-col md:flex-row justify-center py-10 border-t-[1px] border-customGray pl-5 md:pl-0" id="contact">
            <section className='flex flex-col px-5 md:px-10 text-left'>
                <p className='font-bold text-2xl md:text-3xl'>Contact Me:</p>
                <p className='font-medium text-xl md:text-2xl text-customGray mt-3 md:mt-0'>
                    You can contact me using 
                    <BootstrapTooltip title="Click to copy">
                        <span className="cursor-pointer hover:text-customWhite transition-colors ml-1" onClick={handleNameClick}><strong>{displayText || originalText}</strong></span>
                    </BootstrapTooltip>
                </p>
                <a href={resume} download='Julian-Sebastian-Cadenas-Resume.pdf' className="mt-1">
                    <Amongus />
                </a>
            </section>
            <section className="flex flex-col mt-8 md:mt-0 md:ml-10 space-y-4 pl-5 md:pl-0">
                <div className="text-customGray flex flex-col gap-3 text-xl">
                    <a title="my github" className="hover:text-customWhite transition-colors flex items-center" href="https://github.com/julsCadenas">
                        <i className="devicon-github-original text-2xl"></i> 
                        <span className="ml-2">Github</span>
                    </a>
                    <a title="my linkedin" className="hover:text-customWhite transition-colors flex items-center" href="https://www.linkedin.com/in/julian-cadenas/">
                        <i className="devicon-linkedin-plain text-2xl"></i> 
                        <span className="ml-2">LinkedIn</span>
                    </a>
                    <a title="my facebook" className="hover:text-customWhite transition-colors flex items-center" href="https://www.facebook.com/jscdns/">
                        <i className="devicon-facebook-plain text-2xl"></i> 
                        <span className="ml-2">Facebook</span>
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Contact;
