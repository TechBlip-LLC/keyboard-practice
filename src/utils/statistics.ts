export const calculateWPM = (text: string, timeInSeconds: number): number => {
  const words = text.trim().split(' ').length;
  const minutes = timeInSeconds / 60;
  return Math.round(words / minutes);
};

export const calculateAccuracy = (original: string, typed: string): number => {
  let correct = 0;
  const length = Math.min(original.length, typed.length);
  
  for (let i = 0; i < length; i++) {
    if (original[i] === typed[i]) correct++;
  }
  
  return Math.round((correct / original.length) * 100);
};

export const calculateProgress = (typed: string, total: number): number => {
  return Math.round((typed.length / total) * 100);
};