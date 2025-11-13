import React from 'react';
import SecurityCard from './components/SecurityCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bitninja-light-gray flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SecurityCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;