import React from 'react';

interface TextDisplayProps {
  text: string;
  userInput: string;
}

export default function TextDisplay({ text, userInput }: TextDisplayProps) {
  return (
    <div className="text-xl font-medium mb-4 p-8 bg-white border border-gray-200 rounded-2xl leading-relaxed shadow-sm">
      {text.split('').map((char, index) => {
        let color = 'text-gray-400';
        let animation = '';
        
        if (index < userInput.length) {
          if (userInput[index] === char) {
            color = 'text-green-600 font-semibold';
            animation = 'animate-pop';
          } else {
            color = 'text-red-500 font-semibold';
            animation = 'animate-shake';
          }
        }
        
        return (
          <span 
            key={index} 
            className={`${color} ${animation} ${char === ' ' ? 'mr-1' : ''} transition-colors inline-block`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}