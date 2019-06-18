import React from 'react';
import {HashRouter} from 'react-router-dom';

import './reset.css'
import './App.css';
import Header from './Components/Header';
import routes from './routes';

function App() {
  return (
    <main className="App">
      <Header />
      {routes}
    </main>
  );
}

export default App;
