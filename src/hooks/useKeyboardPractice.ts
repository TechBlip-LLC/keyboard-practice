import { useState, useCallback, useEffect } from 'react';
import { texts } from '../utils/texts';
import { calculateWPM, calculateAccuracy, calculateProgress } from '../utils/statistics';

export interface Stats {
  wpm: number;
  accuracy: number;
  errors: number;
}

export interface PracticeHistory {
  wpm: number;
  accuracy: number;
  date: Date;
}

export function useKeyboardPractice() {
  const [category, setCategory] = useState('basic');
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<PracticeHistory[]>([]);
  const [stats, setStats] = useState<Stats>({ wpm: 0, accuracy: 0, errors: 0 });
  const [progress, setProgress] = useState(0);
  const [currentKey, setCurrentKey] = useState('');

  const generateNewText = useCallback(() => {
    const categoryTexts = texts[category as keyof typeof texts];
    const randomIndex = Math.floor(Math.random() * categoryTexts.length);
    setText(categoryTexts[randomIndex]);
    setUserInput('');
    setTimeElapsed(0);
    setIsFinished(false);
    setStats({ wpm: 0, accuracy: 0, errors: 0 });
    setProgress(0);
    setCurrentKey('');
  }, [category]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFinished) return;
    
    const newInput = e.target.value;
    const lastChar = newInput.slice(-1);
    setCurrentKey(lastChar);
    setUserInput(newInput);
    
    const accuracy = calculateAccuracy(text, newInput);
    const wpm = calculateWPM(newInput, timeElapsed || 1);
    const errors = newInput.split('').filter((char, i) => char !== text[i]).length;
    const progress = calculateProgress(newInput, text.length);
    
    setStats({ wpm, accuracy, errors });
    setProgress(progress);
    
    if (newInput.length === text.length) {
      setIsFinished(true);
      setHistory(prev => [...prev, { wpm, accuracy, date: new Date() }]);
    }
  }, [text, timeElapsed, isFinished]);

  useEffect(() => {
    generateNewText();
  }, [category, generateNewText]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isFinished && userInput.length > 0) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isFinished, userInput.length]);

  return {
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
  };
}