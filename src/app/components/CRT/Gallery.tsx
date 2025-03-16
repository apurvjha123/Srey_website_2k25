"use client";

import React, { useState } from "react";

interface GalleryProps {
  title: string;
  images: string[];
  onClose: (e?: React.MouseEvent) => void;
}

const Gallery: React.FC<GalleryProps> = ({ title, images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };
  
  return (
    <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden">
      <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs handle cursor-move">
        <span className="">{title}</span>
        <button 
          onClick={handleClose} 
          className="close-button bg-gray-600 border-l border-white text-black px-1"
        >
          ✖
        </button>
      </div>
      <div className="flex items-center bg-gray-400 text-white text-xs handle cursor-move border-t border-b border-white">
        <span className="border-r border-white px-1" onClick={onClose}>🔙</span>
        <span className="border-r border-white px-1" onClick={onClose}>🏠︎</span>
        <span className="px-2">{`C:\\Gallery\\${title}`}</span>
      </div>
      <div className="p-2 text-xs text-gray-800 h-[160px] bg-gray-300 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <button 
            onClick={prevImage} 
            className="bg-gray-400 hover:bg-gray-500 px-2 py-1 text-white"
            disabled={images.length <= 1}
          >
            ◀
          </button>
          <span className="text-center">Image {currentImageIndex + 1} of {images.length}</span>
          <button 
            onClick={nextImage} 
            className="bg-gray-400 hover:bg-gray-500 px-2 py-1 text-white"
            disabled={images.length <= 1}
          >
            ▶
          </button>
        </div>
        <div className="flex-1 bg-black flex items-center justify-center">
          {images.length > 0 ? (
            <img 
              src={images[currentImageIndex]} 
              alt={`Gallery image ${currentImageIndex + 1}`} 
              className="max-h-[110px] max-w-full object-contain"
            />
          ) : (
            <div className="text-white">No images available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;