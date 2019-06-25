import React from 'react';

import './reset.css'
import './App.css';
import './responsive.css'
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
