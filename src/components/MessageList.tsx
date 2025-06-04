import React from 'react';
import { Message } from '../types/chat';
import MessageItem from './MessageItem';
import TypingIndicator from './TypingIndicator';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
  darkMode: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({ 
  messages, 
  isTyping, 
  darkMode, 
  messagesEndRef 
}) => {
  return (
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageItem 
            key={message.id} 
            message={message} 
            darkMode={darkMode} 
          />
        ))}
        
        {isTyping && (
          <TypingIndicator darkMode={darkMode} />
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;