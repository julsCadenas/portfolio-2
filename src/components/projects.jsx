import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from '../utils/data.js';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('software');
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        setFilteredProjects(projects.filter((project) => project.category === selectedCategory));
    }, [selectedCategory]); 
    
    // const filteredProjects = projects.filter((project) => project.category === selectedCategory);
    // console.log("Filtered Projects:", filteredProjects);

    return (
        <main className="bg-black text-customWhite flex justify-center items-center flex-col pb-20 cursor-pointer" id='projects'>
            <motion.section 
                className='flex flex-col px-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <p className='font-bold text-2xl md:text-3xl'>Projects</p>
                <p className='font-medium text-lg md:text-xl text-customGray mb-1'>A showcase of my works and the skills I've developed over time.</p>
                <section className='flex flex-col md:flex-row gap-2 text-customGray font-medium text-lg md:text-xl pt-1'>
                    <p className={`max-w-72 flex flex-col justify-center items-center transition-colors border-customGray border rounded-xl py-1 px-2 ${selectedCategory === 'software' ? 'text-black font-bold bg-customWhite' : 'hover:text-black hover:bg-customWhite hover:font-bold'}`} onClick={() => setSelectedCategory('software')} >
                        Software Development
                    </p>
                    <p className={`max-w-72 flex flex-col justify-center items-center transition-colors border-customGray border rounded-xl py-1 px-2 ${selectedCategory === 'aiml' ? 'text-black font-bold bg-customWhite' : 'hover:text-black hover:bg-customWhite hover:font-bold'}`} onClick={() => setSelectedCategory('aiml')}>
                        Data Science & AI/ML
                    </p>
                </section>
            </motion.section>

            <section className="flex justify-center items-center max-w-7xl px-2 sm:px-0 flex-wrap gap-2 md:gap-3 mt-5">
                {filteredProjects.length === 0 && <p>No projects found</p>}
                {filteredProjects.map((project) => (
                    <motion.div 
                        key={project.id} 
                        className='relative border-[1px] border-customGray rounded-xl group'
                        initial="hidden"
                        whileInView="visible"
                        // viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Link to={`/project/${project.id}`}>
                            <div className='relative'>
                                <img className='object-cover w-96 h-[450px] rounded-xl' src={project.image} alt={project.alt} />
                                <div className='absolute inset-0'>
                                    <div className='absolute inset-0 bg-gradient-to-b from-black rounded-xl'></div>
                                </div>
                            </div>
                            <aside className='absolute top-0 left-0 right-0 p-4 rounded-t-xl'>
                                <div className='title-wrapper'>
                                    <p className='text-3xl font-semibold text-customWhite'>{project.title}</p>
                                    <p className='text-base font-bold text-customGray'>{project.subtitle}</p>
                                </div>
                                <section className='text-lg opacity-0 group-hover:opacity-100 transition-opacity flex flex-row mt-2'>
                                    <div className='hover:text-customGray transition-colors pr-3 flex items-center gap-2'>
                                        <span className="material-symbols-outlined">open_in_new</span>
                                        Open Project
                                    </div>
                                </section>
                            </aside>
                        </Link>
                    </motion.div>
                ))}
            </section>
        </main>
    );
};

export default Projects;
