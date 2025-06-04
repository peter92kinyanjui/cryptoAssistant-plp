import React from 'react';
import { Bitcoin } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  return (
    <header className={`py-4 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
      <div className="max-w-4xl mx-auto flex items-center">
        <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} mr-3`}>
          <Bitcoin size={24} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Crypto Assistant</h1>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Your AI crypto companion</p>
        </div>
      </div>
    </header>
  );
};

export default Header;