import React from 'react';
import { RefreshCw, History, Keyboard } from 'lucide-react';
import TextDisplay from './TextDisplay';
import StatsPanel from './StatsPanel';
import CategorySelector from './CategorySelector';
import ProgressBar from './ProgressBar';
import TextInput from './TextInput';
import PracticeHistory from './PracticeHistory';
import { KeyboardLayout } from './Keyboard/KeyboardLayout';
import { useKeyboardPractice } from '../hooks/useKeyboardPractice';

export default function KeyboardPractice() {
  const {
    category,
    setCategory,
    text,
    userInput,
    timeElapsed,
    isFinished,
    showHistory,
    setShowHistory,
    history,
    stats,
    progress,
    currentKey,
    generateNewText,
    handleInput
  } = useKeyboardPractice();

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 ring-1 ring-black/5">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl text-white shadow-lg shadow-indigo-200">
                <Keyboard size={28} />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Keyboard Practice
              </h1>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow group"
              >
                <History size={20} className="group-hover:rotate-12 transition-transform" />
                History
              </button>
              <button
                onClick={generateNewText}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg shadow-indigo-200/50 hover:shadow-indigo-200/70 hover:-translate-y-0.5"
              >
                <RefreshCw size={20} className="group-hover:rotate-180 transition-transform" />
                New Text
              </button>
            </div>
          </div>

          {showHistory ? (
            <PracticeHistory history={history} onClose={() => setShowHistory(false)} />
          ) : (
            <div className="space-y-8">
              <CategorySelector 
                currentCategory={category} 
                onCategoryChange={setCategory} 
              />

              <div className="space-y-6">
                <ProgressBar progress={progress} />
                <TextDisplay text={text} userInput={userInput} />
                <TextInput
                  value={userInput}
                  onChange={handleInput}
                  disabled={isFinished}
                />
              </div>

              <div className="py-6">
                <KeyboardLayout currentKey={currentKey} />
              </div>

              <StatsPanel 
                wpm={stats.wpm}
                accuracy={stats.accuracy}
                errors={stats.errors}
                timeElapsed={timeElapsed}
              />

              {isFinished && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 text-green-700 rounded-2xl animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-lg font-medium">Practice completed! Click "New Text" to try another one.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}