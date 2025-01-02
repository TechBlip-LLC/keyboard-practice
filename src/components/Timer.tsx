import React from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface TimerProps {
  timeElapsed: number;
}

export default function Timer({ timeElapsed }: TimerProps) {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2 text-gray-600">
      <TimerIcon size={20} />
      <span className="text-2xl font-bold">{formatTime(timeElapsed)}</span>
    </div>
  );
}