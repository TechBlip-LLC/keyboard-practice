import React from 'react';
import KeyboardPractice from './components/KeyboardPractice';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="flex-grow">
        <KeyboardPractice />
      </main>
      <Footer />
    </div>
  );
}