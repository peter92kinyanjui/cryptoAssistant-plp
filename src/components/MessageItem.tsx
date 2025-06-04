import React from 'react';
import { Message } from '../types/chat';
import { formatTimestamp } from '../utils/helpers';
import { Bitcoin, Bot, User } from 'lucide-react';

interface MessageItemProps {
  message: Message;
  darkMode: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, darkMode }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`shrink-0 flex items-start mt-1 mx-2`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isBot 
              ? darkMode ? 'bg-blue-600' : 'bg-blue-500' 
              : darkMode ? 'bg-green-600' : 'bg-green-500'
          }`}>
            {isBot 
              ? <Bot size={16} className="text-white" /> 
              : <User size={16} className="text-white" />
            }
          </div>
        </div>
        
        <div>
          <div className={`rounded-2xl px-4 py-3 ${
            isBot 
              ? darkMode ? 'bg-gray-700' : 'bg-gray-100' 
              : darkMode ? 'bg-blue-600' : 'bg-blue-500 text-white'
          }`}>
            <div className="text-sm break-words whitespace-pre-line">{message.content}</div>
          </div>
          
          <div className={`text-xs mt-1 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          } ${isBot ? 'text-left' : 'text-right'}`}>
            {formatTimestamp(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;