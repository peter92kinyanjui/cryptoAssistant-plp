import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header darkMode={darkMode} />
      
      <main className="flex-grow flex flex-col items-center p-4">
        <div className="w-full max-w-4xl flex-grow flex flex-col">
          <div className="flex justify-end mb-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors duration-300`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <ChatInterface darkMode={darkMode} />
        </div>
      </main>
      
      <footer className={`py-4 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        © {new Date().getFullYear()} Crypto Advisor Bot - Educational purposes only
      </footer>
    </div>
  );
}

export default App;