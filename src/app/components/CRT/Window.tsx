"use client";

import React, { useState, useRef, useEffect } from "react";

interface WindowProps {
  title: string;
  onClose: (e?: React.MouseEvent) => void;
  onFolderClick?: (folder: string) => void;
}

const Window = ({ title, onClose, onFolderClick }: WindowProps) => {
  const [command, setCommand] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [history, setHistory] = useState<string[]>([
    "Welcome to SREY 2K25 Terminal",
    "Type /help to see available commands",
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const contacts = [
    { name: "Manash", role: "Core Committee", phone: "+91 7439270692" },
    { name: "Deepan", role: "Core Committee", phone: "+91 9836579142" },
    { name: "Adil", role: "Core Committee", phone: "+91 6291227656" },
    { name: "Tushar", role: "Core Committee", phone: "+91 8709288805" },
    { name: "Sourik", role: "Core Committee", phone: "+91 6298767026" }
  ];

  const commands = [
    { name: "/help", description: "Show available commands" },
    { name: "/insta", description: "Get our Instagram handle" },
    { name: "/fb", description: "Get our Facebook page" },
    { name: "/contact", description: "View contact information" },
    { name: "/clear", description: "Clear the terminal" },
    { name: "/close", description: "Close this window" },
  ];

  const handleFolderClick = (folder: string) => {
    if (onFolderClick) {
      onFolderClick(folder);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand();
    } else if (e.key === "Tab" || e.key === "ArrowDown") {
      e.preventDefault();
      setShowDropdown(true);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const selectCommand = (cmd: string) => {
    setCommand(cmd);
    setShowDropdown(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const processCommand = () => {
    if (!command) return;
    
    const newHistory = [...history, `> ${command}`];
    
    switch(command.toLowerCase()) {
      case '/help':
        newHistory.push(
          "Available commands:",
          "/insta - Get our Instagram handle",
          "/fb - Get our Facebook page",
          "/contact - View contact information of volunteers",
          "/clear - Clear the terminal",
          "/close - Close this window",
          "/help - Show this help message"
        );
        break;
      
      case '/insta':
        newHistory.push(
          "Instagram: @srey2k25_official"
        );
        break;
      
      case '/fb':
        newHistory.push(
          "Facebook: facebook.com/StThomasSREY2K25"
        );
        break;
      
      case '/contact':
        newHistory.push(
          "--- SREY 2K25 Contact Information ---",
          ...contacts.map(contact => `${contact.name} (${contact.role}): ${contact.phone}`)
        );
        break;
      
      case '/clear':
        setHistory(["Terminal cleared."]);
        setCommand("");
        return;
        
      case '/close':
        newHistory.push(
          "Closing window..."
        );
        setHistory(newHistory);
        setCommand("");
        // Delay the window close for a moment to show the closing message
        setTimeout(() => {
          onClose();
        }, 500);
        return;
      
      default:
        newHistory.push(
          `Command not recognized: ${command}`,
          "Type /help to see available commands."
        );
    }
    
    setHistory(newHistory);
    setCommand("");
    setShowDropdown(false);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };

  // Function to capitalize the first letter of the title
  const capitalizeTitle = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden flex flex-col">
      {/* Title Bar */}
      <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs handle cursor-move">
        <span className="">{capitalizeTitle(title)}</span>
        <button
          onClick={handleClose}
          className="close-button bg-gray-600 border-l border-white text-black px-1"
        >
          ✖
        </button>
      </div>

      {title === "events" ? (
        <>
          <div className="flex items-center bg-gray-400 text-white text-xs handle cursor-move border-t border-b border-white">
            <span className="border-r border-white px-1" onClick={onClose}>🔙</span>
            <span className="border-r border-white px-1" onClick={onClose}>🏠︎</span>
            <span className="px-2">C:\Events\</span>
          </div>
          <div className="bg-gray-300 p-2 text-xs flex-1 flex">
            <div 
              className="cursor-pointer mr-4" 
              onClick={() => handleFolderClick("day1")}
            >
              <img
                src="https://de34i7k6qwgwc.cloudfront.net/uploads/img/folder-d42ea2.png"
                alt="Folder"
                className="w-8 h-8 mr-2"
              />
              <span className="">Day 1</span>
            </div>
            <div 
              className="cursor-pointer" 
              onClick={() => handleFolderClick("day2")}
            >
              <img
                src="https://de34i7k6qwgwc.cloudfront.net/uploads/img/folder-d42ea2.png"
                alt="Folder"
                className="w-8 h-8 mr-2"
              />
              <span className="">Day 2</span>
            </div>
          </div>
        </>
      ) : title === "aboutus" ? (
        <div className="p-4 text-xs text-gray-800 overflow-y-auto flex-1">
          <h2 className="text-blue-900 font-bold text-sm">🚀 St. Thomas College proudly presents</h2>
          <h3 className="text-red-600 font-bold text-sm">SREY 2K25 🎉</h3>
          <p className="mt-2">
            Kolkata's premier on-campus tech festival. 💡🔥
          </p>
          <p className="mt-1">
            This immersive experience offers a dynamic platform for aspiring innovators and tech enthusiasts. 🛠️🤖
          </p>
          <p className="mt-1">
            Engage in thought-provoking events, insightful interactions, and electrifying competitions designed to challenge and inspire. 🎯⚡
          </p>
          <p className="mt-1">
            Network with knowledgeable minds, connect with fellow tech aficionados, and gain firsthand exposure to cutting-edge advancements. 🌐👨‍💻
          </p>
          <p className="mt-1 font-bold">
            Join us and be wired, inspired, and empowered! 🔥✨
          </p>
        </div>
      ) : title === "contact" ? (
        <div className="flex flex-col flex-1">
          <div className="flex items-center bg-gray-900 text-green-500 text-xs border-t border-b border-white px-2 py-1">
            <span>SREY2K25 Terminal v1.0</span>
          </div>
          <div className="flex flex-col flex-1 bg-black">
            <div 
              ref={terminalRef}
              className="text-green-500 font-mono text-xs p-2 flex-1 overflow-y-auto"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#4a5568 #000000',
                maxHeight: '130px'
              }}
            >
              {history.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
            <div className="flex bg-black text-green-500 font-mono text-xs px-2 py-1 border-t border-gray-800 relative">
              <span>{">"}</span>
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onClick={toggleDropdown}
                  className="bg-transparent text-green-500 font-mono text-xs border-none outline-none w-full ml-1 cursor-pointer"
                  autoFocus
                  placeholder="Click for commands"
                />
                {showDropdown && (
                  <div 
                    ref={dropdownRef}
                    className="absolute bottom-6 left-0 w-full bg-gray-800 border border-gray-700 shadow-lg max-h-24 overflow-y-auto z-50"
                  >
                    {commands.map((cmd, index) => (
                      <div 
                        key={index}
                        onClick={() => selectCommand(cmd.name)}
                        className="px-2 py-1 text-green-500 hover:bg-gray-700 cursor-pointer flex justify-between"
                      >
                        <span>{cmd.name}</span>
                        <span className="text-gray-400 text-xs">{cmd.description}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={processCommand}
                className="ml-1 bg-gray-800 text-green-500 px-1 hover:bg-gray-700"
              >
                ⏎
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-red-600 font-bold p-3 flex-1">❌ Access Denied: Invalid Folder</div>
      )}
    </div>
  );
};

export default Window;