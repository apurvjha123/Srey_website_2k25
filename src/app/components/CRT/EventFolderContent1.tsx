"use client";

import React from "react";
import Draggable from "react-draggable";

interface EventFolderContent1Props {
  title: string;
  description: string;
  onClose: () => void;
  onItemClick: (item: string) => void;
}

const EventFolderContent1: React.FC<EventFolderContent1Props> = ({
  title,
  description,
  onClose,
  onItemClick
}) => {
  return (
    <Draggable handle=".handle">
      <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden">
        <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs">
          <span className="handle cursor-move flex-grow">{title}</span>
          <button 
            onClick={onClose} 
            className="bg-gray-600 border-l border-white text-black px-1 cursor-pointer"
          >
            ✖
          </button>
        </div>
        <div className="flex items-center bg-gray-400 text-white text-xs handle cursor-move border-t border-b border-white">
          <span className="border-r border-white px-1" onClick={onClose}>🔙</span>
          <span className="border-r border-white px-1" onClick={onClose}>🏠︎</span>
          <span className="px-2">{`C:\\Events\\Day1\\${title}`}</span>
        </div>
        <div className="p-4 text-xs text-gray-800 overflow-y-auto h-[160px]">
          <h2 className="text-blue-900 font-bold text-sm">{title} Event</h2>
          <p className="mt-2">{description}</p>
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center cursor-pointer" onClick={() => onItemClick('gallery')}>
                <img src="/folder-d42ea2.png" alt="Folder" className="w-6 h-6 mr-2" />
                <span>Gallery</span>
              </div>
              <div className="flex items-center cursor-pointer" onClick={() => onItemClick('rules')}>
                <img src="/text_icon.png" alt="PDF" className="w-6 h-6 mr-2" />
                <span>Rules.pdf</span>
              </div>
              <div className="flex items-center cursor-pointer" onClick={() => onItemClick('registration')}>
                <img src="/registration_icon.png" alt="Link" className="w-6 h-6 mr-2" />
                <span>Registration</span>
              </div>
              <div className="flex items-center cursor-pointer" onClick={() => onItemClick('about')}>
                <img src="/aboutus_icon.png" alt="Document" className="w-6 h-6 mr-2" />
                <span>Info.txt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default EventFolderContent1;