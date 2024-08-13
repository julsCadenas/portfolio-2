import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const skillIcons = [
    { title: 'C++', iconClass: 'devicon-cplusplus-plain', coloredIconClass: 'devicon-cplusplus-plain colored' },
    { title: 'Python', iconClass: 'devicon-python-plain', coloredIconClass: 'devicon-python-plain colored' },
    { title: 'Java', iconClass: 'devicon-java-plain', coloredIconClass: 'devicon-java-plain colored' },
    { title: 'HTML5', iconClass: 'devicon-html5-plain', coloredIconClass: 'devicon-html5-plain colored' },
    { title: 'CSS3', iconClass: 'devicon-css3-plain', coloredIconClass: 'devicon-css3-plain colored' },
    { title: 'JavaScript', iconClass: 'devicon-javascript-plain', coloredIconClass: 'devicon-javascript-plain colored' },
    { title: 'PHP', iconClass: 'devicon-php-plain', coloredIconClass: 'devicon-php-plain colored' },
    { title: 'Amazon Web Services', iconClass: 'devicon-amazonwebservices-plain-wordmark', coloredIconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
    { title: 'React', iconClass: 'devicon-react-original', coloredIconClass: 'devicon-react-original colored' },
    { title: 'Node JS', iconClass: 'devicon-nodejs-plain', coloredIconClass: 'devicon-nodejs-plain colored' },
    { title: 'Arduino', iconClass: 'devicon-arduino-plain', coloredIconClass: 'devicon-arduino-plain colored' },
    { title: 'Git', iconClass: 'devicon-git-plain', coloredIconClass: 'devicon-git-plain colored' },
    { title: 'GitHub', iconClass: 'devicon-github-original', coloredIconClass: 'devicon-github-original colored' },
    { title: 'SQL', iconClass: 'devicon-sqldeveloper-plain', coloredIconClass: 'devicon-sqldeveloper-plain colored' },
    { title: 'SQLite', iconClass: 'devicon-sqlite-plain', coloredIconClass: 'devicon-sqlite-plain colored' },
    { title: 'Bash', iconClass: 'devicon-bash-plain', coloredIconClass: 'devicon-bash-plain colored' },
    { title: 'Figma', iconClass: 'devicon-figma-plain', coloredIconClass: 'devicon-figma-plain colored' },
    { title: 'Firebase', iconClass: 'devicon-firebase-plain', coloredIconClass: 'devicon-firebase-plain colored' },
    { title: 'Tailwind', iconClass: 'devicon-tailwindcss-original', coloredIconClass: 'devicon-tailwindcss-original colored' },
    { title: 'Tensorflow', iconClass: 'devicon-tensorflow-original', coloredIconClass: 'devicon-tensorflow-original colored' },
    { title: 'ViteJS', iconClass: 'devicon-vitejs-plain', coloredIconClass: 'devicon-vitejs-plain colored' },
    { title: 'Postman', iconClass: 'devicon-postman-plain', coloredIconClass: 'devicon-postman-plain colored' }
];

const Skills = () => {
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
        <main className="bg-black py-32 text-customWhite flex justify-center items-center flex-col" id='skills'>
            <section className='flex flex-col px-10'>
                <p className='font-bold text-2xl md:text-3xl'>Skills & Tools</p>
                <p className='font-medium text-lg md:text-xl text-customGray'>The skills, languages, and tools I've used and learned</p>
            </section>
            <section className="py-8 flex flex-wrap justify-center gap-5 text-5xl md:text-7xl px-5 max-w-7xl transition-all">
                {skillIcons.map((skill, index) => (
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
        </main>
    );
};

export default Skills;
