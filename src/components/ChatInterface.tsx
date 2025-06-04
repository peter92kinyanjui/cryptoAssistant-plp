import React, { useState, useRef, useEffect } from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import QuickActions from './QuickActions';
import { Message } from '../types/chat';
import { generateResponse } from '../utils/chatbot';

interface ChatInterfaceProps {
  darkMode: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ darkMode }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your cryptocurrency advisor. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toISOString()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsTyping(true);
    
    // Simulate bot thinking and typing
    setTimeout(async () => {
      const botResponse = await generateResponse(content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleQuickAction = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className={`flex-grow flex flex-col rounded-xl overflow-hidden border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div className="flex-grow flex flex-col overflow-hidden">
        <MessageList 
          messages={messages} 
          isTyping={isTyping} 
          darkMode={darkMode} 
          messagesEndRef={messagesEndRef}
        />
      </div>
      
      <QuickActions onSelect={handleQuickAction} darkMode={darkMode} />
      
      <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <ChatInput onSendMessage={handleSendMessage} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default ChatInterface;