import React from 'react';

interface KeyProps {
  char: string;
  isActive: boolean;
  width?: string;
}

export function Key({ char, isActive, width = 'w-12' }: KeyProps) {
  return (
    <div
      className={`
        ${width} h-12 rounded-xl flex items-center justify-center font-medium text-sm
        ${isActive 
          ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-200/50 scale-95 ring-2 ring-indigo-600 ring-offset-2' 
          : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
        }
        transition-all duration-150 transform
      `}
    >
      {char.toUpperCase()}
    </div>
  );
}