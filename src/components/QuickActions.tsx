import React from 'react';
import { TrendingUp, Leaf, CircleDollarSign, HelpCircle } from 'lucide-react';

interface QuickActionsProps {
  onSelect: (question: string) => void;
  darkMode: boolean;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onSelect, darkMode }) => {
  const questions = [
    { id: 'q1', text: 'Which crypto is trending up?', icon: <TrendingUp size={16} /> },
    { id: 'q2', text: 'Most sustainable coin?', icon: <Leaf size={16} /> },
    { id: 'q3', text: 'Investment advice?', icon: <CircleDollarSign size={16} /> },
    { id: 'q4', text: 'Tell me about Cardano', icon: <HelpCircle size={16} /> },
  ];

  return (
    <div className={`py-3 px-4 border-t overflow-x-auto ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
      <p className={`text-xs mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Quick questions:</p>
      <div className="flex space-x-2">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => onSelect(question.text)}
            className={`whitespace-nowrap text-sm px-3 py-1.5 rounded-full flex items-center gap-2 ${
              darkMode 
                ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' 
                : 'bg-gray-200 text-blue-600 hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            {question.icon}
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions