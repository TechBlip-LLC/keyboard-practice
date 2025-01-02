import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export default function TextInput({ value, onChange, disabled }: TextInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors disabled:bg-gray-100"
      placeholder="Start typing..."
      autoFocus
    />
  );
}