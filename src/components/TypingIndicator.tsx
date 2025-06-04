import React from 'react';
import { Bot } from 'lucide-react';

interface TypingIndicatorProps {
  darkMode: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ darkMode }) => {
  return (
    <div className="flex justify-start">
      <div className="flex max-w-[80%] flex-row">
        <div className="shrink-0 flex items-start mt-1 mx-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            darkMode ? 'bg-blue-600' : 'bg-blue-500'
          }`}>
            <Bot size={16} className="text-white" />
          </div>
        </div>
        
        <div className={`rounded-2xl px-4 py-3 ${
          darkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="flex space-x-1">
            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} animate-bounce`} 
                 style={{ animationDelay: '0ms' }}></div>
            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} animate-bounce`} 
                 style={{ animationDelay: '150ms' }}></div>
            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} animate-bounce`} 
                 style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;