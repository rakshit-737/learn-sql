import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { useStore } from './store/store';

function App() {
  const { currentTopic, setCurrentTopic } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header
        onMenuToggle={() => setMobileMenuOpen((o) => !o)}
        mobileMenuOpen={mobileMenuOpen}
      />
      <div className="main-container">
        <Sidebar
          currentTopic={currentTopic}
          onTopicChange={setCurrentTopic}
          mobileOpen={mobileMenuOpen}
          onMobileClose={() => setMobileMenuOpen(false)}
        />
        <ContentArea currentTopic={currentTopic} />
      </div>
    </div>
  );
}

export default App;
