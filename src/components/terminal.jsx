import React, { useState, useRef, useEffect } from "react";
import fileSystem from "../utils/filesystem";
import TypingAnimation from "../ui/typinganimation";

const Terminal = () => {
    const username = "user"; 
    const [input, setInput] = useState("");
    const [currentPath, setCurrentPath] = useState(["home"])
    const [history, setHistory] = useState([
        "Welcome to my terminal emulator!",
        "To get to know me, type 'help' to see available commands.",
    ]);
    const terminalRef = useRef(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const getCurrentDirectory = () => {
        return currentPath.reduce((dir, subDir) => dir[subDir], fileSystem)
    };

    const handleCommands = (cmd) => {
        const args = cmd.split(" ");
        const command = args[0].toLowerCase();
        const arg = args[1];
    
        let response = "";
        const prefix = (
            <span className="text-green-400">{`@${username}:/${currentPath.join("/")}$ `}</span>
        );
    
        switch (command) {
            case "help":
                response = <span className="text-blue-400">"Available commands: help, clear, cd, ls, cat, pwd"</span>;
                break;
            case "clear":
            case "cls":
                setHistory([]);
                return;
            case "pwd":
                response = <span className="text-yellow-400">{`/${currentPath.join("/")}`}</span>;
                break;
            case "ls":
                const dir = getCurrentDirectory();
                response = Object.keys(dir).length > 0 
                    ? <span className="text-purple-400">{Object.keys(dir).join("  ")}</span>
                    : <span className="text-gray-400">"Empty directory."</span>;
                break;
            case "cd":
                if (!arg) {
                    response = <span className="text-red-400">"Usage: cd &lt;directory&gt;"</span>;
                } else if (arg === "..") {
                    if (currentPath.length > 1) {
                        setCurrentPath(currentPath.slice(0, -1));
                    } else {
                        response = <span className="text-red-400">"Already at root directory."</span>;
                    }
                } else {
                    const dir = getCurrentDirectory();
                    if (dir[arg] && typeof dir[arg] === "object") {
                        setCurrentPath([...currentPath, arg]);
                    } else {
                        response = <span className="text-red-400">{`No such directory: ${arg}`}</span>;
                    }
                }
                break;
            case "cat":
                if (!arg) {
                    response = <span className="text-red-400">"Usage: cat &lt;filename&gt;"</span>;
                } else {
                    const dir = getCurrentDirectory();
                    response = dir[arg] ? (
                        <pre className="whitespace-pre-wrap text-white">{dir[arg]}</pre>
                    ) : <span className="text-red-400">{`No such file: ${arg}`}</span>;
                }
                break;
            default:
                response = <span className="text-red-400">{`Command not found: ${cmd}`}</span>;
        }
    
        setHistory((prev) => [...prev, <div>{prefix} {cmd}</div>, <div>{response}</div>]);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommands(input);
        setInput("");
    };

    return (
        <main className="w-full h-full max-w-[1300px] md:max-h-[690px] bg-background border-white border-2 text-green-400 p-4 font-mono text-sm md:text-base rounded-lg mt-16 md:mt-0 mx-5 md:mx-0">
            <section>
                <TypingAnimation>whoami</TypingAnimation>
            </section>
            <section ref={terminalRef} className="overflow-y-auto h-[600px]">
                {history.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
                {/* Current input line */}
                <div className="flex">
                    <span className="mr-2 text-green-400">{`@${username}:/${currentPath.join("/")}$ `}</span>
                    <form onSubmit={handleSubmit} className="w-48 md:w-96">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="bg-transparent text-green-400 outline-none w-full" autoFocus />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Terminal;
