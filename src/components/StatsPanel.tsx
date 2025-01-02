import React from 'react';
import { Timer, Trophy, AlertCircle, Activity } from 'lucide-react';

interface StatsPanelProps {
  wpm: number;
  accuracy: number;
  errors: number;
  timeElapsed: number;
}

export default function StatsPanel({ wpm, accuracy, errors, timeElapsed }: StatsPanelProps) {
  const stats = [
    { icon: Activity, label: 'WPM', value: wpm },
    { icon: Trophy, label: 'Accuracy', value: `${accuracy}%` },
    { icon: AlertCircle, label: 'Errors', value: errors },
    { icon: Timer, label: 'Time', value: `${timeElapsed}s` },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Icon size={20} className="text-indigo-600" />
            <span className="font-medium">{label}</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">{value}</span>
        </div>
      ))}
    </div>
  );
}