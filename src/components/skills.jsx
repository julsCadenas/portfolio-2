import React from 'react';
import SkillsPrint from '../ui/skillsprint';

const skillIcons = [
    { title: 'Python', iconClass: 'devicon-python-plain', coloredIconClass: 'devicon-python-plain colored' },
    { title: 'JavaScript', iconClass: 'devicon-javascript-plain', coloredIconClass: 'devicon-javascript-plain colored' },
    { title: 'Java', iconClass: 'devicon-java-plain', coloredIconClass: 'devicon-java-plain colored' },
    { title: 'C++', iconClass: 'devicon-cplusplus-plain', coloredIconClass: 'devicon-cplusplus-plain colored' },
    { title: 'HTML5', iconClass: 'devicon-html5-plain', coloredIconClass: 'devicon-html5-plain colored' },
    { title: 'CSS3', iconClass: 'devicon-css3-plain', coloredIconClass: 'devicon-css3-plain colored' },
    { title: 'PHP', iconClass: 'devicon-php-plain', coloredIconClass: 'devicon-php-plain colored' },
];

const frameworkIcons = [
    { title: 'React', iconClass: 'devicon-react-original', coloredIconClass: 'devicon-react-original colored' },
    { title: 'Next JS', iconClass: 'devicon-nextjs-plain', coloredIconClass: 'devicon-nextjs-original-wordmark' },
    { title: 'Node JS', iconClass: 'devicon-nodejs-plain', coloredIconClass: 'devicon-nodejs-plain colored' },
    { title: 'Express JS', iconClass: 'devicon-express-original', coloredIconClass: 'devicon-express-original colored' },
    { title: 'Tailwind', iconClass: 'devicon-tailwindcss-original', coloredIconClass: 'devicon-tailwindcss-original colored' },
    { title: 'OpenCV', iconClass: 'devicon-opencv-plain', coloredIconClass: 'devicon-opencv-plain colored' },
    // { title: 'Arduino', iconClass: 'devicon-arduino-plain', coloredIconClass: 'devicon-arduino-plain colored' },
];

const aimlIcons = [
    { title: 'Python', iconClass: 'devicon-python-plain', coloredIconClass: 'devicon-python-plain colored' },
    { title: 'Pandas', iconClass: 'devicon-pandas-plain', coloredIconClass: 'devicon-pandas-plain colored' },
    { title: 'Matplotlib', iconClass: 'devicon-matplotlib-plain', coloredIconClass: 'devicon-matplotlib-plain colored' },
    { title: 'NumPy', iconClass: 'devicon-numpy-plain', coloredIconClass: 'devicon-numpy-plain colored' },
    { title: 'Scikit-learn', iconClass: 'devicon-scikitlearn-plain', coloredIconClass: 'devicon-scikitlearn-plain colored' },
    { title: 'Tensorflow', iconClass: 'devicon-tensorflow-original', coloredIconClass: 'devicon-tensorflow-original colored' },
    { title: 'PyTorch', iconClass: 'devicon-pytorch-original', coloredIconClass: 'devicon-pytorch-original colored' },
];

const toolsIcons = [
    { title: 'SQL', iconClass: 'devicon-sqldeveloper-plain', coloredIconClass: 'devicon-sqldeveloper-plain colored' },
    { title: 'SQLite', iconClass: 'devicon-sqlite-plain', coloredIconClass: 'devicon-sqlite-plain colored' },
    { title: 'MongoDB', iconClass: 'devicon-mongodb-plain', coloredIconClass: 'devicon-mongodb-plain colored' },
    { title: 'Firebase', iconClass: 'devicon-firebase-plain', coloredIconClass: 'devicon-firebase-plain colored' },
    { title: 'Bash', iconClass: 'devicon-bash-plain', coloredIconClass: 'devicon-bash-plain colored' },
    { title: 'Git', iconClass: 'devicon-git-plain', coloredIconClass: 'devicon-git-plain colored' },
    { title: 'GitHub', iconClass: 'devicon-github-original', coloredIconClass: 'devicon-github-original-wordmark' },
    { title: 'Figma', iconClass: 'devicon-figma-plain', coloredIconClass: 'devicon-figma-plain colored' },
    { title: 'Vite', iconClass: 'devicon-vitejs-plain', coloredIconClass: 'devicon-vitejs-plain colored' },
    { title: 'Postman', iconClass: 'devicon-postman-plain', coloredIconClass: 'devicon-postman-plain colored' },
]

const Skills = () => {
    
    return (
        <main className="bg-black py-32 text-customWhite flex justify-center items-center flex-col" id='skills'>
            <SkillsPrint title='Languages' description="Programming languages I've learned and used in various projects." icons={skillIcons} />
            <SkillsPrint title='Data Science & AI/ML' description="AI/ML tools I am currently studying." icons={aimlIcons} />
            <SkillsPrint title='Frameworks' description="Frameworks and libraries I've used to build applications." icons={frameworkIcons} />
            <SkillsPrint title='Tools' description="Tools and software I regularly use in my workflow." icons={toolsIcons} />
        </main>
    );
};

export default Skills;