'use client';

import React, { useState, useEffect } from 'react';
import LoaderContent from './LoaderContent';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <LoaderContent progress={progress} />
      
      {/* CRT screen effect */}
      <div className="crt-effect fixed inset-0 pointer-events-none z-40"></div>
      
      <style jsx global>{`
        .crt-effect {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-scanline {
          animation: scanline 2s linear infinite;
        }
        
        .animate-blink {
          animation: blink 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;