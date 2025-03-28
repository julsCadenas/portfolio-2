import React, { useState} from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const SkillsPrint = ({ title, description, icons }) => {
    const [color, setColor] = useState(null);

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
            transition: 'none',
        },
    }));

    return (
        <main className="w-full flex justify-center">
            <motion.div
                className="w-full max-w-3xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={fadeInUp}
            >
                <section className='text-left'>
                    <div className='px-10 pt-5'>
                        <p className='font-bold text-2xl md:text-3xl'>{title}</p>
                        <p className='font-medium text-lg md:text-xl text-customGray pt-1'>{description}</p>
                    </div>
                </section>
                <section className="py-8 flex flex-wrap items-center justify-start md:justify-center gap-5 text-5xl md:text-7xl px-10 md:px-5 transition-all">
                    {icons.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center"
                            onMouseEnter={() => setColor(skill.iconClass)}
                            onMouseLeave={() => setColor(null)}
                        >
                            <BootstrapTooltip title={skill.title}>
                                <i className={`${color === skill.iconClass ? skill.coloredIconClass : skill.iconClass} transition-transform text-customGray transform hover:scale-125`}></i>
                            </BootstrapTooltip>
                        </div>
                    ))}
                </section>
            </motion.div>
        </main>
    );
};

export default SkillsPrint;
