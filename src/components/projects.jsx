import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from '../utils/data.js';

const Projects = () => {
    const ref = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

        if (ref.current) {
            const elements = ref.current.querySelectorAll('.header-wrapper, .description-wrapper, .project-card');
            elements.forEach(element => observer.observe(element));
        }

        return () => {
            if (ref.current) {
                const elements = ref.current.querySelectorAll('.header-wrapper, .description-wrapper, .project-card');
                elements.forEach(element => observer.unobserve(element));
            }
        };
    }, []);

    return (
        <main className="bg-black text-customWhite flex justify-center items-center flex-col pb-20 cursor-pointer" id='projects' ref={ref}>
            <section className='flex flex-col px-10'>
                <p className='font-bold text-2xl md:text-3xl header-wrapper'>Projects</p>
                <p className='font-medium text-lg md:text-xl text-customGray description-wrapper'>A showcase of my works and the skills I've developed over time.</p>
            </section>
            <section className="flex justify-center items-center max-w-7xl px-2 sm:px-0 flex-wrap gap-2 md:gap-3 mt-8">
                {projects.map((project, index) => (
                    <Link to={`/project/${project.title}`} key={index} className='relative border-[1px] border-customGray rounded-xl group project-card'>
                        <div className='relative'>
                            <img className='object-cover w-96 h-[450px] rounded-xl' src={project.image} alt={project.alt} />
                            <div className='absolute inset-0'>
                                <div className='absolute inset-0 bg-gradient-to-b from-black rounded-xl'></div>
                            </div>
                        </div>
                        <aside className='absolute top-0 left-0 right-0 p-4 rounded-t-xl'>
                            <div className='title-wrapper'>
                                <p className='text-3xl font-semibold text-customWhite'>{project.title}</p>
                            </div>
                            <section className='text-lg opacity-0 group-hover:opacity-100 transition-opacity flex flex-row mt-2'>
                                <div  className='hover:text-customGray transition-colors pr-3 flex items-center gap-2'>
                                    <span className="material-symbols-outlined">open_in_new</span>
                                    Open Project
                                </div>
                            </section>
                        </aside>
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default Projects;