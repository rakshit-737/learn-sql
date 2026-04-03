import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { useStore } from './store/store';

function App() {
  const { currentTopic, setCurrentTopic } = useStore();

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar currentTopic={currentTopic} onTopicChange={setCurrentTopic} />
        <ContentArea currentTopic={currentTopic} />
      </div>
    </div>
  );
}

export default App;
