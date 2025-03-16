"use client";

import React from "react";

interface SponsorWindowProps {
  title: string;
  onClose: (e?: React.MouseEvent) => void;
  sponsors: SponsorItem[];
}

interface SponsorItem {
  id: string;
  name: string;
  image: string;
  website: string;
  tier?: string;
}

const SponsorWindow = ({ title, onClose, sponsors }: SponsorWindowProps) => {
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };
  
  // Function to handle redirect to sponsor website
  const handleSponsorClick = (website: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(website, '_blank');
  };

  return (
    <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden flex flex-col">
      {/* Title Bar */}
      <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs handle cursor-move">
        <span className="">{title}</span>
        <button
          onClick={handleClose}
          className="close-button bg-gray-600 border-l border-white text-black px-1"
        >
          ✖
        </button>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center bg-gray-400 text-white text-xs handle cursor-move border-t border-b border-white">
        <span className="border-r border-white px-1" onClick={onClose}>🔙</span>
        <span className="border-r border-white px-1" onClick={onClose}>🏠︎</span>
        <span className="px-2">C:\Sponsors\</span>
      </div>
      
      {/* Sponsors Grid with scroll */}
      <div className="bg-gray-300 p-2 text-xs flex-1 overflow-y-auto">
        <h2 className="text-blue-900 font-bold mb-2 text-sm">Our Sponsors</h2>
        
        {/* Group sponsors by tier if available */}
        {sponsors.length > 0 ? (
          <div className="grid grid-cols-1 gap-2">
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.id} 
                className="flex flex-col items-center bg-white p-2 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={(e) => handleSponsorClick(sponsor.website, e)}
                title={`Visit ${sponsor.name}`}
              >
                <div className="w-full h-16 flex items-center justify-center mb-1 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-center font-bold text-xs">{sponsor.name}</span>
                {sponsor.tier && (
                  <span className="text-center text-xs text-gray-500">{sponsor.tier}</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-32 text-gray-500">
            No sponsors available at this time
          </div>
        )}
      </div>
    </div>
  );
};

export default SponsorWindow;