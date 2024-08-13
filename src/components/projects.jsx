import gwacalc from '../images/gwacalc.png';
import aaipsd from '../images/aaipsd.png';
import icare from '../images/icare.png';
import lrt from '../images/lrt.png'; 
import anifind from '../images/anifind.png';
import clock from '../images/clock.png';
import fitlib from '../images/fitlibrary.png';

const projects = [
    {
        title: 'Anime Finder',
        link: 'https://myanifinder.vercel.app/',
        repoLink: 'https://github.com/julsCadenas/anime-finder-2',
        image: anifind,
        alt: 'Anime Finder'
    },
    {
        title: 'FEU Tech Library',
        link: 'https://fitlib-e38fb.web.app/',
        repoLink: 'https://github.com/julsCadenas/fitlib',
        image: fitlib,
        alt: 'FEU Tech Library'
    },
    {
        title: 'Photography Portfolio',
        link: 'https://aai-psd.vercel.app/',
        repoLink: 'https://github.com/julsCadenas/ave-website',
        image: aaipsd,
        alt: 'Photography Portfolio'
    },
    {
        title: 'iCARE Website',
        repoLink: 'https://github.com/julsCadenas/iCARE-Website',
        image: icare,
        alt: 'iCare'
    },
    {
        title: 'LRT System',
        repoLink: 'https://github.com/julsCadenas/lrtProject',
        image: lrt,
        alt: 'LRT System'
    },
    {
        title: 'GWA-Calculator',
        link: 'https://julscadenas.github.io/gwa-calculator/',
        repoLink: 'https://github.com/julsCadenas/gwa-calculator',
        image: gwacalc,
        alt: 'GWA Calculator'
    },
    {
        title: 'Clock Extension',
        repoLink: 'https://github.com/julsCadenas/clockhome',
        image: clock,
        alt: 'Clock Extension'
    }
];


const Projects = () => {
    return (
        <main className="bg-black text-customWhite flex justify-center items-center flex-col pb-20" id='projects'>
            <section className='flex flex-col px-10'>
                <p className='font-bold text-2xl md:text-3xl'>Projects</p>
                <p className='font-medium text-lg md:text-xl text-customGray'>The projects I've done throughout my journey</p>
            </section>
            <section className="flex justify-center items-center max-w-7xl flex-wrap gap-2 md:gap-3 mt-8">
                {projects.map((project, index) => (
                    <article key={index} className='relative border-[1px] border-customGray rounded-xl group'>
                        <div className='relative'>
                            <img className='object-cover w-96 h-[450px] rounded-xl' src={project.image} alt={project.alt} />
                            <div className='absolute inset-0'>
                                <div className='absolute inset-0 bg-gradient-to-b from-black rounded-xl'></div>
                            </div>
                        </div>
                        <aside className='absolute top-0 left-0 right-0 p-4 rounded-t-xl'>
                            <p className='text-3xl font-semibold text-customWhite'>{project.title}</p>
                            <section className='text-lg opacity-0 group-hover:opacity-100 transition-opacity flex flex-col mt-1'>
                                <a href={project.repoLink} className='hover:text-customGray transition-colors' >Source Code</a>
                                { project.link &&
                                <a href={project.link} className='hover:text-customGray transition-colors' >Open Website</a>
                                }
                            </section>
                        </aside>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default Projects;