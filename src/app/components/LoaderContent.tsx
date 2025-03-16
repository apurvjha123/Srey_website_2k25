'use client';

import React from 'react';

type LoaderContentProps = {
  progress?: number;  // Optional progress value (0-100)
};

const LoaderContent: React.FC<LoaderContentProps> = ({ progress = 0 }) => {
  // Create an array of CRT-themed loading messages
  const loadingMessages = [
    "Warming up electron gun...",
    "Adjusting vertical hold...",
    "Calibrating horizontal sync...",
    "Aligning phosphor grid...",
    "Initializing cathode ray...",
    "Synchronizing deflection coils..."
  ];

  // Select a message based on progress
  const messageIndex = Math.min(
    Math.floor(progress / (100 / loadingMessages.length)),
    loadingMessages.length - 1
  );

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 relative mb-4">
        {/* Animated CRT scan line */}
        <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute h-1 bg-blue-500 w-full top-1/2 left-0 animate-scanline"></div>
      </div>
      
      <div className="text-white font-mono text-lg">
        <span className="inline-block animate-blink">CRT System Initializing</span>
      </div>
      
      <div className="text-gray-400 font-mono text-sm mt-2">
        {loadingMessages[messageIndex]}
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-800 mt-4 relative overflow-hidden">
        <div 
          className="h-full bg-blue-500 absolute left-0 top-0 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="text-gray-500 font-mono text-xs mt-1">
        {progress.toFixed(0)}%
      </div>
    </div>
  );
};

export default LoaderContent;