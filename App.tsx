
import React from 'react';
import HomePage from './pages/HomePage';
import FloatingWidget from './components/FloatingWidget';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="bg-[#121212] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1a1a1a] text-center py-8 mt-16">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Reportage Properties. All Rights Reserved.</p>
        </footer>
    );
}

export default App;