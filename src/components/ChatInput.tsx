import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  darkMode: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, darkMode }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    
    // Auto-resize textarea
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end">
      <div className="relative flex-grow">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask about cryptocurrencies..."
          className={`w-full resize-none max-h-[150px] p-3 pr-12 rounded-lg ${
            darkMode 
              ? 'bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600' 
              : 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-gray-200'
          } focus:outline-none transition-colors duration-200`}
          rows={1}
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className={`absolute right-2 bottom-2 p-2 rounded-full ${
            message.trim()
              ? darkMode
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
              : darkMode
                ? 'bg-gray-600 text-gray-400'
                : 'bg-gray-300 text-gray-500'
          } transition-colors duration-200`}
        >
          <Send size={18} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;