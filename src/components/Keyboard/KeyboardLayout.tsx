import React from 'react';
import { Key } from './Key';

interface KeyboardLayoutProps {
  currentKey: string;
}

const KEYBOARD_LAYOUT = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

export function KeyboardLayout({ currentKey }: KeyboardLayoutProps) {
  const normalizedCurrentKey = currentKey.toLowerCase();

  return (
    <div className="flex flex-col gap-2 items-center">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {rowIndex === 2 && <div className="w-8" />} {/* Offset for last row */}
          {row.map((key) => (
            <Key
              key={key}
              char={key}
              isActive={key === normalizedCurrentKey}
            />
          ))}
        </div>
      ))}
      <div className="flex gap-1 mt-1">
        <Key char="space" isActive={normalizedCurrentKey === ' '} width="w-64" />
      </div>
    </div>
  );
}