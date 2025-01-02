import React from 'react';
import { Book, Code, Quote } from 'lucide-react';

interface CategorySelectorProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategorySelector({ currentCategory, onCategoryChange }: CategorySelectorProps) {
  const categories = [
    { id: 'basic', name: 'Basic', icon: Book },
    { id: 'programming', name: 'Code', icon: Code },
    { id: 'quotes', name: 'Quotes', icon: Quote },
  ];

  return (
    <div className="flex gap-3 mb-8">
      {categories.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
            currentCategory === id
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105'
              : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Icon size={18} />
          {name}
        </button>
      ))}
    </div>
  );
}