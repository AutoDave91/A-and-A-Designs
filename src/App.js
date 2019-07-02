import React from 'react';

import './reset.css';
import './App.css';
import './Components/header_dashboard_cart.css';
import './Components/login_wizard.css';
import './Components/admin_userProfile.css';
import './responsive.css';
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