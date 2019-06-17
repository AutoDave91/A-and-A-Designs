import React from 'react';

import './reset.css'
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <main className="App">
      <Header />
      <Dashboard />
    </main>
  );
}

export default App;
