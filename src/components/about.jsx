import myphoto from '../images/myphoto.jpg';

const About = () => {

    const name = "I am Julian Sebastian Cadenas"
    const bio = "I am currently pursuing a Bachelor's degree in Computer Engineering at FEU Tech, I am a driven individual with a passion for software development. As a Scholar, I maintain a specific GPA every trimester.";

    return (
        <main className='h-screen flex items-center justify-center bg-black' id='about'>
            <section className='mx-3 md:mx-10 relative group overflow-hidden'>
                <div className='relative'>
                    <img className='rounded-xl transition-all ease-in-out w-auto h-[900px] md:h-[1024px] object-cover' src={myphoto} alt="My Photo"/>
                    <div className='absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100'>
                        <div className='absolute inset-0 bg-gradient-to-t from-black rounded-xl'></div>
                    </div>
                </div>
                <article
                    className='absolute inset-0 flex items-center justify-center text-customWhite text-2xl lg:text-4xl font-semibold 
                    text-center px-4 md:px-40 lg:px-40 flex-col transition-opacity duration-500 opacity-0 group-hover:opacity-100'
                    // style={{ textShadow: '12px 12px 16px rgba(0, 0, 0, 0.8)' }} 
                    >
                    <p className='pb-5 text-3xl lg:text-5xl '>{name}</p>
                    <p>{bio}</p>
                </article>
            </section>
        </main>
    );
}

export default About;
