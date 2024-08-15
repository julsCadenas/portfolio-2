import { useState } from "react";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const scrollToSection = (id, event , offset) => {
        event.preventDefault();
        const element = document.getElementById(id);
        // const offset = 0;
        const offsetPosition = element.offsetTop - offset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };


    return (
        
        <header className="fixed top-2 left-5 right-5 md:left-20 md:right-20 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg p-3 px-5 rounded-xl z-50">
            <nav className={`font-Montserrat text-customWhite font-medium flex items-center justify-between mx-auto `}>
                <h1 className="text-2xl md:text-3xl cursor-pointer hover:text-customGray transition-colors">
                    <a href="/home" onClick={(e) => scrollToSection('juls', e, 0)}>Julian Cadenas</a>
                </h1>
                <p
                    className="block lg:hidden text-customWhite focus:outline-none hover:text-customGray transition-all"
                    onClick={toggleSidebar}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </p>
                <ul className="hidden lg:flex space-x-8 text-lg">
                    <li className="cursor-pointer hover:text-customGray transition-colors">
                        <a href="/about" onClick={(e) => scrollToSection('about', e, 0)}>About</a>
                    </li>
                    <li className="cursor-pointer hover:text-customGray transition-colors">
                        <a href="/skills" onClick={(e) => scrollToSection('skills', e, 0)}>Skills</a>
                    </li>
                    <li className="cursor-pointer hover:text-customGray transition-colors">
                        <a href="/projects" onClick={(e) => scrollToSection('projects', e, 75)}>Projects</a>
                    </li>
                    <li className="cursor-pointer hover:text-customGray transition-colors">
                        <a href="/contact" onClick={(e) => scrollToSection('contact', e, 0)}>Contact</a>
                    </li>
                </ul>
            </nav>
            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-64 w-full bg-black rounded-xl transform ${
                    isSidebarOpen ? 'translate-y-[-1000px]' : 'translate-y-0'
                } transition-transform duration-150 ease-in-out text-customWhite lg:hidden bg-opacity-90 backdrop-filter backdrop-blur-lg`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-3">
                        <h1 className="text-2xl md:text-3xl cursor-pointer font-medium hover:text-customGray transition-colors" onClick={(e) => scrollToSection('juls', e, 0)}>
                            Julian Cadenas
                        </h1>
                        <p onClick={toggleSidebar} className="text-customWhite focus:outline-none hover:text-customGray transition-colors px-3">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </p>
                    </div>
                    <ul className="flex flex-col p-4 font-medium space-y-4 text-lg">
                        <li className="cursor-pointer hover:text-customGray transition-colors" onClick={toggleSidebar}>
                            <a href="/about" onClick={(e) => scrollToSection('about', e, 0)}>About</a>
                        </li>
                        <li className="cursor-pointer hover:text-customGray transition-colors" onClick={toggleSidebar}>
                            <a href="/skills" onClick={(e) => scrollToSection('skills', e, 0)}>Skills</a>
                        </li>
                        <li className="cursor-pointer hover:text-customGray transition-colors" onClick={toggleSidebar}>
                            <a href="/projects" onClick={(e) => scrollToSection('projects', e, 75)}>Projects</a>
                        </li>
                        <li className="cursor-pointer hover:text-customGray transition-colors" onClick={toggleSidebar}>
                            <a href="/contact" onClick={(e) => scrollToSection('contact', e, 0)}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
