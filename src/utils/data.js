import gwacalc from '../images/gwacalc.png';
import aaipsd from '../images/aaipsd.png';
import icare from '../images/icare.png';
import lrt from '../images/lrt.png'; 
import anifind from '../images/anifind.png';
import clock from '../images/clock.png';
import fitlib from '../images/fitlibrary.png';

const projects = [
    {
        id: '1',
        title: 'iCARE Website',
        link: 'https://icare-unofficial.vercel.app/',
        repoLink: 'https://github.com/julsCadenas/icare-mern',
        image: icare,
        alt: 'iCare',
        stack: ['MongoDB', 'Express', 'React', 'NodeJS', 'Tailwind', 'Axios'],
        subtitle: 'Unofficial iCare Website',
        description: 'The unofficial iCARE Website, originally developed in PHP as a final project for Data Structures & Algorithms. I completely rewrote using the MERN stack. The frontend is written in React.js and styled using Tailwind CSS, while the backend is powered by MongoDB, Express, and Node.js. The web application allows students students to book consultations and tutorials with professors.'
    },
    {
        id: '2',
        title: 'Anime Finder',
        link: 'https://myanifinder.vercel.app/',
        repoLink: 'https://github.com/julsCadenas/anime-finder-2',
        image: anifind,
        alt: 'Anime Finder',
        stack: ['React', 'Tailwind', 'Jikan API', 'Axios'],
        subtitle: 'Find your favorite anime!',
        description: 'The Anime Finder is a web application designed to help anime fans in discovering their next favorite series or movie. Leveraging React.js and Tailwind CSS, this project offers an intuitive user interface where users can explore a vast database of anime content. The core functionality of the Anime Finder is powered by the Jikan API, allowing data retrieval for up-to-date information on anime titles, genres, ratings, and more.'
    },
    {
        id: '3',
        title: 'FEU Tech Library',
        link: 'https://fitlib-e38fb.web.app/',
        repoLink: 'https://github.com/julsCadenas/fitlib',
        image: fitlib,
        alt: 'FEU Tech Library',
        stack: ['React', 'Tailwind', 'Firebase'],
        subtitle: 'Unofficial FEU Tech Library',
        description: 'A responsive website made using React.js and Firebase for as a final requirement in our Software Design course. This platform is designed to allow students to reserve or borrow books in advance before going to the library, and also to access books provided by FEU Tech in one centralized web application.'
    },
    {
        id: '4',
        title: 'Photography Portfolio',
        link: 'https://aai-psd.vercel.app/',
        repoLink: 'https://github.com/julsCadenas/ave-website',
        image: aaipsd,
        alt: 'Photography Portfolio',
        stack: ['React'],
        subtitle: "Asaiah Igliane's Portfolio Website",
        description: `I was commissioned by my cousin, Asaiah Igliane, to develop a portfolio website showcasing his professional journey as a photographer. Built using React.js, HTML, and CSS, this website serves as a platform for highlighting his skills and projects.
        It features an intuitive interface where visitors can explore his work and connect with him professionally. Additionally, the website is fully responsive, providing an optimal viewing experience on mobile phones. Make sure to follow him as well!`
    },
    {
        id: '5',
        title: 'LRT System',
        repoLink: 'https://github.com/julsCadenas/lrtProject',
        image: lrt,
        alt: 'LRT System',
        stack: ['Python', 'SQLite', 'CustomTkinter'],
        subtitle: "Emulating LRT's ticket vending machine",
        description: `A project I created to challenge myself in creating an application using Python and SQLite. During my sophomore year in college, we were tasked with creating a program that calculates LRT-2's fare matrix. Since then, I promised myself that I would one day code an application to simulate LRT-2's ticket vending machine. This project uses Python's Custom Tkinter library to build its modern and minimalistic GUI. Custom Tkinter enhances the standard Tkinter library, enabling users to create more modern-looking UIs. The project uses SQLite for its database, with Python utilized to manipulate the data.`
    },
    {
        id: '6',
        title: 'GWA-Calculator',
        link: 'https://julscadenas.github.io/gwa-calculator/',
        repoLink: 'https://github.com/julsCadenas/gwa-calculator',
        image: gwacalc,
        alt: 'GWA Calculator',
        stack: ['HTMl', 'CSS', 'Javascript', 'JQuery'],
        subtitle: 'Calculate your weighted GWA',
        description: 'The GWA Calculator is a simple web application designed to help students compute their General Weighted Average (GWA). This project provides an interface where users can input their grades and the corresponding units for each subject, and then calculate their GWA.'
    },
    {
        id: '7',
        title: 'Clock Extension',
        repoLink: 'https://github.com/julsCadenas/clockhome',
        image: clock,
        alt: 'Clock Extension',
        stack: ['HTMl', 'CSS', 'Javascript', 'OpenWeatherMap API'],
        subtitle: 'A minimalist clock homepage replacement',
        description: "A website created as a replacement for chrome's startup or new tab page. This works as a Chrome extension."
    }
];

export default projects;
