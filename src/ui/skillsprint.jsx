import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

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
        <div className="w-full max-w-7xl">
            <section className='flex flex-col px-10 pt-5 text-left'>
                <p className='font-bold text-2xl md:text-3xl'>{title}</p>
                <p className='font-medium text-lg md:text-xl text-customGray pt-1'>{description}</p>
            </section>
            <section className="py-8 flex flex-wrap justify-center gap-5 text-5xl md:text-7xl px-5 transition-all">
                {icons.map((skill, index) => (
                    <div 
                        key={index}
                        className="flex items-center justify-center"
                        onMouseEnter={() => setColor(skill.iconClass)}
                        onMouseLeave={() => setColor(null)}
                    >
                        <BootstrapTooltip title={skill.title}>
                            <i
                                className={`${color === skill.iconClass ? skill.coloredIconClass : skill.iconClass} transition-transform text-customGray transform hover:scale-125`}
                            ></i>
                        </BootstrapTooltip>
                    </div>
                ))}
            </section>
        </div>
    </main>
  )
}

export default SkillsPrint;
