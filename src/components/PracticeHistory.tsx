import React from 'react';
import { X } from 'lucide-react';

interface PracticeHistoryProps {
  history: Array<{ wpm: number; accuracy: number; date: Date }>;
  onClose: () => void;
}

export default function PracticeHistory({ history, onClose }: PracticeHistoryProps) {
  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <X size={20} />
      </button>
      
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Practice History</h2>
      
      {history.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No practice sessions recorded yet.</p>
          <p className="text-gray-400 mt-2">Complete a practice session to see your history.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((session, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl flex justify-between items-center hover:shadow-md transition-shadow"
            >
              <div className="flex gap-12">
                <div>
                  <span className="text-gray-500 text-sm">WPM</span>
                  <p className="text-2xl font-bold text-gray-900">{session.wpm}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Accuracy</span>
                  <p className="text-2xl font-bold text-gray-900">{session.accuracy}%</p>
                </div>
              </div>
              <div className="text-gray-500 text-sm">
                {session.date.toLocaleDateString()} {session.date.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}