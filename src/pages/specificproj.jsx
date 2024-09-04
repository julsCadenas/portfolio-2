import React, { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../utils/data';
import Header from '../components/header';
import Contact from '../components/contact';

const SpecificProj = () => {
    const { title } = useParams();
    const project = projects.find(p => p.title === title);
    const ref = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

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
            const elements = ref.current.querySelectorAll('.fade-in');
            elements.forEach(element => observer.observe(element));
        }

        return () => {
            if (ref.current) {
                const elements = ref.current.querySelectorAll('.fade-in');
                elements.forEach(element => observer.unobserve(element));
            }
        };
    }, []);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <main className='flex flex-col justify-center items-center font-poppins bg-black text-customWhite' ref={ref}>
            <Header />

            <section className='flex justify-center flex-col min-h-screen gap-5 max-w-5xl px-10 md:px-20 2xl:px-10 pt-24 py-20'>
                
                <section className='border-b border-customGray pb-2 md:pb-3'>
                    <p className='font-semibold text-5xl fade-in'>{project.title}</p>
                    <p className='text-customGray text-base font-semibold fade-in'>{project.subtitle}</p>
                </section>

                <section className='flex flex-wrap gap-2'>
                    {project.stack.map((stack, index) => (
                        <div key={index} className='text-customGray hover:text-customWhite text-xs md:text-sm border border-customGray hover:border-customWhite transition-colors cursor-default p-1 px-2 rounded-full fade-in'>
                            {stack}
                        </div>
                    ))}
                </section>

                <figure className='relative border border-customGray rounded-xl overflow-hidden max-w-[800px] fade-in'>
                    <img className='object-cover w-full h-auto' src={project.image} alt={project.alt} />
                    <div className='absolute inset-0'>
                        <div className='absolute inset-0 bg-gradient-to-t from-black rounded-xl'></div>
                    </div>
                </figure>

                <section className='fade-in'>
                    <p className='text-left md:text-justify text-base'>{project.description}</p>
                </section>

                <section className='flex flex-wrap gap-2 text-sm fade-in'>
                    {project.link &&
                    <a href={project.link} target='_blank' rel='noreferrer' className='bg-customWhite hover:bg-customGray rounded-lg p-1 px-3 h-10 text-black transition-colors pl-3 flex items-center gap-2'>
                        <span className="material-symbols-outlined">open_in_new</span>
                        Open Website
                    </a>
                    }
                    <a href={project.repoLink} target='_blank' rel='noreferrer' className='bg-customWhite hover:bg-customGray rounded-lg p-1 px-3 h-10 text-black transition-colors pr-3 flex items-center gap-2'>
                        <i className="devicon-github-original text-2xl"></i>
                        Source Code
                    </a>
                </section>

            </section>
            
        </main>
    )
}

export default SpecificProj;
